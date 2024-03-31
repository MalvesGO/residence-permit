"use client";

import Image from "next/image";
import ResidenceFrente from "../public/frente.png";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="flex gap-32 p-32">
      <div>
        <div style={{ position: "relative" }}>
          <span
            className="name"
            style={{
              position: "absolute",
              zIndex: 1,
              marginTop: "100px",
              marginLeft: "250px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {name}
          </span>
          <Image
            src={ResidenceFrente}
            alt="Vercel Logo"
            width={600}
            height={16}
          />
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}