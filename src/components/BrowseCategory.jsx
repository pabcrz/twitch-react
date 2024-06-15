export default function BrowseCategory(props) {
  return (
    <a
      href="#"
      className="p-2 font-bold bg-[#5C16C5] flex justify-between rounded-lg h-[45px] items-center hover:bg-[#531da5]"
    >
      <p className="text-[24px] ml-[5px]">{props.title}</p>
      <img
        src={props.img}
        alt={`imagen de categoria ${props.title}`}
        className="size-16 overflow-x-clip overflow-y-clip"
      />
    </a>
  );
}
