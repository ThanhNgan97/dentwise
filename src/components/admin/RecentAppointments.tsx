import { useGetAppointments, useUpdateAppointmentStatus } from "@/hooks/use-appointments";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";

import { useLanguage } from "@/lib/language-context";

function RecentAppointments() {
    const { data: appointments = [] } = useGetAppointments();
    const updateAppointmentMutation = useUpdateAppointmentStatus();
    const { dict } = useLanguage();

    const handleToggleAppointmentStatus = (appointmentId: string) => {
        const appointment = appointments.find((apt) => apt.id === appointmentId);

        const newStatus = appointment?.status === "CONFIRMED" ? "COMPLETED" : "CONFIRMED";

        updateAppointmentMutation.mutate({ id: appointmentId, status: newStatus });
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "CONFIRMED":
                return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{dict?.dashboard?.admin?.appointments?.confirmed}</Badge>;
            case "COMPLETED":
                return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{dict?.dashboard?.admin?.appointments?.completed}</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {dict?.dashboard?.admin?.appointments?.title}
                </CardTitle>
                <CardDescription>{dict?.dashboard?.admin?.appointments?.subtitle}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{dict?.dashboard?.admin?.appointments?.patient}</TableHead>
                                <TableHead>{dict?.dashboard?.admin?.appointments?.doctor}</TableHead>
                                <TableHead>{dict?.dashboard?.admin?.appointments?.dateAndTime}</TableHead>
                                <TableHead>{dict?.dashboard?.admin?.appointments?.reason}</TableHead>
                                <TableHead>{dict?.dashboard?.admin?.appointments?.status}</TableHead>
                                <TableHead className="text-right">{dict?.dashboard?.admin?.appointments?.actions}</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {appointments.map((appointment) => (
                                <TableRow key={appointment.id}>
                                    <TableCell>
                                        <div>
                                            <div className="font-medium">{appointment.patientName}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {appointment.patientEmail}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium">{appointment.doctorName}</TableCell>
                                    <TableCell>
                                        <div>
                                            <div className="font-medium">
                                                {new Date(appointment.date).toLocaleDateString()}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{appointment.time}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{appointment.reason}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleToggleAppointmentStatus(appointment.id)}
                                            className="h-6 px-2"
                                        >
                                            {getStatusBadge(appointment.status)}
                                        </Button>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="text-xs text-muted-foreground">{dict?.dashboard?.admin?.appointments?.toggleStatus}</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}

export default RecentAppointments;
