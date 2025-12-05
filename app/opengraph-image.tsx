import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          padding: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        One Percent Lounge
      </div>
    ),
    size
  );
}
