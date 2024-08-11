import clsx from "clsx";

const SortBar = () => {
  return (
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-row justify-center items-center border bg-white border-neutral-300">
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
        <button
          className={clsx("hidden lg:flex text-2xl font-bold", {
            "text-blue-500": true,
          })}
        >
          ALPHABETICAL
        </button>
        <button
          className={clsx("lg:hidden flex text-2xl font-bold", {
            "text-blue-500": true,
          })}
        >
          ALPHA.
        </button>
      </div>
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
        <button
          className={clsx("flex text-2xl font-bold", {
            "text-blue-500": false,
          })}
        >
          RANK
        </button>
      </div>
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-t-0 border-b-0 border-l-0 border-r-0">
        <button
          className={clsx("flex text-2xl font-bold", {
            "text-blue-500": false,
          })}
        >
          RECORD
        </button>
      </div>
    </div>
  );
};

export default SortBar;
