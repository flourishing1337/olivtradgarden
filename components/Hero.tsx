export default function Hero() {
  return (
    <section className="rounded-b-3xl overflow-hidden relative h-[600px] shadow-lg">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-serif text-beige mb-4">
          Förgyll sommaren, hyr olivträd
        </h1>
        <p className="text-lg text-sand mb-6">
          Få hjälp med utkörning, planering och vinterförvaring.
        </p>
        <button className="bg-olive text-white px-8 py-3 rounded-full hover:bg-darkBrown transition-colors">
          Hyr Nu
        </button>
      </div>
    </section>
  );
}
