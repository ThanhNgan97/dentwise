import { NextResponse } from "next/server";
import { Resend } from "resend";
import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            userEmail,
            doctorName,
            appointmentDate,
            appointmentTime,
            appointmentType,
            duration,
            price,
        } = body;

        // Check for API key
        if (!process.env.RESEND_API_KEY) {
            console.warn("Missing RESEND_API_KEY environment variable. Email sending skipped.");
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY environment variable. Please add it to your .env file." },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "DentWise <onboarding@resend.dev>",
            to: [userEmail],
            subject: "Appointment Confirmation - DentWise",
            react: AppointmentConfirmationEmail({
                doctorName,
                appointmentDate,
                appointmentTime,
                appointmentType,
                duration,
                price
            }),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
