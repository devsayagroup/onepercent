import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact 1% Lounge | Private Rooms & Reservations",
  description:
    "Contact 1% Lounge for private room reservations, events, and exclusive experiences. Reach us via WhatsApp or visit our lounge.",
  openGraph: {
    title: "Contact 1% Lounge",
    description:
      "Get in touch with 1% Lounge for reservations, private rooms, and special events.",
    url: "https://onepercentlounge.id/contact",
    siteName: "1% Lounge",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
        <ContactPage/> 
    </>
  );
}
