"use client";
// Force refresh
import { useUpdateDoctor } from "@/hooks/use-doctors";
import { formatPhoneNumber } from "@/lib/utils";
import { Doctor, Gender } from "@prisma/client";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/language-context";

interface EditDoctorDialogProps {
    isOpen: boolean;
    onClose: () => void;
    doctor: Doctor | null;
}

function EditDoctorDialog({ doctor, isOpen, onClose }: EditDoctorDialogProps) {
    const { dict } = useLanguage();
    const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(doctor);

    const updateDoctorMutation = useUpdateDoctor();

    const handlePhoneChange = (value: string) => {
        const formattedPhoneNumber = formatPhoneNumber(value);
        if (editingDoctor) {
            setEditingDoctor({ ...editingDoctor, phone: formattedPhoneNumber });
        }
    };

    const handleSave = () => {
        if (editingDoctor) {
            updateDoctorMutation.mutate({ ...editingDoctor }, { onSuccess: handleClose });
        }
    };

    const handleClose = () => {
        onClose();
        setEditingDoctor(null);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>{dict?.dashboard?.admin?.doctors?.dialog?.editTitle}</DialogTitle>
                    <DialogDescription>{dict?.dashboard?.admin?.doctors?.dialog?.editSubtitle}</DialogDescription>
                </DialogHeader>

                {editingDoctor && (
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">{dict?.dashboard?.admin?.doctors?.dialog?.name}</Label>
                                <Input
                                    id="name"
                                    value={editingDoctor.name}
                                    onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="speciality">{dict?.dashboard?.admin?.doctors?.dialog?.speciality}</Label>
                                <Input
                                    id="speciality"
                                    value={editingDoctor.speciality}
                                    onChange={(e) =>
                                        setEditingDoctor({ ...editingDoctor, speciality: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">{dict?.dashboard?.admin?.doctors?.dialog?.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                value={editingDoctor.email}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">{dict?.dashboard?.admin?.doctors?.dialog?.phone}</Label>
                            <Input
                                id="phone"
                                value={editingDoctor.phone}
                                onChange={(e) => handlePhoneChange(e.target.value)}
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="gender">{dict?.dashboard?.admin?.doctors?.dialog?.gender}</Label>
                                <Select
                                    value={editingDoctor.gender || ""}
                                    onValueChange={(value) =>
                                        setEditingDoctor({ ...editingDoctor, gender: value as Gender })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder={dict?.dashboard?.admin?.doctors?.dialog?.selectGender} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="MALE">{dict?.dashboard?.admin?.doctors?.dialog?.male}</SelectItem>
                                        <SelectItem value="FEMALE">{dict?.dashboard?.admin?.doctors?.dialog?.female}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">{dict?.dashboard?.admin?.doctors?.dialog?.status}</Label>
                                <Select
                                    value={editingDoctor.isActive ? "active" : "inactive"}
                                    onValueChange={(value) =>
                                        setEditingDoctor({ ...editingDoctor, isActive: value === "active" })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">{dict?.dashboard?.admin?.doctors?.dialog?.active}</SelectItem>
                                        <SelectItem value="inactive">{dict?.dashboard?.admin?.doctors?.dialog?.inactive}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                )}

                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        {dict?.dashboard?.admin?.doctors?.dialog?.cancel}
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="bg-primary hover:bg-primary/90"
                        disabled={updateDoctorMutation.isPending}
                    >
                        {updateDoctorMutation.isPending ? dict?.dashboard?.admin?.doctors?.dialog?.saving : dict?.dashboard?.admin?.doctors?.dialog?.saveChanges}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default EditDoctorDialog;
