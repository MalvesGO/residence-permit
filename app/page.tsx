"use client";

import { useState } from "react";
import Cartao from "@/components/Cartao/Cartao";
import { InputText } from "@ama-pt/agora-design-system";

export default function Home() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <div className="flex gap-8">
      <div className="card-data w-full">
        <Cartao name={name} photo={photo} />
      </div>
      <div className="card-info w-full">
        <div className="p-16">
          <InputText
            label="Nome"
            type="text"
            placeholder="Seu nome e sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="p-16">
          <InputText
            label="Foto"
            type="text"
            placeholder="sua foto de perfil"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
