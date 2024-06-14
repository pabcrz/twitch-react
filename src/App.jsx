import Navbar from "./components/Navbar";
import ForYou from "./components/ForYou";
import Browse from "./components/Browse";
import CategorySection from "./components/CategorySection";

export default function App() {
  return (
    <main className="w-full min-h-screen grid grid-rows-[50px_1fr]">
      <Navbar />
      <div className="grid lg:grid-cols-[240px_1fr] sm:grid-cols-[50px_1fr]">
        <ForYou />
        <section>
          <Browse />
          <CategorySection />
        </section>
      </div>
    </main>
  );
}
