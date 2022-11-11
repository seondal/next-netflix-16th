const ItemsList = [
  { id: 0, info: "/img/Netflix_Symbol.png" },
  { id: 1, info: "TV Shows" },
  { id: 2, info: "Movies" },
  { id: 3, info: "My List" },
];

export default function Header() {
  return (
    <>
      <div className="container">
        {ItemsList.map((i) =>
          i.id === 0 ? (
            <img key={i.id} src={i.info} alt={"Logo"} />
          ) : (
            <div className="item" key={i.id}>
              {i.info}
            </div>
          )
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-evenly;
          background: transparent;
          position: relative;
          align-items: center;
        }
        .item {
          font-style: normal;
          font-weight: 400;
          font-size: 17.1968px;
        }
        img {
          object-fit: cover;
          width: 50px;
        }
      `}</style>
    </>
  );
}
