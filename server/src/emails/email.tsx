import { Button, Heading, Html } from "@react-email/components";
import * as React from "react";

interface EmailProps {
  email: string;
}

export const MyEmail: React.FC<EmailProps> = ({ email }) => {
  return (
    <Html>
      <Heading style={{ color: "#333" }}>Welcome, {email}</Heading>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
};

export default MyEmail;
