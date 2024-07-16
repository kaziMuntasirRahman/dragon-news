const Qzone = () => {
  const images = [
    '/assets/qZone1.png',
    '/assets/qZone2.png',
    '/assets/qZone3.png']
  return (
    <div className="w-full bg-zinc-100">
      <h1 className="text-left p-4 text-neutral-700 text-xl font-semibold">Q-Zone</h1>
      <section className="flex flex-col gap-5">
        {
          images.map(img => <img key={img} src={img} />)
        }
      </section>
    </div>
  );
};

export default Qzone;