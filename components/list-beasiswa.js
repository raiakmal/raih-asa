import Link from "next/link";

export default function ListBeasiswa() {
  const oddSemesterScholarships = [
    {
      id: 1,
      name: "Beasiswa Djarum Plus",
      url: "/beasiswa/djarum-plus",
    },
    {
      id: 2,
      name: "Beasiswa Bank Indonesia",
      url: "/beasiswa/bank-indonesia",
    },
    {
      id: 3,
      name: "Beasiswa PPA",
      url: "/beasiswa/ppa",
    },
    {
      id: 4,
      name: "Beasiswa Unggulan Kemendikbud",
      url: "/beasiswa/unggulan-kemendikbud",
    },
    {
      id: 5,
      name: "Beasiswa Karya Salemba Empat",
      url: "/beasiswa/kse",
    },
    {
      id: 6,
      name: "Beasiswa BCA Finance",
      url: "/beasiswa/bca-finance",
    },
    {
      id: 7,
      name: "Beasiswa XL Future Leaders",
      url: "/beasiswa/xl-future-leaders",
    },
    {
      id: 8,
      name: "Beasiswa Astra",
      url: "/beasiswa/astra",
    },
    {
      id: 9,
      name: "Beasiswa Sampoerna Foundation",
      url: "/beasiswa/sampoerna-foundation",
    },
    {
      id: 10,
      name: "Beasiswa CIMB Niaga",
      url: "/beasiswa/cimb-niaga",
    },
  ];

  const evenSemesterScholarships = [
    {
      id: 1,
      name: "Beasiswa Indonesia Maju",
      url: "/beasiswa/indonesia-maju",
    },
    {
      id: 2,
      name: "Beasiswa LPDP",
      url: "/beasiswa/lpdp",
    },
    {
      id: 3,
      name: "Beasiswa Bidikmisi",
      url: "/beasiswa/bidikmisi",
    },
    {
      id: 4,
      name: "Beasiswa Tanoto Foundation",
      url: "/beasiswa/tanoto-foundation",
    },
    {
      id: 5,
      name: "Beasiswa Baznas",
      url: "/beasiswa/baznas",
    },
    {
      id: 6,
      name: "Beasiswa Mizan",
      url: "/beasiswa/mizan",
    },
    {
      id: 7,
      name: "Beasiswa Pertamina Sobat Bumi",
      url: "/beasiswa/pertamina-sobat-bumi",
    },
    {
      id: 8,
      name: "Beasiswa VDMI",
      url: "/beasiswa/vdmi",
    },
    {
      id: 9,
      name: "Beasiswa Tokopedia",
      url: "/beasiswa/tokopedia",
    },
    {
      id: 10,
      name: "Beasiswa DataPrint",
      url: "/beasiswa/dataprint",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#f0f0ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
            Beasiswa yang Tersedia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Odd Semester Card */}
          <div className="relative bg-[#fff2eb] rounded-xl p-6 shadow-md overflow-hidden">
            {/* Background Number */}
            <div className="absolute right-4 top-4 text-[120px] font-bold text-[#ffcdb2] opacity-80 leading-none z-0">
              01
            </div>

            {/* Background Graduation Caps */}
            <div className="absolute inset-0 z-0 opacity-10">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Semester Ganjil</h3>
              <ul className="space-y-3">
                {oddSemesterScholarships.map((scholarship) => (
                  <li key={scholarship.id} className="flex items-start">
                    <span className="mr-2">{scholarship.id}.</span>
                    <Link
                      href={scholarship.url}
                      className="text-gray-800 hover:text-purple-600 transition-colors"
                    >
                      {scholarship.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Even Semester Card */}
          <div className="relative bg-[#e6f2ff] rounded-xl p-6 shadow-md overflow-hidden">
            {/* Background Number */}
            <div className="absolute right-4 top-4 text-[120px] font-bold text-[#b3d9ff] opacity-80 leading-none z-0">
              02
            </div>

            {/* Background Graduation Caps */}
            <div className="absolute inset-0 z-0 opacity-10">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Semester Genap</h3>
              <ul className="space-y-3">
                {evenSemesterScholarships.map((scholarship) => (
                  <li key={scholarship.id} className="flex items-start">
                    <span className="mr-2">{scholarship.id}.</span>
                    <Link
                      href={scholarship.url}
                      className="text-gray-800 hover:text-purple-600 transition-colors"
                    >
                      {scholarship.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
