"use client";

import { useState } from "react";
import Cartao from "@/components/Cartao/Cartao";
import { InputText } from "@ama-pt/agora-design-system";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="flex gap-8 p-8">
      <div>
        <Cartao name={name} />
      </div>
      <form>
        <div className="p-16">
          <InputText
            label="Nome"
            type="text"
            placeholder="Seu nome e sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
