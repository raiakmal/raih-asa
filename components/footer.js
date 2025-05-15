import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-purple-50 to-[#f0f0ff] border-t border-purple-200 mt-16 relative">
      <div className="container mx-auto px-4 md:px-16 py-10">
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Kiri: Logo dan Sosmed */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="Logo RaihAsa"
              width={80}
              height={80}
              className="object-contain rounded-xl shadow"
              priority
            />
            <p className="text-gray-700 text-base text-center md:text-left max-w-sm">
              WEBSITE INFORMASI BEASISWA UNTUK KEMUDAHAN AKSES PELUANG BEASISWA
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="X"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition"
                />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/youtube.svg"
                  alt="YouTube"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition"
                />
              </Link>
            </div>
          </div>
          {/* Tengah: Navigasi */}
          <nav className="flex flex-col gap-2 text-gray-700 text-base md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 md:pt-0 pt-8">
            <Link href="#beranda" className="hover:text-purple-600 transition">
              Beranda
            </Link>
            <Link href="/beasiswa" className="hover:text-purple-600 transition">
              Beasiswa
            </Link>
            <Link href="#berita" className="hover:text-purple-600 transition">
              Berita
            </Link>
            <Link href="#mitra" className="hover:text-purple-600 transition">
              Mitra
            </Link>
            <Link href="#tentang" className="hover:text-purple-600 transition">
              Tentang
            </Link>
          </nav>
          {/* Kanan: Policy */}
          <div className="flex flex-col gap-2 text-gray-700 text-base md:pt-4">
            <Link
              href="/privacy-policy"
              className="hover:text-purple-600 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-600 transition">
              Terms of Service
            </Link>
            <Link
              href="mailto:info@raihasa.com"
              className="hover:text-purple-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kontak
            </Link>
          </div>
        </div>
        <div className="border-t border-purple-100 mt-10 pt-4 text-center text-gray-500 text-md tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-700">RaihAsa</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}