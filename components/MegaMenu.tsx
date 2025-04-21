export default function MegaMenu() {
  return (
    <div className="absolute z-50 top-full left-0 right-0 bg-darkBrown text-beige py-12 px-8 rounded-b-3xl shadow-xl">
      <div className="container mx-auto grid md:grid-cols-3 gap-12">
        {[
          { title: 'Olivträd', items: ['60 år', '40 år', '20 år', '10 år'] },
          { title: 'Tjänster', items: ['Plantering', 'Utkörning', 'Vinterförvaring', 'Rådgivning'] },
          { title: 'Support', items: ['Kontakta oss', 'Vanliga frågor', 'Köpguide', 'Returer'] },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-semibold font-serif mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
