"use client";

import { useState } from "react";
import Cartao from "@/components/Cartao/Cartao";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="flex gap-8 p-8">
      <div>
        <Cartao name={name} />
      </div>
      <form>
        <input
          type="text"
          placeholder="Your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
