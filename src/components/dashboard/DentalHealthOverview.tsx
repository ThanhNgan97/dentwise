"use client";

import { useUserAppointmentStats } from "@/hooks/use-appointments";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/language-context";

function DentalHealthOverview() {
    const { data: appointmentStats } = useUserAppointmentStats();
    const { user } = useUser();
    const { dict } = useLanguage();

    const stats = appointmentStats || { completedAppointments: 0, totalAppointments: 0 };

    return (
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BrainIcon className="size-5 text-primary" />
                    {dict.dashboard.dentalHealth.title}
                </CardTitle>
                <CardDescription>{dict.dashboard.dentalHealth.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-muted/30 rounded-xl">
                        <div className="text-2xl font-bold text-primary mb-1">
                            {stats.completedAppointments}
                        </div>
                        <div className="text-sm text-muted-foreground">{dict.dashboard.dentalHealth.completedVisits}</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-xl">
                        <div className="text-2xl font-bold text-primary mb-1">
                            {stats.totalAppointments}
                        </div>
                        <div className="text-sm text-muted-foreground">{dict.dashboard.dentalHealth.totalAppointments}</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-xl">
                        <div className="text-2xl font-bold text-primary mb-1">
                            {user?.createdAt ? format(new Date(user.createdAt), "MMM yyyy") : "..."}
                        </div>
                        <div className="text-sm text-muted-foreground">{dict.dashboard.dentalHealth.memberSince}</div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-start gap-3">
                        <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                            <MessageSquareIcon className="size-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary mb-1">{dict.dashboard.dentalHealth.promo.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                                {dict.dashboard.dentalHealth.promo.description}
                            </p>
                            <div className="flex gap-2">
                                <Link href="/voice">
                                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                                        {dict.dashboard.dentalHealth.promo.tryAi}
                                    </Button>
                                </Link>
                                <Link href="/appointments">
                                    <Button size="sm" variant="outline">
                                        {dict.dashboard.dentalHealth.promo.book}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DentalHealthOverview;
