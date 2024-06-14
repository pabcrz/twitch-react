import clsx from "clsx";

export default function Channel({ channel, online, game, viewers }) {
  return (
    <a
      className="flex justify-between items-center min-h-8 hover:bg-[#28282b] py-[5px] px-[10px]"
      href="#"
    >
      <div className="flex items-center gap-2">
        <img
          src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
          alt=""
          className="size-[30px] rounded-full"
        />
        <div
          className={clsx("flex text-[14px]", {
            "flex-col": online === true,
          })}
        >
          <h3
            className={clsx("font-medium", {
              "text-[14px]": online === false,
            })}
          >
            {channel}
          </h3>
          {online && <p className="text-slate-400 text-[13px]">{game}</p>}
        </div>
      </div>
      {online && (
        <p className="flex items-center gap-1 text-[13px]">
          <div className="rounded-full size-2 bg-red-600"></div> {viewers}
        </p>
      )}
      {!online && <p className="text-[13px]">Offline</p>}
    </a>
  );
}
