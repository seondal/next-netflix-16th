import { ITextInfo } from "../../interface";

export default function TextInfo({ name, isPreview }: ITextInfo) {
  return (
    <>
      <div className={isPreview ? "isPreview" : ""}>{name}</div>
      <style jsx>{`
        div {
          font-weight: 700;
          margin: 28px 14px 16px 0px;
          font-size: 20.92px;
        }
        .isPreview {
          font-size: 26.75px;
        }
      `}</style>
    </>
  );
}
