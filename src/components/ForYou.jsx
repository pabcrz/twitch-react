import Channel from "./Channel";
import channels from "./channels";

export default function ForYou() {
  return (
    <section className="hidden sm:block bg-[#1F1F23]">
      <section className="flex flex-col gap-2">
        <h2 className="font-semibold text-[18px] pt-3">For You</h2>
        <section className="flex flex-col py-3">
          <p className="text-slate-400 font-medium pb-1 text-[13px]">
            FOLLOWED CHANNELS
          </p>
          {channels.map((channel, index) => {
            if (channel.follow) {
              return (
                <Channel
                  key={index}
                  channel={channel.channel}
                  online={channel.online}
                  game={channel.game}
                  viewers={channel.viewers}
                />
              );
            }
          })}
        </section>
        <section className="flex gap-2 flex-col py-3">
          <p className="font-bold pb-1 text-[13px]">RECOMENDED CHANNELS</p>
          {channels.map((channel, index) => {
            if (!channel.follow && channel.online) {
              return (
                <Channel
                  key={index}
                  channel={channel.channel}
                  online={channel.online}
                  game={channel.game}
                  viewers={channel.viewers}
                />
              );
            }
          })}
        </section>
      </section>
    </section>
  );
}
