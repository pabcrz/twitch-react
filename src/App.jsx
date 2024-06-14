import Navbar from "./components/Navbar";
import ForYou from "./components/ForYou";
import Browse from "./components/Browse";
import GameCategory from "./components/GameCategory";

export default function App() {
  return (
    <main className="w-full min-h-screen grid grid-rows-[50px_1fr]">
      <Navbar />
      <div className="grid lg:grid-cols-[240px_1fr] sm:grid-cols-[50px_1fr]">
        <ForYou />
        <section className="p-4 flex flex-col gap-7">
          <Browse />
          <div className="flex text-sm font-semibold gap-3">
            <a
              className="font-semibold text-[18px] p-1 text-purple-400 border-b-purple-400 border-b-2 pb-3"
              href="#"
            >
              Categories
            </a>
            <a
              className="font-semibold text-[18px] p-1 hover:text-purple-400"
              href="#"
            >
              Live Channels
            </a>
          </div>
          <GameCategory />
        </section>
      </div>
    </main>
  );
}
