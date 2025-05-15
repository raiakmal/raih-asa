import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="tentang" className="w-full py-16 bg-[#f0f0ff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center m-0">
              Tentang
            </h2>
            <Image
              src="/logo.png"
              alt="Logo RaihAsa"
              width={150}
              height={150}
              className="mb-0"
              priority
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <p className="text-lg text-gray-700 mb-4 text-center">
            <span className="font-semibold text-purple-700">RaihAsa</span>{" "}
            adalah platform informasi beasiswa dan pendidikan yang didedikasikan
            untuk membantu pelajar dan mahasiswa Indonesia dalam meraih
            cita-cita pendidikan mereka. Kami menyediakan berbagai informasi
            beasiswa terbaru, berita pendidikan, serta tips dan inspirasi agar
            setiap generasi muda dapat mengakses peluang pendidikan yang lebih
            luas dan berkualitas.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-medium text-purple-700">Info Beasiswa</span>
              : Temukan berbagai beasiswa dari dalam dan luar negeri yang selalu
              diperbarui secara berkala. Setiap beasiswa dilengkapi dengan
              detail persyaratan, jadwal pendaftaran, dan tips lolos seleksi
              agar kamu bisa mempersiapkan diri dengan lebih baik.
            </li>
            <li>
              <span className="font-medium text-purple-700">Berita & Tips</span>
              : Dapatkan berita terbaru seputar dunia pendidikan, kisah sukses
              penerima beasiswa, serta tips seleksi dan pengembangan diri. Kami
              percaya, informasi yang tepat dapat menjadi kunci keberhasilan
              dalam meraih impian pendidikan.
            </li>
            <li>
              <span className="font-medium text-purple-700">
                Mitra Terpercaya
              </span>
              : RaihAsa bekerja sama dengan berbagai lembaga pendidikan,
              instansi pemerintah, dan perusahaan ternama untuk menghadirkan
              peluang beasiswa yang kredibel dan terpercaya. Kami berkomitmen
              menjadi jembatan antara pencari beasiswa dan penyedia program
              pendidikan terbaik.
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-10 mt-8">
          <Image
            src="/assets/icons/nextjs.svg"
            alt="Next.js"
            width={100}
            height={100}
            title="Next.js"
            className="hover:scale-110 transition duration-300"
          />
          <Image
            src="/assets/icons/tailwind.svg"
            alt="Tailwind CSS"
            width={100}
            height={100}
            title="Tailwind CSS"
            className="hover:scale-110 transition duration-300"
          />
          <Image
            src="/assets/icons/chatbot.svg"
            alt="Chatbot"
            width={100}
            height={100}
            title="Chatbot"
            className="hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
