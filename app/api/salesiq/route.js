import { readFileSync } from "fs";
import path from "path";
import crypto from "crypto";
import { NextResponse } from "next/server";

const answers = {
  "apa itu beasiswa kip": "Beasiswa KIP adalah bantuan biaya pendidikan dari pemerintah Indonesia untuk siswa kurang mampu.",
  "syarat beasiswa kip": "Syarat Beasiswa KIP meliputi KTP, KK, dan bukti penghasilan orang tua.",
  "jadwal pendaftaran beasiswa lpdp": "Pendaftaran Beasiswa LPDP biasanya dibuka dua kali dalam setahun, sekitar bulan Januari dan Juli.",
  "bagaimana cara mendaftar beasiswa lpdp": "Pendaftaran Beasiswa LPDP dilakukan secara online melalui situs resmi lpdp.kemenkeu.go.id.",
  "jadwal beasiswa unggulan": "Beasiswa Unggulan biasanya dibuka tiap semester, namun tanggal pastinya dapat berbeda setiap tahun.",
  "berapa lama proses seleksi beasiswa": "Proses seleksi beasiswa biasanya berlangsung antara 1 hingga 3 bulan setelah pendaftaran ditutup.",
  "dokumen yang harus dipersiapkan untuk beasiswa": "Dokumen umum yang diperlukan meliputi KTP, ijazah terakhir, transkrip nilai, surat rekomendasi, dan proposal studi.",
  "apakah ada beasiswa untuk mahasiswa aktif": "Ya, banyak beasiswa yang ditujukan khusus untuk mahasiswa aktif, seperti beasiswa prestasi atau beasiswa bantuan biaya hidup.",
  "jadwal pengumuman hasil beasiswa bidikmisi": "Pengumuman hasil beasiswa Bidikmisi biasanya dilakukan 1-2 bulan setelah pendaftaran berakhir.",
  "bagaimana cara mengecek status pendaftaran beasiswa": "Status pendaftaran dapat dicek melalui portal resmi penyelenggara beasiswa dengan memasukkan nomor registrasi atau NIM.",
  "apakah beasiswa bisa diperpanjang": "Beberapa beasiswa bisa diperpanjang jika penerima masih memenuhi persyaratan akademik dan administratif.",
  "jadwal pendaftaran beasiswa dari pemerintah daerah": "Jadwal beasiswa pemerintah daerah berbeda-beda tergantung kebijakan masing-masing daerah, biasanya diumumkan di situs resmi daerah.",
  "apa saja jenis beasiswa yang tersedia": "Jenis beasiswa meliputi beasiswa prestasi, beasiswa afirmasi, beasiswa riset, beasiswa bantuan biaya hidup, dan beasiswa khusus bidang tertentu.",
  "bagaimana cara membatalkan pendaftaran beasiswa": "Pembatalan pendaftaran biasanya dilakukan melalui portal resmi penyelenggara dengan mengikuti prosedur yang ditentukan.",
  "apa manfaat beasiswa prestasi": "Beasiswa prestasi memberikan dukungan finansial dan motivasi bagi mahasiswa berprestasi untuk melanjutkan pendidikan.",
  "jadwal penerimaan beasiswa luar negeri": "Jadwal penerimaan beasiswa luar negeri berbeda-beda tergantung program, biasanya pengumuman ada di situs resmi masing-masing beasiswa.",
  "apa itu beasiswa afirmasi": "Beasiswa afirmasi ditujukan untuk kelompok kurang beruntung atau daerah tertinggal agar mendapatkan akses pendidikan yang lebih baik.",
  "berapa lama waktu yang dibutuhkan untuk proses beasiswa": "Waktu proses beasiswa bervariasi, mulai dari beberapa minggu hingga beberapa bulan tergantung jenis dan penyelenggara beasiswa.",
  "apakah penerima beasiswa harus melapor kemajuan studi": "Ya, biasanya penerima beasiswa wajib melapor kemajuan studi secara berkala sebagai syarat pencairan dana selanjutnya.",
  "apa yang harus dilakukan jika tidak lolos seleksi beasiswa": "Jika tidak lolos, kamu bisa mencoba mendaftar kembali di periode berikutnya atau mencari beasiswa alternatif lain.",
  "apakah beasiswa bisa dicairkan tunai": "Sebagian besar beasiswa biasanya langsung diberikan ke institusi pendidikan, tetapi ada juga yang berupa tunai sesuai aturan program.",
  "jadwal seminar beasiswa": "Jadwal seminar atau sosialisasi beasiswa biasanya diumumkan oleh penyelenggara melalui website atau media sosial resmi mereka.",
  "berapa nilai beasiswa lpdp": "Nilai Beasiswa LPDP bervariasi tergantung jenjang pendidikan dan kebutuhan studi, biasanya mencakup biaya pendidikan dan biaya hidup.",
  "apakah beasiswa lpdp bisa untuk luar negeri": "Ya, Beasiswa LPDP dapat digunakan untuk studi dalam dan luar negeri sesuai program yang tersedia.",
  "cara mengajukan beasiswa bidikmisi": "Pengajuan Beasiswa Bidikmisi dilakukan melalui pendaftaran di perguruan tinggi negeri yang bekerjasama dengan pemerintah.",
  "jadwal pengumuman beasiswa lpdp": "Pengumuman hasil seleksi Beasiswa LPDP biasanya dilakukan beberapa minggu setelah tes seleksi.",
  "apakah bisa menerima lebih dari satu beasiswa": "Bisa, tetapi ada aturan yang mengatur beasiswa tumpang tindih, sebaiknya cek ketentuan masing-masing penyelenggara.",
  "apa itu beasiswa prestasi": "Beasiswa prestasi diberikan kepada siswa atau mahasiswa dengan catatan akademik atau non-akademik yang sangat baik.",
  "jadwal pendaftaran beasiswa bidikmisi": "Pendaftaran Beasiswa Bidikmisi biasanya dibuka sebelum tahun ajaran baru dimulai, bisa cek di website resmi kampus.",
  "apakah beasiswa dapat ditarik kembali": "Ya, beasiswa dapat ditarik kembali jika penerima melanggar ketentuan atau tidak memenuhi persyaratan.",
  "bagaimana cara mengajukan beasiswa afirmasi": "Biasanya diajukan melalui institusi pendidikan atau dinas pendidikan setempat sesuai ketentuan daerah.",
  "apa saja persyaratan umum beasiswa": "Umumnya meliputi prestasi akademik, dokumen identitas, surat rekomendasi, dan rencana studi atau proposal.",
  "apa itu beasiswa bantuan biaya hidup": "Beasiswa ini bertujuan membantu mahasiswa yang membutuhkan biaya untuk kebutuhan hidup selama studi.",
  "bagaimana proses seleksi beasiswa": "Proses seleksi meliputi administrasi, tes tertulis, wawancara, dan verifikasi dokumen.",
  "apakah beasiswa untuk pelajar SMA": "Ya, ada beasiswa khusus untuk pelajar SMA, seperti Beasiswa Unggulan atau beasiswa dari pemerintah daerah.",
  "apa saja jenis beasiswa lpdp": "Beasiswa LPDP terdiri dari Beasiswa Pendidikan Magister, Doktor, Tesis, Disertasi, dan Beasiswa Afirmasi.",
  "berapa lama durasi beasiswa lpdp": "Durasi beasiswa LPDP sesuai jenjang pendidikan, biasanya 2 tahun untuk magister dan 3-4 tahun untuk doktor.",
  "jadwal ujian beasiswa": "Jadwal ujian beasiswa biasanya diumumkan bersamaan dengan pengumuman pendaftaran dan informasi seleksi.",
  "bagaimana cara mendapatkan surat rekomendasi beasiswa": "Surat rekomendasi biasanya diperoleh dari dosen, guru, atau atasan yang mengenal prestasi kamu.",
  "apakah bisa mengajukan beasiswa di luar negeri": "Bisa, banyak program beasiswa untuk studi luar negeri seperti Fulbright, Chevening, dan LPDP.",
  "apa yang harus dipersiapkan saat wawancara beasiswa": "Persiapkan jawaban tentang tujuan studi, rencana masa depan, motivasi, dan latar belakang akademik.",
  "bagaimana cara mengecek hasil seleksi beasiswa": "Hasil seleksi biasanya diumumkan melalui website resmi penyelenggara atau email pendaftar.",
  "apa itu beasiswa riset": "Beasiswa riset diberikan untuk mendukung penelitian di bidang tertentu selama masa studi.",
  "apa perbedaan beasiswa dan bantuan pendidikan": "Beasiswa biasanya berdasarkan prestasi dan memiliki proses seleksi, sedangkan bantuan pendidikan bisa bersifat umum tanpa seleksi ketat.",
  "apa itu beasiswa penuh": "Beasiswa penuh menanggung seluruh biaya pendidikan, termasuk biaya kuliah dan biaya hidup.",
  "bagaimana cara mengajukan beasiswa internasional": "Ajukan melalui portal resmi beasiswa internasional dan penuhi semua persyaratan dokumen dan administratif.",
  "apa itu beasiswa parsial": "Beasiswa parsial hanya menanggung sebagian biaya pendidikan, biasanya biaya kuliah saja.",
  "bagaimana proses pencairan dana beasiswa": "Pencairan dana dilakukan sesuai tahapan, biasanya melalui transfer ke rekening institusi pendidikan atau penerima.",
  "apakah ada beasiswa untuk jurusan tertentu": "Ya, banyak beasiswa yang khusus untuk jurusan tertentu, seperti teknik, kesehatan, atau seni.",
  "apakah penerima beasiswa boleh bekerja sambil studi": "Tergantung aturan beasiswa, sebagian memperbolehkan pekerjaan paruh waktu, sebagian tidak.",
  "apa itu beasiswa afirmasi untuk daerah tertinggal": "Beasiswa ini diberikan khusus untuk pelajar dari daerah tertinggal agar mendapat kesempatan pendidikan lebih baik.",
};

const publicKeyPath = path.join(process.cwd(), "zoho_public.pem");
const publicKey = readFileSync(publicKeyPath, "utf8");

export async function POST(req) {
  const signature = req.headers.get("x-zohosignature");
  const rawBody = await req.text();
  const bodyBuffer = Buffer.from(rawBody);

  const isVerified = crypto.verify(
    "sha256",
    bodyBuffer,
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(signature, "base64")
  );

  if (!isVerified) {
    return NextResponse.json({ error: "Signature tidak valid" }, { status: 403 });
  }

  const body = JSON.parse(rawBody);
  const questionRaw = body.question || body.input || "";
  const question = questionRaw.toLowerCase().trim();

  if (answers[question]) {
    return NextResponse.json({
      replies: [{ text: answers[question] }],
    });
  }

  return NextResponse.json({
    replies: [{ text: "Maaf, saya belum punya jawaban untuk pertanyaan itu." }],
  });
}