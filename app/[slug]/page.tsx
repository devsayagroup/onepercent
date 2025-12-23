// import { notFound } from "next/navigation";
// import { rooms } from "@/lib/room-data";
// import RoomHero from "@/components/rooms/RoomHero";
// import RoomDetails from "@/components/rooms/RoomDetails";
// import RoomGallery from "@/components/rooms/RoomGallery";

// interface RoomPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function RoomPage({ params }: RoomPageProps) {
//   const room = rooms.find((r) => r.slug === params.slug);

//   if (!room) return notFound();

//   return (
//     <main className="bg-black text-white">
//       <RoomHero room={room} />
//       <RoomDetails room={room} />
//       <RoomGallery images={room.gallery} />
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { rooms } from "@/lib/room-data";
import RoomHero from "@/components/rooms/RoomHero";
import RoomDetails from "@/components/rooms/RoomDetails";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomPricing from "@/components/rooms/RoomPricing";
import OtherRooms from "@/components/rooms/OtherRooms";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) return notFound();

  return (
    <section className="relative min-h-screen bg-stone-950 text-white overflow-hidden">
        <RoomHero room={room} />
        <RoomDetails room={room} />
        <RoomGallery images={room.gallery} />
        <RoomPricing room={room} />
        <OtherRooms currentSlug={slug} rooms={rooms} />
    </section>
  );
}
