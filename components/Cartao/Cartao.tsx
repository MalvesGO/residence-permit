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
      <div className="cartao">
        <div className="card-data grid justify-center gap-32 p-32">
          <div
            className="frente"
            style={{
              backgroundImage: `url(${ResidenceFrente.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "500px",
              height: "315px",
            }}
          >
            <Image
              src={photo || "https://via.placeholder.com/150"}
              alt="card image photo"
              className="photo"
              width={150}
              height={150}
            />
            <span className="name">{name}</span>
          </div>
          <div
            className="frente"
            style={{
              backgroundImage: `url(${ResidenceVerso.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "500px",
              height: "315px",
            }}
          ></div>
        </div>
      </div>
      {/* <Image
        src={photo || "https://via.placeholder.com/150"}
        alt="card image photo"
        className="photo"
        width={150}
        height={150}
      />
      <span className="name">{name}</span> */}
      {/* <Image
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
      /> */}
    </div>
  );
}
