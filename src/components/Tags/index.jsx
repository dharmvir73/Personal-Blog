import TagsList from "./TagList";

const list = [
  { id: 1, amount: 1, language: "javascript" },
  { id: 2, amount: 2, language: "css" },
  { id: 3, amount: 2, language: "html" },
];

const Tags = () => {
  return (
    <>
      <div className="flex flex-col gap-1 justify-center bg-[#111827] py-5 ">
        <div className="w-[90%] self-center flex flex-wrap gap-5">
          {list.map((item) => (
            <TagsList
              key={item.id}
              amount={item.amount}
              language={item.language}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
