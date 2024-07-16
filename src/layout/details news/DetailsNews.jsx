import { GoArrowLeft } from "react-icons/go";

const DetailsNews = () => {
  return (
    <div className="p-[30px] text-left flex flex-col gap-2 border rounded-md">
      <img className="w-full h-[411px] mb-3 rounded-[5px]" src="https://via.placeholder.com/789x411" />
      <h2 className="w-full text-neutral-700 text-[25px] font-bold font-['Poppins'] leading-[45px]">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
      <p className="w-full text-neutral-500 text-base leading-relaxed  mb-6">
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.&apos;The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.&apos;The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>
      <button className="text-white bg-rose-600 px-6 py-2 text-xl font-medium leading-[30px] flex items-center gap-2 w-fit" >
        <GoArrowLeft className="text-2xl" />
        <p>All News in this category.</p>
      </button>
    </div>
  );
};

export default DetailsNews;