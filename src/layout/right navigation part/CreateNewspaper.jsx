const CreateNewspaper = () => {
  return (
    <div className="relative w-full">
      <img src="/public/assets/bg.png" className="size-full" />
      <div className="absolute size-full left-0 top-0 flex flex-col gap-5 py-[65px] px-[35px]">
        <h1 className="text-center text-white text-3xl font-bold">
          Create an Amazing Newspaper
        </h1>
        <h2 className="text-center text-white leading-relaxed mb-[10px]">
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </h2>
        <button
          className="rounded-none bg-rose-600 text-xl text-white font-semibold px-[19px] py-[17px]"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CreateNewspaper;