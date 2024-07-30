import { Button, Html } from "@react-email/components";
import * as React from "react";

interface EmailProps {
  url: string;
}

export const MyEmail: React.FC<EmailProps> = ({ url }) => {
  return (
    <Html>
      <Button
        // href="https://example.com"
        href={url}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
};

export default MyEmail;
