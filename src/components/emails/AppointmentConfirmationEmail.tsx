import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface AppointmentConfirmationEmailProps {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    appointmentType: string;
    duration: string;
    price: string;
}

function AppointmentConfirmationEmail({
    doctorName,
    appointmentDate,
    appointmentTime,
    appointmentType,
    duration,
    price,
}: AppointmentConfirmationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Your dental appointment has been confirmed</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Logo - Centered */}
                    <Section style={headerSection}>
                        <div style={logoWrapper}>
                            <Img
                                /* 
                                   NOTE: For local testing using public URL. 
                                   Switch to `${process.env.NEXT_PUBLIC_APP_URL}/logo.png` in production.
                                */
                                src="https://img.icons8.com/color/96/tooth.png"
                                width="40"
                                height="40"
                                alt="DentWise"
                                style={logo}
                            />
                            <span style={brandName}>DentWise</span>
                        </div>
                    </Section>

                    {/* Heading - Centered */}
                    <Heading style={h1}>Appointment Confirmed! 🦷</Heading>

                    {/* Main Content Card - Left Aligned Text */}
                    <Section style={contentSection}>
                        <Text style={greetingText}>Hi there,</Text>
                        <Text style={paragraph}>
                            Your dental appointment has been successfully booked. Here are the details:
                        </Text>

                        {/* Details Card */}
                        <Section style={detailsCard}>
                            <div style={detailItem}>
                                <Text style={detailLabel}>Doctor</Text>
                                <Text style={detailValue}>{doctorName}</Text>
                            </div>

                            <div style={detailItem}>
                                <Text style={detailLabel}>Appointment Type</Text>
                                <Text style={detailValue}>{appointmentType}</Text>
                            </div>

                            <div style={detailItem}>
                                <Text style={detailLabel}>Date</Text>
                                <Text style={detailValue}>{appointmentDate}</Text>
                            </div>

                            <div style={detailItem}>
                                <Text style={detailLabel}>Time</Text>
                                <Text style={detailValue}>{appointmentTime}</Text>
                            </div>

                            <div style={detailItem}>
                                <Text style={detailLabel}>Duration</Text>
                                <Text style={detailValue}>{duration}</Text>
                            </div>

                            <div style={detailItem}>
                                <Text style={detailLabel}>Cost</Text>
                                <Text style={detailValue}>{price}</Text>
                            </div>

                            <div style={detailItemLast}>
                                <Text style={detailLabel}>Location</Text>
                                <Text style={detailValue}>Dental Center</Text>
                            </div>
                        </Section>

                        <Text style={helperText}>
                            Please arrive 15 minutes early for your appointment. If you need to reschedule or cancel, please contact us at least 24 hours in advance.
                        </Text>

                        <Section style={buttonContainer}>
                            <Link style={button} href={`${process.env.NEXT_PUBLIC_APP_URL}/appointments`}>
                                View My Appointments
                            </Link>
                        </Section>

                        <Text style={footerSignOff}>
                            Best regards,
                            <br />
                            The DentWise Team
                        </Text>

                    </Section>

                </Container>
            </Body>
        </Html>
    );
}

export default AppointmentConfirmationEmail;

/* Styles */
const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: "40px 0",
};

const container = {
    margin: "0 auto",
    padding: "0",
    width: "100%",
    maxWidth: "560px",
};

const headerSection = {
    textAlign: "center" as const,
    marginBottom: "30px",
};

const logoWrapper = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
};

const logo = {
    display: "block",
    margin: "0",
};

const brandName = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2563eb",
    position: "relative" as const,
    top: "-8px", // Visual alignment
};

const h1 = {
    color: "#1f2937",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "0 0 30px 0",
};

const contentSection = {
    padding: "0 10px", // Slight padding for mobile/email clients
};

const greetingText = {
    fontSize: "16px",
    color: "#374151",
    margin: "0 0 16px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#374151",
    margin: "0 0 24px",
};

const detailsCard = {
    backgroundColor: "#f9fafb", // Very light gray background
    borderRadius: "8px",
    padding: "32px", // Generous padding inside the card
    marginBottom: "32px",
};

const detailItem = {
    marginBottom: "24px", // Space between items
};

const detailItemLast = {
    marginBottom: "0",
};

const detailLabel = {
    fontSize: "13px",
    color: "#9ca3af", // Lighter gray for labels
    margin: "0 0 4px",
    fontWeight: "500",
};

const detailValue = {
    fontSize: "16px",
    color: "#1f2937", // Dark for values
    fontWeight: "bold",
    margin: "0",
};

const helperText = {
    fontSize: "15px",
    color: "#4b5563",
    lineHeight: "24px",
    margin: "0 0 30px",
};

const buttonContainer = {
    textAlign: "center" as const,
    marginBottom: "40px",
};

const button = {
    backgroundColor: "#2563eb",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 32px",
};

const footerSignOff = {
    fontSize: "15px",
    color: "#4b5563",
    lineHeight: "24px",
    margin: "0",
};
