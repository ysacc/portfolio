import { ImageResponse } from "next/og";
export const alt = "Ysacc Roncal Academy · Desarrollo web con proyectos reales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#101110",
        color: "#f5f5ec",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 28, color: "#e9b95c" }}>
        YSACC RONCAL / ACADEMY
      </div>
      <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.1 }}>
        Aprende desarrollo web con proyectos reales.
      </div>
      <div style={{ fontSize: 25, color: "#b3b5ad" }}>
        De aprender código a trabajar como desarrollador.
      </div>
    </div>,
    size,
  );
}
