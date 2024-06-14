import Channel from "./Channel";
import channels from "./channels";
import CamLogo from "./CamLogo";
import Heart from "./Heart";

export default function ForYou() {
  return (
    <section className="hidden sm:block bg-[#1F1F23]">
      <section className="flex flex-col gap-2 items-center lg:items-stretch">
        <h2 className="font-semibold text-[18px] pt-3 hidden lg:block px-2">
          For You
        </h2>
        <Heart className="lg:hidden size-6 mt-5" />
        <section className="flex flex-col py-3">
          <p className="text-slate-400 font-medium pb-1 text-[13px] hidden lg:block px-2">
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
        <CamLogo className="lg:hidden size-6" />
        <section className="flex gap-2 flex-col py-3">
          <p className="font-bold pb-1 text-[13px] hidden lg:block px-2">
            RECOMENDED CHANNELS
          </p>
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
