import Image from "next/image";
import ResidenceFrente from "../../public/frente.png";
import ResidenceVerso from "../../public/verso.png";
import "./cartao.scss";

interface CartaoProps {
  name: string;
}

export default function Cartao({ name }: CartaoProps) {
  return (
    <div className="cartao">
      <img
        src="https://avatars.githubusercontent.com/u/10326782?v=4"
        alt=""
        className="photo"
      />
      <span className="name">{name}</span>
      <Image
        src={ResidenceFrente}
        alt="residence permit"
        width={500}
        height={16}
      />

      <Image
        src={ResidenceVerso}
        alt="residence permit"
        width={500}
        height={16}
      />
    </div>
  );
}
