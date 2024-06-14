import BrowseCategory from "./BrowseCategory";
export default function Browse() {
  const categorys = [
    {
      title: "Games",
      img: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
    },
    {
      title: "IRL",
      img: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
    },
    {
      title: "Music",
      img: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
    },
    {
      title: "Creative",
      img: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
    },
    {
      title: "Esports",
      img: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
    },
  ];
  return (
    <section className="p-4 flex flex-col">
      <h1 className="font-bold text-[54px] pb-6">Browse</h1>
      <div className=" hidden sm:block">
        <article className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categorys.map((category, index) => {
            return (
              <BrowseCategory
                key={index}
                title={category.title}
                img={category.img}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}
