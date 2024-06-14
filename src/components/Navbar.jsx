import Twitch from "./TwitchLogo";
import Search from "./SearchLogo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 bg-[#18181B]">
      <div className="flex h-full items-center">
        <Twitch height="24px" width="28px" />
        <a
          href="#"
          className="font-semibold p-1 hover:text-purple-400 items-center h-full flex"
        >
          Following
        </a>
        <a
          href="#"
          className="font-semibold p-1 hover:text-purple-400 items-center h-full flex"
        >
          Browse
        </a>
      </div>
      <div className="flex">
        <input
          className="bg-black border border-gray-400 rounded-s p-1 hidden md:block"
          type="text"
          placeholder="Seach"
        />
        <a className="bg-[#2F2F35] p-1 rounded-e hidden md:block" href="#">
          <Search height="24px" width="24px" />
        </a>
      </div>
      <div className="flex gap-2">
        <button className="p-1 bg-[#2F2F35] px-3 rounded font-semibold">
          Log In
        </button>
        <button className="p-1 bg-purple-500 px-3 rounded font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
