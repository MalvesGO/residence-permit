import Image from "next/image";
import ResidenceFrente from "../../public/frente.png";
import ResidenceVerso from "../../public/verso.png";
import "./cartao.scss";

interface CartaoProps {
  /**
   * The name of the person
   */
  name: string;
    /**
     * The photo of the person
     */
  photo: string;
}

export default function Cartao({ name, photo }: CartaoProps) {
  return (
    <div className="cartao">
      <Image
        src={photo || "https://via.placeholder.com/150"}
        alt="card image photo"
        className="photo"
        width={150}
        height={150}
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
