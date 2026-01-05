import { NextResponse } from "next/server";
import { Resend } from "resend";

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
            // We return an error so the client knows it failed, but we log the specific reason server-side
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY environment variable. Please add it to your .env file." },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "DentWise <onboarding@resend.dev>", // Default Resend testing sender
            to: [userEmail], // Note: interactions with onboarding@resend.dev are limited to the verified email in Resend dashboard unless a domain is set up
            subject: "Appointment Confirmation - DentWise",
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .details { background-color: #f9fafb; padding: 20px; border-radius: 8px; }
                .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; }
                .detail-row:last-child { border-bottom: none; }
                .label { font-weight: bold; color: #6b7280; }
                .footer { text-align: center; margin-top: 30px; font-size: 0.875rem; color: #9ca3af; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Appointment Confirmed!</h1>
                    <p>Dear Patient,</p>
                    <p>Your appointment with <strong>${doctorName}</strong> has been successfully booked.</p>
                </div>
                
                <div class="details">
                    <div class="detail-row">
                        <span class="label">Date</span>
                        <span>${appointmentDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Time</span>
                        <span>${appointmentTime}</span>
                    </div>
                     <div class="detail-row">
                        <span class="label">Type</span>
                        <span>${appointmentType}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Duration</span>
                        <span>${duration}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Price</span>
                        <span>${price}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>Please arrive 10 minutes before your scheduled appointment.</p>
                    <p>Thank you for choosing DentWise!</p>
                </div>
            </div>
        </body>
        </html>
      `,
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
