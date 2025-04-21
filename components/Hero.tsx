export default function Hero() {
  return (
    <section className="my-8">
      <div className="relative rounded-xl shadow-lg overflow-hidden" style={{ height: '460px' }}>
        <video 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-serif mb-2">Förgyll sommaren med exklusiva olivträd</h2>
          <p className="text-white mb-4">Utkörning, planering och vinterförvaring.</p>
          <button className="bg-white text-black py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
            Hyr Nu
          </button>
        </div>
      </div>
    </section>
  );
}
