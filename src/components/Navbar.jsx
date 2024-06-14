import Twitch from "./TwitchLogo";
import Search from "./SearchLogo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 bg-[#18181B]">
      <div className="flex h-full items-center gap-4">
        <Twitch height="30px" width="30px" />
        <a
          href="#"
          className="font-semibold p-1text-purple-400 border-b-purple-400 border-b-2 items-center h-full flex text-[14px]"
        >
          Following
        </a>
        <a
          href="#"
          className="font-semibold p-1 hover:text-purple-400 items-center h-full flex text-[14px]"
        >
          Browse
        </a>
      </div>
      <div className="flex">
        <input
          className="bg-[#18181B] border border-gray-500 rounded-s p-1 px-2 hidden md:block w-[356px] text-[14px]"
          type="text"
          placeholder="Search"
        />
        <a className="bg-[#2F2F35] p-1 rounded-e hidden md:block" href="#">
          <Search height="24px" width="24px" />
        </a>
      </div>
      <div className="flex gap-2">
        <button className="p-1 bg-[#2F2F35] px-3 rounded font-semibold text-[13px] hover:bg-[#3b3b41]">
          Log In
        </button>
        <button className="p-1 bg-[#9147FF] px-3 rounded font-semibold text-[13px] hover:bg-[#793ed1]">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
