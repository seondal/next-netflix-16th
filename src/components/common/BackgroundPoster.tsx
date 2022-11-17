import { getImage } from "../../api";

interface BackgroundPosterProps {
  children?: JSX.Element;
  url: string;
}

export default function BackgroundPoster({
  children,
  url,
}: BackgroundPosterProps) {
  const backgroundImage = getImage(url);

  return (
    <>
      <div className="image_box">{children}</div>
      <style jsx>{`
        div {
          object-fit: cover;
          height: 415px;
          width: 375px;
          margin-bottom: 13px;
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.45) 0%,
              rgba(0, 0, 0, 0) 87.26%,
              #000000 100%
            ),
            url(${backgroundImage});
        }
      `}</style>
    </>
  );
}
