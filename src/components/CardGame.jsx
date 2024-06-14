import CategoryTag from "./CategoryTag";

export default function CardGame(props) {
  const { tags } = props;

  return (
    <div className="flex flex-col">
      <img src={props.image} alt={props.title} className="max-w-full h-auto" />
      <div className="flex flex-col py-2">
        <h3 className="text-[14px] font-semibold">{props.title}</h3>
        <p className="text-[12px] text-slate-400">{props.views} views</p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag, i) => {
          return <CategoryTag key={i} title={tag} />;
        })}
      </div>
    </div>
  );
}
