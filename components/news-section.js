import Image from "next/image"
import Link from "next/link"

export default function NewsSection() {
  const featuredNews = {
    id: 1,
    title: "Djarum Membuka Beasiswa",
    image: "/assets/news1.png",
    excerpt:
      "Program beasiswa Djarum untuk mahasiswa berprestasi telah dibuka. Pendaftaran dapat dilakukan secara online.",
    date: "3 Mei 2025",
    url: "/berita/djarum-membuka-beasiswa",
  }

  const secondaryNews = [
    {
      id: 2,
      title: "Djarum Membuka Beasiswa",
      image: "/assets/news2.png",
      excerpt: "Djarum membuka beasiswa",
      date: "2 Mei 2025",
      url: "/berita/djarum-membuka-beasiswa-2",
    },
    {
      id: 3,
      title: "Djarum Membuka Beasiswa",
      image: "/assets/news3.png",
      excerpt: "Djarum membuka beasiswa",
      date: "1 Mei 2025",
      url: "/berita/djarum-membuka-beasiswa-3",
    },
  ]

  const moreNews = [
    {
      id: 4,
      title: "Djarum Membuka Beasiswa",
      excerpt: "Djarum membuka beasiswa",
      date: "30 April 2025",
      url: "/berita/djarum-membuka-beasiswa-4",
    },
    {
      id: 5,
      title: "Djarum Membuka Beasiswa",
      excerpt: "Djarum membuka beasiswa",
      date: "29 April 2025",
      url: "/berita/djarum-membuka-beasiswa-5",
    },
    {
      id: 6,
      title: "Djarum Membuka Beasiswa",
      excerpt: "Djarum membuka beasiswa",
      date: "28 April 2025",
      url: "/berita/djarum-membuka-beasiswa-6",
    },
    {
      id: 7,
      title: "Djarum Membuka Beasiswa",
      excerpt: "Djarum membuka beasiswa",
      date: "27 April 2025",
      url: "/berita/djarum-membuka-beasiswa-7",
    },
    {
      id: 8,
      title: "Djarum Membuka Beasiswa",
      excerpt: "Djarum membuka beasiswa",
      date: "26 April 2025",
      url: "/berita/djarum-membuka-beasiswa-8",
    },
  ]

  return (
    <section id="berita" className="w-full py-12 bg-[#f0f0ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-10">Berita Seputar Beasiswa</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Featured News */}
          <div className="lg:col-span-2 bg-purple-200 rounded-xl overflow-hidden shadow-md">
            <div className="p-4 md:p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{featuredNews.title}</h3>
              <div className="relative w-full h-64 md:h-80 mb-6">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 mb-4">{featuredNews.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{featuredNews.date}</span>
                <Link href={featuredNews.url} className="text-purple-600 hover:text-purple-800 font-medium">
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary News */}
          <div className="space-y-6">
            {secondaryNews.map((news) => (
              <div key={news.id} className="bg-purple-200 rounded-xl overflow-hidden shadow-md">
                <div className="p-4 flex">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-bold text-gray-800">{news.title}</h3>
                    <p className="text-sm text-gray-700">{news.excerpt}</p>
                    <Link href={news.url} className="text-xs text-purple-600 hover:underline mt-2 block">
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More News List */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md p-4 space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Berita Lainnya</h4>
            <ul className="space-y-4">
              {moreNews.map((news, index) => (
                <li key={news.id} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-medium text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-800">{news.title}</h5>
                    <p className="text-xs text-gray-600">{news.excerpt}</p>
                    <Link href={news.url} className="text-xs text-purple-600 hover:underline">
                      Lihat berita
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}