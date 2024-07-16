import { CiCalendar } from "react-icons/ci";

const EditorsInsights = () => {
  return (
    <div className="space-y-5 mt-[30px]">
      <h2 className="text-neutral-700 text-[25px] text-left font-semibold">
        Editors Insight
      </h2>
      <section className="flex justify-between text-left">
        {
          [...Array(3)].map((_, index) =>
            <div key={index} className="w-[267px] space-y-5">
              <img src="" className="h-40 bg-zinc-300" alt="" />
              <h2 className=" text-neutral-700 text-xl font-semibold">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h2>
              <div className="text-neutral-400 text-base font-medium leading-relaxed flex gap-2 items-center">
                <CiCalendar className="text-2xl" />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default EditorsInsights;