import { IFooter } from "../../interface";

export default function FooterItem({ alt, name, selected }: IFooter) {
  let src = "";
  if (selected) {
    src = "/img/Footer/" + name + ".png";
  } else {
    src = "/img/Footer/" + name + "-2.png";
  }

  return (
    <>
      <div className="container">
        <button className={selected ? "selected" : ""}>
          <img alt={alt} src={src} width={25} height={25} />
          <div className="font">{name}</div>
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        button {
          border: 0;
          outline: 0;
          background: black;
          color: #8c8787;
        }
        .selected {
          color: "white";
        }
        .font {
          font-size: 8.2px;
        }
      `}</style>
    </>
  );
}
