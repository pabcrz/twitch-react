import CategoryTag from "./CategoryTag";

export default function CardGame(props) {
  return (
    <div className="flex flex-col">
      <div className="hover:translate-x-1 hover:-translate-y-2 transition duration-100 relative">
        <img
          src={props.image}
          alt={props.title}
          className="max-w-full h-auto "
        />
        {props.isnew && (
          <p className="top-1 right-1 bg-[#FF75E6] rounded-2xl absolute p-[1px] px-2 text-[10px] text-black font-medium">
            NEW
          </p>
        )}
      </div>
      <div className="flex flex-col py-2">
        <a className="text-[14px] font-semibold hover:text-purple-500" href="#">
          {props.title}
        </a>
        <p className="text-[12px] text-slate-400">{props.views} views</p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {props.tags.map((tag, i) => {
          return <CategoryTag key={i} title={tag} />;
        })}
      </div>
    </div>
  );
}
