import Link from "next/link";

interface LinktoMovieDataProps {
  children?: JSX.Element;
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export default function LinktoMovieData({
  children,
  id,
  original_title,
  backdrop_path,
  overview,
}: LinktoMovieDataProps) {
  return (
    <Link
      href={{
        pathname: `/movies/${id}`,
        query: {
          title: original_title,
          backdrop: backdrop_path,
          overview: overview,
        },
      }}
      as={`/movies/${id}`}
      key={id}
    >
      {children}
    </Link>
  );
}
