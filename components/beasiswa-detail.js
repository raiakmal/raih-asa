import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export const scholarships = [
  {
    slug: "djarum-plus",
    name: "Beasiswa Djarum Plus",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://djarumbeasiswaplus.org/",
    description:
      "Beasiswa Djarum Plus adalah program beasiswa prestasi untuk mahasiswa S1/D4 di seluruh Indonesia. Program ini memberikan bantuan dana pendidikan, pelatihan soft skills, dan jaringan alumni.",
    requirements: [
      "Mahasiswa aktif S1/D4",
      "IPK minimal 3.00",
      "Belum menerima beasiswa lain",
    ],
  },
  {
    slug: "bank-indonesia",
    name: "Beasiswa Bank Indonesia",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.bi.go.id/id/bi-institute/beasiswa/",
    description:
      "Beasiswa Bank Indonesia diberikan kepada mahasiswa berprestasi dari berbagai perguruan tinggi di Indonesia.",
    requirements: [
      "Mahasiswa aktif minimal semester 3",
      "IPK minimal 3.00",
      "Aktif dalam organisasi kemahasiswaan",
    ],
  },
  {
    slug: "ppa",
    name: "Beasiswa PPA",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://beasiswa.kemdikbud.go.id/",
    description:
      "Beasiswa Peningkatan Prestasi Akademik (PPA) diberikan kepada mahasiswa berprestasi secara akademik.",
    requirements: [
      "Mahasiswa aktif S1/D3",
      "IPK minimal 3.00",
      "Surat keterangan penghasilan orang tua",
    ],
  },
  {
    slug: "unggulan-kemendikbud",
    name: "Beasiswa Unggulan Kemendikbud",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://beasiswaunggulan.kemdikbud.go.id/",
    description:
      "Beasiswa Unggulan Kemendikbud untuk pelajar dan mahasiswa berprestasi di bidang akademik maupun non-akademik.",
    requirements: [
      "Mahasiswa baru atau aktif",
      "Prestasi tingkat nasional/internasional",
      "Surat rekomendasi",
    ],
  },
  {
    slug: "kse",
    name: "Beasiswa Karya Salemba Empat",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://kse.or.id/",
    description:
      "Beasiswa KSE mendukung mahasiswa S1 dari keluarga kurang mampu di berbagai perguruan tinggi negeri.",
    requirements: [
      "Mahasiswa S1 minimal semester 2",
      "Tidak sedang menerima beasiswa lain",
      "Surat keterangan tidak mampu",
    ],
  },
  {
    slug: "bca-finance",
    name: "Beasiswa BCA Finance",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.bcafinance.co.id/beasiswa",
    description:
      "Beasiswa BCA Finance diberikan kepada mahasiswa berprestasi dengan IPK tinggi dan aktif di organisasi.",
    requirements: [
      "Mahasiswa S1 minimal semester 5",
      "IPK minimal 3.20",
      "Aktif organisasi",
    ],
  },
  {
    slug: "xl-future-leaders",
    name: "Beasiswa XL Future Leaders",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.xlfutureleaders.com/",
    description:
      "Program pengembangan kepemimpinan dan soft skills untuk mahasiswa S1 di seluruh Indonesia.",
    requirements: [
      "Mahasiswa S1 semester 2-4",
      "Komitmen mengikuti pelatihan",
      "Mengisi formulir online",
    ],
  },
  {
    slug: "astra",
    name: "Beasiswa Astra",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.astra.co.id/CSR/Beasiswa",
    description:
      "Beasiswa Astra mendukung mahasiswa berprestasi di bidang teknik dan non-teknik.",
    requirements: [
      "Mahasiswa S1/D4",
      "IPK minimal 3.00",
      "Surat rekomendasi kampus",
    ],
  },
  {
    slug: "sampoerna-foundation",
    name: "Beasiswa Sampoerna Foundation",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.sampoernafoundation.org/",
    description:
      "Beasiswa penuh untuk mahasiswa S1 dengan prestasi akademik dan non-akademik.",
    requirements: [
      "Mahasiswa S1",
      "Prestasi akademik/non-akademik",
      "Surat keterangan tidak mampu",
    ],
  },
  {
    slug: "cimb-niaga",
    name: "Beasiswa CIMB Niaga",
    semester: "ganjil",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.cimbniaga.com/id/personal/promotion/beasiswa-cimb-niaga",
    description:
      "Beasiswa CIMB Niaga diberikan kepada mahasiswa berprestasi di bidang ekonomi dan bisnis.",
    requirements: [
      "Mahasiswa S1 Ekonomi/Bisnis",
      "IPK minimal 3.25",
      "Surat rekomendasi fakultas",
    ],
  },
  {
    slug: "indonesia-maju",
    name: "Beasiswa Indonesia Maju",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://beasiswa-indonesiamaju.kemdikbud.go.id/",
    description:
      "Beasiswa Indonesia Maju mendukung pelajar dan mahasiswa berprestasi untuk studi lanjut di dalam dan luar negeri.",
    requirements: [
      "Pelajar/mahasiswa berprestasi",
      "Surat rekomendasi",
      "Essay motivasi",
    ],
  },
  {
    slug: "lpdp",
    name: "Beasiswa LPDP",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://lpdp.kemenkeu.go.id/",
    description:
      "Beasiswa LPDP adalah program beasiswa penuh dari pemerintah Indonesia untuk S2 dan S3 di dalam dan luar negeri.",
    requirements: ["WNI", "Lulus S1/S2", "Essay kontribusi dan rencana studi"],
  },
  {
    slug: "bidikmisi",
    name: "Beasiswa Bidikmisi",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://bidikmisi.belmawa.ristekdikti.go.id/",
    description:
      "Beasiswa Bidikmisi diberikan kepada mahasiswa baru dari keluarga kurang mampu dengan prestasi akademik.",
    requirements: [
      "Lulusan SMA/SMK",
      "Surat keterangan tidak mampu",
      "Diterima di PTN/PTS",
    ],
  },
  {
    slug: "tanoto-foundation",
    name: "Beasiswa Tanoto Foundation",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.tanotofoundation.org/id/",
    description:
      "Beasiswa Tanoto Foundation mendukung mahasiswa S1 berprestasi di berbagai universitas mitra.",
    requirements: [
      "Mahasiswa S1 semester 1-2",
      "IPK minimal 3.25",
      "Aktif organisasi",
    ],
  },
  {
    slug: "baznas",
    name: "Beasiswa Baznas",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://beasiswa.baznas.go.id/",
    description:
      "Beasiswa Baznas diberikan kepada mahasiswa kurang mampu yang berprestasi di bidang akademik.",
    requirements: [
      "Mahasiswa aktif",
      "Surat keterangan tidak mampu",
      "IPK minimal 2.75",
    ],
  },
  {
    slug: "mizan",
    name: "Beasiswa Mizan",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://mizan.com/beasiswa/",
    description:
      "Beasiswa Mizan mendukung mahasiswa yang sedang menyelesaikan skripsi, tesis, atau disertasi.",
    requirements: [
      "Mahasiswa S1/S2/S3",
      "Sedang menyusun tugas akhir",
      "Proposal penelitian",
    ],
  },
  {
    slug: "pertamina-sobat-bumi",
    name: "Beasiswa Pertamina Sobat Bumi",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://sobatbumi.id/",
    description:
      "Beasiswa Pertamina Sobat Bumi untuk mahasiswa yang peduli lingkungan dan aktif di kegiatan sosial.",
    requirements: [
      "Mahasiswa aktif",
      "Aktif kegiatan lingkungan",
      "IPK minimal 3.00",
    ],
  },
  {
    slug: "vdmi",
    name: "Beasiswa VDMI",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.vdmscholarship.org/",
    description:
      "Beasiswa VDMI diberikan kepada mahasiswa D3/S1 dari keluarga kurang mampu.",
    requirements: [
      "Mahasiswa D3/S1",
      "Surat keterangan tidak mampu",
      "IPK minimal 3.00",
    ],
  },
  {
    slug: "tokopedia",
    name: "Beasiswa Tokopedia",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://www.tokopedia.com/blog/academy/",
    description:
      "Beasiswa Tokopedia Academy untuk mahasiswa IT dan teknologi yang berprestasi.",
    requirements: [
      "Mahasiswa S1 IT/Teknologi",
      "IPK minimal 3.20",
      "Essay motivasi",
    ],
  },
  {
    slug: "dataprint",
    name: "Beasiswa DataPrint",
    semester: "genap",
    image: "/assets/beasiswa/default.jpg",
    url: "https://beasiswadataprint.com/",
    description:
      "Beasiswa DataPrint untuk pelajar dan mahasiswa aktif dengan seleksi esai.",
    requirements: [
      "Pelajar/mahasiswa aktif",
      "Mengisi formulir online",
      "Essay motivasi",
    ],
  },
];

export default function BeasiswaDetail({ scholarship }) {
  if (!scholarship) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">
            Beasiswa tidak ditemukan
          </h1>
          <Link href="/beasiswa" className="text-purple-600 hover:underline">
            Kembali ke daftar beasiswa
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <div className="w-full max-w-md aspect-[16/9] mb-4 relative">
              <Image
                src={scholarship.image || "/assets/beasiswa/default.jpg"}
                alt={scholarship.name}
                fill
                className="object-cover rounded-xl border-4 border-purple-200 shadow-md"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">
              {scholarship.name}
            </h1>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mb-2">
              Semester {scholarship.semester === "ganjil" ? "Ganjil" : "Genap"}
            </span>
          </div>
          <p className="mb-6 text-gray-700 text-center">
            {scholarship.description}
          </p>
          <h2 className="text-xl font-semibold mb-2 text-purple-800">
            Syarat Pendaftaran
          </h2>
          <ul className="mb-6 list-disc pl-6 text-gray-800">
            {scholarship.requirements.map((req, idx) => (
              <li key={idx} className="mb-1">
                {req}
              </li>
            ))}
          </ul>
          {scholarship.url && (
            <div className="flex justify-center mb-4">
              <a
                href={scholarship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition mb-2"
              >
                Kunjungi Website Beasiswa
              </a>
            </div>
          )}
          <div className="flex justify-center">
            <Link
              href="/beasiswa"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 transition"
            >
              Kembali ke daftar beasiswa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}