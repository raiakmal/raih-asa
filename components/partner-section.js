import Image from "next/image"
import Link from "next/link"

export default function PartnerSection() {
  const partners = [
    {
      id: 1,
      name: "Kementerian Pendidikan dan Kebudayaan",
      logo: "/assets/logo-kemdikbud.png",
      url: "https://www.kemdikbud.go.id/",
    },
    {
      id: 2,
      name: "Bank Central Asia",
      logo: "/assets/logo-bca.png",
      url: "https://www.bca.co.id/",
    },
    {
      id: 3,
      name: "Kementerian Agama",
      logo: "/assets/logo-kemenag.png",
      url: "https://kemenag.go.id/",
    },
    {
      id: 4,
      name: "Lembaga Pengelola Dana Pendidikan",
      logo: "/assets/logo-lpdp.png",
      url: "https://lpdp.kemenkeu.go.id/",
    },
  ]

  return (
    <section className="w-full py-12 bg-[#f0f0ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-10">
          Media Partner Kami
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 items-center">
          {partners.map((partner) => (
            <Link
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi ${partner.name}`}
              className="group"
            >
              <div className="relative w-full h-40 md:h-52 bg-white rounded-xl transition">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}