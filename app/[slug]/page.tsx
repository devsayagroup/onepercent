import { notFound } from "next/navigation";
import { rooms } from "@/lib/room-data";
import type { Metadata } from "next";
import RoomHero from "@/components/rooms/RoomHero";
import RoomDetails from "@/components/rooms/RoomDetails";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomPricing from "@/components/rooms/RoomPricing";
import OtherRooms from "@/components/rooms/OtherRooms";

type Props = {
  params: Promise<{ slug: string }>;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found | 1% Lounge",
      description: "The requested room does not exist at 1% Lounge.",
    };
  }

  return {
    title: room.seoTitle,
    description: room.seoDescription,
    openGraph: {
      title: room.seoTitle,
      description: room.seoDescription,
      images: [room.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: room.seoTitle,
      description: room.seoDescription,
      images: [room.coverImage],
    },
  };
}


export default async function RoomPage({ params }: Props) {
  const { slug } = await params;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) return notFound();

  return (
    <>
        <section className="sr-only">
            <h1>{room.name} at 1% Lounge Jakarta</h1>
            <p>{room.description}</p>
            <p>
                This private room is part of 1% Lounge Jakarta, offering exclusive lounge
                experiences, privacy, and a refined atmosphere for intimate gatherings.
            </p>
        </section>
        <section className="relative min-h-screen bg-stone-950 text-white overflow-hidden">
            <RoomHero room={room} />
            <RoomDetails room={room} />
            <RoomGallery images={room.gallery} />
            <RoomPricing room={room} />
            <OtherRooms currentSlug={slug} rooms={rooms} />
        </section>
    </>
  );
}
