const SocialLinks = () => {

  const socialLinks = [
    {
      logo: "/assets/facebook.png",
      name: "Facebook"
    },
    {
      logo: "/assets/twitter.png",
      name: "Twitter"
    },
    {
      logo: "/assets/instagram.png",
      name: "Instagram.com"
    }
  ]

  return (
    <div className="w-full">
      <h1 className="text-neutral-700 text-xl font-semibold text-left mb-5">
        Find Us On
      </h1>
      <section className="rounded-xl border border-neutral-200">
        {
          socialLinks.map(socialLink =>
            <div className="flex items-center gap-3 p-4 w-full border-b" key={socialLink.name}>
              <div className="size-[30px] rounded-full bg-gray-200 flex justify-center items-center">
                <img
                  className="size-[15px]"
                  src={socialLink.logo}
                  alt={socialLink.name + " logo"}
                />
              </div>
              <h2 className="text-neutral-500 font-medium">{socialLink.name}</h2>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default SocialLinks;