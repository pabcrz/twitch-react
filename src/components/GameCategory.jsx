import CardGame from "./CardGame";
import games from "./games";

export default function GameCategory() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 p-2 md:px-3 w-full justify-items-center">
      {games.map((game, i) => (
        <CardGame
          key={i}
          title={game.title}
          views={game.views}
          tags={game.tags}
          image={game.img}
          isnew={game.isnew}
        />
      ))}
    </section>
  );
}
