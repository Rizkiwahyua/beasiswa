import './style.css'

// TypeScript declarations for global CDN libraries
declare const lucide: any;

// ==========================================================================
// DATA STRUCTURES & DATABASE BEASISWA (BILINGUAL)
// ==========================================================================

interface TimelineEvent {
  date: string;
  event: string;
  desc: string;
}

interface Criteria {
  gpa: number; // Minimal GPA
  ielts?: number; // Minimal IELTS
  toeflIbt?: number; // Minimal TOEFL iBT
  toeflItp?: number; // Minimal TOEFL ITP
  ageMax?: number;
}

interface Scholarship {
  id: string;
  title: string;
  title_en: string;
  provider: string;
  provider_en: string;
  logoText: string;
  logoBg: string;
  degrees: ('S1' | 'S2' | 'S3')[];
  funding: 'Full' | 'Partial';
  location: 'Dalam Negeri' | 'Luar Negeri';
  country: string;
  country_en: string;
  amount: string;
  amount_en: string;
  amountVal: number; // Numeric value for sorting
  deadline: string; // YYYY-MM-DD
  description: string;
  description_en: string;
  criteria: Criteria;
  coverage: string[];
  coverage_en: string[];
  documents: string[];
  documents_en: string[];
  timeline: TimelineEvent[];
  timeline_en: TimelineEvent[];
}

const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'lpdp',
    title: 'Beasiswa LPDP (Reguler)',
    title_en: 'LPDP Scholarship (Regular)',
    provider: 'Kementerian Keuangan RI',
    provider_en: 'Ministry of Finance of RI',
    logoText: 'LPDP',
    logoBg: '#7c3aed', // Purple Theme Accent
    degrees: ['S2', 'S3'],
    funding: 'Full',
    location: 'Dalam Negeri',
    country: 'Indonesia',
    country_en: 'Indonesia',
    amount: 'Pendanaan Penuh (Uang Saku + SPP + Riset)',
    amount_en: 'Fully Funded (Stipend + Tuition + Research)',
    amountVal: 95,
    deadline: '2026-10-15',
    description: 'Program beasiswa dari Pemerintah Indonesia untuk pembiayaan studi lanjut program Magister dan Doktoral di perguruan tinggi terbaik dalam dan luar negeri.',
    description_en: 'Scholarship program from the Indonesian Government for Master and Doctoral studies at top domestic and international universities.',
    criteria: { gpa: 3.0, ielts: 6.5, toeflIbt: 80, toeflItp: 550, ageMax: 35 },
    coverage: [
      'Biaya Pendaftaran & Biaya Kuliah (SPP)',
      'Tunjangan Buku & Tunjangan Tesis/Disertasi',
      'Biaya Transportasi Keberangkatan & Kepulangan',
      'Uang Saku Bulanan (Living Allowance)',
      'Tunjangan Keadaan Darurat & Asuransi Kesehatan'
    ],
    coverage_en: [
      'Registration & Tuition Fees (SPP)',
      'Book Allowance & Thesis/Dissertation Allowance',
      'Departure & Return Travel Allowance',
      'Monthly Living Allowance',
      'Emergency Funds & Health Insurance'
    ],
    documents: [
      'KTP & Ijazah / Transkrip Nilai Akademik',
      'Sertifikat Bahasa Asing yang Valid (TOEFL/IELTS)',
      'Letter of Acceptance (LoA) Unconditional (jika ada)',
      'Surat Rekomendasi dari Akademisi / Tokoh Masyarakat',
      'Esai Rencana Studi / Proposal Penelitian'
    ],
    documents_en: [
      'ID Card & Diploma / Academic Transcript',
      'Valid Foreign Language Certificate (TOEFL/IELTS)',
      'Unconditional Letter of Acceptance (LoA) (if any)',
      'Recommendation Letter from Academician / Community Leader',
      'Study Plan Essay / Research Proposal'
    ],
    timeline: [
      { date: '15 Okt 2026', event: 'Penutupan Pendaftaran', desc: 'Batas akhir submisi dokumen daring.' },
      { date: '05 Nov 2026', event: 'Pengumuman Hasil Seleksi Administrasi', desc: 'Pemberitahuan kelulusan berkas.' },
      { date: '20 Nov 2026', event: 'Seleksi Bakat Skolastik', desc: 'Tes online kemampuan bernalar.' },
      { date: '15 Des 2026', event: 'Seleksi Wawancara', desc: 'Tahap final presentasi dan diskusi.' }
    ],
    timeline_en: [
      { date: '15 Oct 2026', event: 'Registration Closed', desc: 'Deadline for online document submission.' },
      { date: '05 Nov 2026', event: 'Administrative Result Announcement', desc: 'Notification of document screening success.' },
      { date: '20 Nov 2026', event: 'Scholastic Aptitude Test', desc: 'Online reasoning ability test.' },
      { date: '15 Dec 2026', event: 'Interview Selection', desc: 'Final stage interview and presentation.' }
    ]
  },
  {
    id: 'mext',
    title: 'Beasiswa MEXT (Monbukagakusho)',
    title_en: 'MEXT Scholarship (Monbukagakusho)',
    provider: 'Pemerintah Jepang',
    provider_en: 'Government of Japan',
    logoText: 'MEXT',
    logoBg: '#be123c', // Cherry Red
    degrees: ['S1', 'S2', 'S3'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Jepang',
    country_en: 'Japan',
    amount: '¥117.000 - ¥145.000 / Bulan + SPP & Tiket PP',
    amount_en: '¥117,000 - ¥145,000 / Month + Tuition & Flight PP',
    amountVal: 90,
    deadline: '2026-08-30',
    description: 'Beasiswa bergengsi dari Kementerian Pendidikan, Kebudayaan, Olahraga, Sains, dan Teknologi Jepang untuk mahasiswa internasional yang ingin studi di Jepang tanpa ikatan dinas.',
    description_en: 'Prestigious scholarship from the Ministry of Education, Culture, Sports, Science, and Technology of Japan for international students wanting to study in Japan.',
    criteria: { gpa: 3.2, ielts: 5.5, toeflIbt: 72, ageMax: 34 },
    coverage: [
      '100% Bebas Biaya Kuliah (Termasuk Ujian Masuk)',
      'Tunjangan Hidup Bulanan senilai ¥117.000 - ¥145.000',
      'Tiket Pesawat Kelas Ekonomi PP Kelas Jakarta - Tokyo',
      'Biaya Kursus Persiapan Bahasa Jepang (1 Semester)'
    ],
    coverage_en: [
      '100% Free Tuition Fee (Including Entrance Exam)',
      'Monthly Living Allowance of ¥117,000 - ¥145,000',
      'Economy Class Round-trip Ticket Jakarta - Tokyo',
      'Japanese Language Preparation Course (1 Semester)'
    ],
    documents: [
      'Lembar Pendaftaran MEXT dengan Foto Terbaru',
      'Transkrip Nilai & Ijazah Dilegalisir',
      'Surat Rekomendasi dari Kepala Sekolah / Dekan',
      'Sertifikat Kemampuan Bahasa (JLPT / IELTS jika ada)',
      'Lembar Rencana Penelitian (Khusus Research Student)'
    ],
    documents_en: [
      'MEXT Application Form with Recent Photo',
      'Legalized Academic Transcript & Diploma',
      'Recommendation Letter from Principal / Dean',
      'Language Proficiency Certificate (JLPT / IELTS if any)',
      'Research Plan Sheet (Research Students Only)'
    ],
    timeline: [
      { date: '30 Agt 2026', event: 'Penutupan Registrasi Dokumen', desc: 'Batas pengiriman berkas fisik ke Kedubes Jepang.' },
      { date: '20 Sep 2026', event: 'Ujian Tulis & Wawancara', desc: 'Ujian mata pelajaran di kantor kedutaan.' },
      { date: '15 Okt 2026', event: 'Pengumuman Seleksi Primer', desc: 'Rekomendasi dari kedutaan dikirim ke Jepang.' },
      { date: 'Feb 2027', event: 'Pengumuman Akhir MEXT', desc: 'Konfirmasi universitas penempatan.' }
    ],
    timeline_en: [
      { date: '30 Aug 2026', event: 'Document Submission Deadline', desc: 'Deadline for submitting physical documents to Embassy.' },
      { date: '20 Sep 2026', event: 'Written Exam & Interview', desc: 'Subject exams at the Embassy.' },
      { date: '15 Oct 2026', event: 'Primary Selection Announcement', desc: 'Embassy recommendations sent to Japan.' },
      { date: 'Feb 2027', event: 'MEXT Final Announcement', desc: 'Confirmation of university placement.' }
    ]
  },
  {
    id: 'chevening',
    title: 'Chevening Scholarship',
    title_en: 'Chevening Scholarship',
    provider: 'Foreign, Commonwealth & Development Office (UK)',
    provider_en: 'Foreign, Commonwealth & Development Office (UK)',
    logoText: 'CHEV',
    logoBg: '#1e1b4b', // Navy night
    degrees: ['S2'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Inggris',
    country_en: 'United Kingdom',
    amount: 'Uang Saku Bulanan + Tiket Pesawat + Uang Kuliah Penuh',
    amount_en: 'Monthly Living Allowance + Flight + Full Tuition Fee',
    amountVal: 88,
    deadline: '2026-11-05',
    description: 'Program beasiswa global dari Pemerintah Inggris Raya untuk mencetak pemimpin masa depan. Beasiswa ini mendanai penuh program Master satu tahun di universitas mana pun di UK.',
    description_en: 'Global scholarship program from the UK Government to build future leaders. Fully funds a one-year Master degree at any UK university.',
    criteria: { gpa: 3.0, ielts: 6.5, toeflIbt: 79, ageMax: 50 },
    coverage: [
      'Biaya Kuliah Universitas Penuh (Termasuk MBA)',
      'Tunjangan Hidup Bulanan Standar UK',
      'Tiket Pesawat PP Indonesia - UK Kelas Ekonomi',
      'Tunjangan Kedatangan & Kepulangan',
      'Biaya Pembuatan Visa Pelajar UK (Tier 4)'
    ],
    coverage_en: [
      'Full University Tuition Fee (Including MBA caps)',
      'Standard Monthly UK Living Allowance',
      'Economy Class Round-trip Flights between Indonesia and UK',
      'Arrival & Departure Allowance',
      'UK Student Visa Fees (Tier 4)'
    ],
    documents: [
      'Ijazah & Transkrip Nilai Terjemahan Inggris Resmi',
      'Empat Esai Essay Chevening (Leadership, Networking, Study di UK, Karier)',
      'Dua Surat Rekomendasi dalam Bahasa Inggris',
      'Tiga Pilihan Universitas & Jurusan di UK'
    ],
    documents_en: [
      'Official English Translation of Diploma & Transcript',
      'Four Chevening Essays (Leadership, Networking, Study in UK, Career)',
      'Two Recommendation Letters in English',
      'Three Choices of UK Universities & Courses'
    ],
    timeline: [
      { date: '05 Nov 2026', event: 'Batas Pendaftaran Online', desc: 'Submisi melalui portal Chevening.' },
      { date: 'Jan 2027', event: 'Penyaringan Kandidat Wawancara', desc: 'Pengumuman shortlist wawancara.' },
      { date: 'Mar - Apr 2027', event: 'Sesi Wawancara Panel', desc: 'Wawancara langsung di Jakarta.' },
      { date: 'Jun 2027', event: 'Pengumuman Kelulusan Akhir', desc: 'Hasil seleksi final penerima beasiswa.' }
    ],
    timeline_en: [
      { date: '05 Nov 2026', event: 'Online Registration Deadline', desc: 'Submission through Chevening portal.' },
      { date: 'Jan 2027', event: 'Interview Shortlist Selection', desc: 'Shortlisted candidates announced.' },
      { date: 'Mar - Apr 2027', event: 'Panel Interview Session', desc: 'Face-to-face interview in Jakarta.' },
      { date: 'Jun 2027', event: 'Final Selection Announcement', desc: 'Final results of scholarship awardees.' }
    ]
  },
  {
    id: 'aas',
    title: 'Australia Awards Scholarships (AAS)',
    title_en: 'Australia Awards Scholarships (AAS)',
    provider: 'Pemerintah Australia',
    provider_en: 'Government of Australia',
    logoText: 'AAS',
    logoBg: '#0e7490', // Cyan Dark
    degrees: ['S2', 'S3'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Australia',
    country_en: 'Australia',
    amount: 'Pendanaan Penuh + Kursus Persiapan (ELTA)',
    amount_en: 'Fully Funded + Preparation Course (ELTA)',
    amountVal: 85,
    deadline: '2026-09-15',
    description: 'Beasiswa jangka panjang yang diberikan oleh Pemerintah Australia bagi warganegara Indonesia untuk menempuh studi Master atau Doktor di universitas-universitas kelas dunia di Australia.',
    description_en: 'Long-term scholarship provided by the Australian Government for Indonesian citizens to pursue Master or Doctoral studies at world-class Australian universities.',
    criteria: { gpa: 2.9, ielts: 6.0, toeflIbt: 68, toeflItp: 525, ageMax: 45 },
    coverage: [
      'Biaya Kuliah Penuh di Universitas Pilihan',
      'Biaya Pelatihan Sebelum Keberangkatan (Pre-Departure Training)',
      'Tunjangan Pemeliharaan Hidup Kontribusi Sekali Bayar (Establishment)',
      'Uang Saku Bulanan (Living Allowance)',
      'Asuransi Kesehatan Pelajar Internasional (OSHC)'
    ],
    coverage_en: [
      'Full Tuition Fees at Selected University',
      'Pre-Departure Training Expenses (PDT)',
      'One-off Contribution to Living Expenses (Establishment)',
      'Monthly Living Allowance contribution',
      'Overseas Student Health Cover (OSHC)'
    ],
    documents: [
      'Akte Kelahiran / KTP / Paspor',
      'Ijazah & Transkrip Nilai IPK Terakhir',
      'Sertifikat Hasil Uji Bahasa TOEFL/IELTS terbaru',
      'Formulir Rencana Riset untuk Kandidat PhD/Master by Research',
      'CV Profesional & Surat Rekomendasi Kerja'
    ],
    documents_en: [
      'Birth Certificate / ID Card / Passport',
      'Diploma & Latest GPA Transcript',
      'Latest TOEFL/IELTS English Proficiency Certificate',
      'Research Proposal Form for PhD/Master by Research Candidates',
      'Professional CV & Employment Reference Letters'
    ],
    timeline: [
      { date: '15 Sep 2026', event: 'Penutupan Registrasi AAS', desc: 'Batas waktu pengumpulan di portal OASIS.' },
      { date: 'Okt 2026', event: 'Seleksi Kelayakan Administrasi', desc: 'Review berkas awal.' },
      { date: 'Nov 2026', event: 'Tes Wawancara & Studi Kasus', desc: 'Uji kompetensi lisan oleh panelis.' },
      { date: 'Jan 2027', event: 'Pengumuman Hasil Akhir', desc: 'Pengumuman penerima award.' }
    ],
    timeline_en: [
      { date: '15 Sep 2026', event: 'AAS Registration Deadline', desc: 'Batas akhir submission on OASIS portal.' },
      { date: 'Oct 2026', event: 'Administrative Checking', desc: 'Initial document screening.' },
      { date: 'Nov 2026', event: 'Interview & Case Study Presentation', desc: 'Oral test by panel of experts.' },
      { date: 'Jan 2027', event: 'Final Award Announcement', desc: 'Final winners and ELTA placement notification.' }
    ]
  },
  {
    id: 'fulbright',
    title: 'Beasiswa Fulbright Master & PhD',
    title_en: 'Fulbright Master & PhD Scholarships',
    provider: 'AMINEF / Pemerintah Amerika Serikat',
    provider_en: 'AMINEF / Government of the United States',
    logoText: 'FULB',
    logoBg: '#1d4ed8', // Royal Blue
    degrees: ['S2', 'S3'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Amerika Serikat',
    country_en: 'United States',
    amount: 'Biaya Kuliah Penuh + Tunjangan Hidup + Tiket PP + Visa',
    amount_en: 'Full Tuition Fees + Living Stipend + Flights + Visa',
    amountVal: 92,
    deadline: '2026-08-15',
    description: 'Beasiswa bergengsi Pemerintah AS melalui AMINEF untuk warga negara Indonesia guna mengejar gelar Magister atau Doktoral di berbagai bidang studi di universitas-universitas terkemuka di AS.',
    description_en: 'Prestigious US Government scholarship through AMINEF for Indonesian citizens to pursue Master or Doctoral degrees in various fields at top US universities.',
    criteria: { gpa: 3.0, ielts: 6.5, toeflIbt: 80, toeflItp: 550, ageMax: 50 },
    coverage: [
      'Biaya Pendidikan Penuh di Universitas Tujuan AS',
      'Uang Saku Bulanan yang Disesuaikan dengan Kota Studi',
      'Tunjangan Buku, Komputer, dan Transisi Awal',
      'Tiket Pesawat Udara Pulang Pergi Internasional',
      'Skema Asuransi Kesehatan Terbatas (ASPE)'
    ],
    coverage_en: [
      'Full Tuition Support at Host US University',
      'Monthly Living Stipend based on Local Cost of Living',
      'Book, Computer, and Initial Transition Allowance',
      'International Economy Class Round-trip Ticket',
      'Accident and Sickness Health Benefit Plan (ASPE)'
    ],
    documents: [
      'Formulir Aplikasi Fulbright Lengkap',
      'Fotokopi Ijazah & Transkrip Nilai Akademik Terjemahan Resmi',
      'Fotokopi Sertifikat Bahasa Inggris TOEFL / IELTS resmi',
      'Tiga Surat Rekomendasi dari Profesor atau Atasan',
      'Dua Esai Penulisan (Study Objective & Personal Statement)'
    ],
    documents_en: [
      'Completed Fulbright Application Form',
      'Photocopy of Diploma & Academic Transcript with English Translation',
      'Photocopy of Official TOEFL / IELTS Certificate',
      'Three Letters of Recommendation from Professors or Employers',
      'Two Written Essays (Study Objectives & Personal Statement)'
    ],
    timeline: [
      { date: '15 Agt 2026', event: 'Batas Akhir Penyerahan Berkas', desc: 'Pengiriman berkas lamaran ke AMINEF.' },
      { date: 'Sep 2026', event: 'Interview Sesi Wawancara', desc: 'Kandidat terpilih diwawancarai oleh tim.' },
      { date: 'Okt 2026', event: 'Seleksi Final Nasional', desc: 'Penentuan kandidat utama.' },
      { date: 'Des 2026', event: 'Proses Pendaftaran Universitas AS', desc: 'Placement proses ke kampus-kampus.' }
    ],
    timeline_en: [
      { date: '15 Aug 2026', event: 'Application Submission Deadline', desc: 'Physical/digital submission to AMINEF office.' },
      { date: 'Sep 2026', event: 'Personal Interview Session', desc: 'Shortlisted candidates interviewed by committee.' },
      { date: 'Oct 2026', event: 'National Selection Finalization', desc: 'Principal candidate announcement.' },
      { date: 'Dec 2026', event: 'US University Placement Process', desc: 'University submission process.' }
    ]
  },
  {
    id: 'iisma',
    title: 'Beasiswa Mobilitas IISMA',
    title_en: 'IISMA Mobility Awards',
    provider: 'Kementerian Pendidikan & Kebudayaan RI',
    provider_en: 'Ministry of Education & Culture of RI',
    logoText: 'IISMA',
    logoBg: '#a21caf', // Magenta
    degrees: ['S1'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Eropa',
    country_en: 'Europe',
    amount: 'Uang Saku + SPP Satu Semester + Tiket PP + Asuransi',
    amount_en: 'Stipend + One Semester Tuition + Flight PP + Insurance',
    amountVal: 40,
    deadline: '2026-07-25',
    description: 'Skema beasiswa mobilitas internasional Pemerintah Indonesia untuk mahasiswa aktif S1 semester 4-6 guna belajar selama 1 semester di perguruan tinggi terbaik dunia.',
    description_en: 'International mobility scholarship scheme of the Indonesian Government for active undergraduate students (semester 4-6) to study for 1 semester at top global universities.',
    criteria: { gpa: 3.0, ielts: 6.0, toeflIbt: 78, ageMax: 23 },
    coverage: [
      'Biaya Pendaftaran Kampus & Biaya Kuliah Penuh (1 Semester)',
      'Tunjangan Hidup & Akomodasi Bulanan',
      'Tiket Pesawat PP Indonesia - Negara Tujuan Kelas Ekonomi',
      'Asuransi Kesehatan, PCR, & Tunjangan Pembuatan Visa'
    ],
    coverage_en: [
      'University Registration & Tuition Fee (1 Semester)',
      'Monthly Living & Accommodation Allowance',
      'Economy Class Round-trip Ticket from Indonesia',
      'Health Insurance, PCR, & Visa processing allowance'
    ],
    documents: [
      'Surat Rekomendasi dari Wakil Rektor Bidang Akademik',
      'Transkrip Nilai IPK Kumulatif (Semester 1 - sekarang)',
      'Sertifikat Tes Bahasa Inggris (IELTS / TOEFL iBT / Duolingo)',
      'Esai Refleksi Karakter & Komitmen Kontribusi Bangsa',
      'Surat Bebas Narkoba & Catatan Kriminal Bersih'
    ],
    documents_en: [
      'Recommendation Letter from Vice Rector of Academic Affairs',
      'Cumulative Academic GPA Transcript (Semester 1 - present)',
      'English Language Test Certificate (IELTS / TOEFL iBT / Duolingo)',
      'Self-Reflection & National Contribution Essays',
      'Drug-free Certificate & Clean Criminal Record Letter'
    ],
    timeline: [
      { date: '25 Jul 2026', event: 'Penutupan Registrasi Online', desc: 'Pengisian data di situs IISMA.' },
      { date: '05 Agt 2026', event: 'Pengumuman Seleksi Administrasi', desc: 'Hasil penyaringan kelengkapan berkas.' },
      { date: '12 Agt 2026', event: 'Tes Kebinekaan & Substansi', desc: 'Tes logika secara daring.' },
      { date: '25 Agt 2026', event: 'Pengumuman Kelulusan Akhir', desc: 'Hasil final mahasiswa penerima.' }
    ],
    timeline_en: [
      { date: '25 Jul 2026', event: 'Online Registration Deadline', desc: 'Data submission at the IISMA portal.' },
      { date: '05 Aug 2026', event: 'Document Verification Results', desc: 'Administrative screening results announcement.' },
      { date: '12 Aug 2026', event: 'National & Cognitive Aptitude Test', desc: 'Online aptitude reasoning assessment.' },
      { date: '25 Aug 2026', event: 'Final Award Selection Announcement', desc: 'List of final selected IISMA students.' }
    ]
  },
  {
    id: 'djarum',
    title: 'Djarum Beasiswa Plus',
    title_en: 'Djarum Scholarship Plus',
    provider: 'Djarum Foundation',
    provider_en: 'Djarum Foundation',
    logoText: 'DJRM',
    logoBg: '#16a34a', // Green
    degrees: ['S1'],
    funding: 'Partial',
    location: 'Dalam Negeri',
    country: 'Indonesia',
    country_en: 'Indonesia',
    amount: 'Rp 1.000.000 / Bulan (Selama 1 Tahun) + Soft Skills',
    amount_en: 'Rp 1,000,000 / Month (For 1 Year) + Soft Skills Training',
    amountVal: 15,
    deadline: '2026-09-01',
    description: 'Beasiswa prestasi untuk mahasiswa S1 aktif semester 4 di perguruan tinggi mitra. Selain tunjangan finansial, penerima beasiswa dibekali berbagai program pengembangan soft skills kepemimpinan.',
    description_en: 'Merit-based scholarship for S1 students active in semester 4 at partner universities. Along with financial aid, awardees receive extensive leadership soft skills training.',
    criteria: { gpa: 3.2, ageMax: 22 },
    coverage: [
      'Dana Bantuan Pendidikan Rp 1.000.000 per bulan selama 1 tahun',
      'Pelatihan Soft Skills (Character Building, Leadership Development)',
      'Kesempatan Mengikuti Kompetisi Karya Tulis Ilmiah & Pengabdian Masyarakat'
    ],
    coverage_en: [
      'Education Cash Support of Rp 1,000,000 per month for 1 year',
      'Complete Soft Skills Training (Character Building, Leadership Development)',
      'Opportunities to join Essay Competitions & Community Services'
    ],
    documents: [
      'Bukti Cetak PDF Formulir Pendaftaran Online',
      'Transkrip Nilai Akademik semester 3 dilegalisir',
      'Fotokopi KTM & Kartu Keluarga (KK)',
      'Surat Keterangan Aktif Organisasi / Prestasi Non-akademik',
      'Surat Keterangan tidak sedang menerima beasiswa lain'
    ],
    documents_en: [
      'Printed Copy of PDF Online Application Form',
      'Certified Academic Transcript up to Semester 3',
      'Copy of Student ID (KTM) & Family Card (KK)',
      'Evidence of Organizational Activities / Non-Academic Achievements',
      'Official statement of not receiving other scholarships'
    ],
    timeline: [
      { date: '01 Sep 2026', event: 'Batas Akhir Pendaftaran Online', desc: 'Submisi data diri lewat website Djarum.' },
      { date: '10 Sep 2026', event: 'Seleksi Administrasi Berkas', desc: 'Validasi dokumen pendaftaran.' },
      { date: '18 Sep 2026', event: 'Tes Tertulis Online', desc: 'Tes akademik matematika dan verbal.' },
      { date: 'Okt 2026', event: 'Wawancara & Group Discussion', desc: 'Tahap final pengenalan kepribadian.' }
    ],
    timeline_en: [
      { date: '01 Sep 2026', event: 'Online Registration Deadline', desc: 'Submission through Djarum portal.' },
      { date: '10 Sep 2026', event: 'Document Assessment Period', desc: 'Application file validation.' },
      { date: '18 Sep 2026', event: 'Online Written Test', desc: 'Cognitive, mathematical, and verbal screening.' },
      { date: 'Oct 2026', event: 'Interview & Focus Group Discussion', desc: 'Final interview and personal presentation.' }
    ]
  },
  {
    id: 'erasmus',
    title: 'Beasiswa Erasmus+ Joint Master Degree',
    title_en: 'Erasmus+ Mundus Joint Master Degree',
    provider: 'Uni Eropa',
    provider_en: 'European Union',
    logoText: 'ERAS',
    logoBg: '#0284c7', // Sky Blue
    degrees: ['S2'],
    funding: 'Full',
    location: 'Luar Negeri',
    country: 'Eropa',
    country_en: 'Europe',
    amount: 'Hingga €24.000 / Tahun (Biaya Kuliah + Akomodasi)',
    amount_en: 'Up to €24,000 / Year (Tuition Fees + Allowance)',
    amountVal: 98,
    deadline: '2026-12-15',
    description: 'Program kuliah S2 prestisius di minimal 2 negara Eropa berbeda secara berurutan. Beasiswa didanai penuh oleh Uni Eropa untuk mahasiswa berprestasi dari seluruh dunia.',
    description_en: 'Prestigious joint Master degree program across at least 2 different European countries. Fully funded by the EU for outstanding global students.',
    criteria: { gpa: 3.3, ielts: 6.5, toeflIbt: 85, ageMax: 45 },
    coverage: [
      'Pembebasan Biaya Pendidikan Penuh di Konsorsium Universitas',
      'Tunjangan Hidup Bulanan €1.000 (maksimal 24 bulan)',
      'Tunjangan Biaya Perjalanan Tahunan & Biaya Relokasi',
      'Skema Asuransi Kesehatan Uni Eropa Komprehensif'
    ],
    coverage_en: [
      '100% Free Tuition fees at Consortium Universities',
      'Monthly Living allowance of €1,000 (maximum 24 months)',
      'Yearly Travel contribution & Relocation allowance',
      'Comprehensive European Union health insurance coverage'
    ],
    documents: [
      'Ijazah & Transkrip Akademik Berbahasa Inggris',
      'Sertifikat Kemampuan Bahasa Inggris Resmi (IELTS/TOEFL)',
      'Dua Surat Rekomendasi Akademis dari Dosen Kampus Asal',
      'Curriculum Vitae (CV) Format Europass',
      'Motivation Letter Khusus Program Pilihan Konsorsium'
    ],
    documents_en: [
      'English Translated Diploma & Academic Transcripts',
      'Official English Proficiency Certificate (IELTS/TOEFL)',
      'Two Letters of Academic Reference from home professors',
      'Europass Format Curriculum Vitae (CV)',
      'Tailored Motivation Letter for the selected consortium tracks'
    ],
    timeline: [
      { date: '15 Des 2026', event: 'Batas Penutupan Aplikasi Konsorsium', desc: 'Batas akhir submisi di portal konsorsium.' },
      { date: 'Feb 2027', event: 'Wawancara Online oleh Komite Akademik', desc: 'Sesi wawancara tatap muka virtual.' },
      { date: 'Mar 2027', event: 'Pengumuman Penerima Utama & Cadangan', desc: 'Pemberitahuan resmi via email.' },
      { date: 'Sep 2027', event: 'Keberangkatan & Awal Kuliah', desc: 'Orientasi bersama di universitas pertama.' }
    ],
    timeline_en: [
      { date: '15 Dec 2026', event: 'Consortium Application Deadline', desc: 'Last day to submit documents on consortium portal.' },
      { date: 'Feb 2027', event: 'Online Academic Interview', desc: 'Virtual committee interview session.' },
      { date: 'Mar 2027', event: 'Official Result Announcement', desc: 'Selection notices sent out.' },
      { date: 'Sep 2027', event: 'Departure & Academic Commencement', desc: 'Classes begin at first host institution.' }
    ]
  }
];

// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================

const TRANSLATIONS: Record<string, Record<string, string>> = {
  id: {
    "nav-explore": "Eksplorasi",
    "nav-eligibility": "Cek Kelayakan",
    "nav-timeline": "Timeline",
    "nav-faq": "FAQ",
    "btn-eligibility-quick": "Cek Kelayakan",
    "hero-badge": "Portal Beasiswa Terkini & Terpercaya 2026",
    "hero-title": "Raih Pendidikan Global dengan <br> <span class=\"gradient-text\">Beasiswa Terbaik</span>",
    "hero-desc": "Temukan ribuan peluang beasiswa dalam dan luar negeri. Filter berdasarkan profil Anda, hitung kelayakan secara instan, dan persiapkan aplikasi Anda dengan panduan ahli.",
    "search-placeholder": "Cari nama beasiswa, negara, atau universitas...",
    "search-btn": "Cari",
    "search-popular": "Pencarian Populer:",
    "stat-beasiswa-label": "Beasiswa Utama",
    "stat-verified-label": "Terverifikasi Resmi",
    "stat-partner-label": "Mitra Universitas",
    "stat-free-label": "Akses Selamanya",
    "explore-title": "Eksplorasi Beasiswa",
    "explore-subtitle": "Temukan program pembiayaan studi yang sesuai dengan tujuan akademik Anda.",
    "sort-label": "Urutkan:",
    "sort-default": "Relevansi",
    "sort-deadline": "Deadline Terdekat",
    "sort-funding": "Pendanaan Terbesar",
    "filter-title": "Filter Pencarian",
    "filter-reset": "Reset",
    "filter-degree-title": "Jenjang Pendidikan",
    "filter-degree-s1": "S1 / Undergraduate",
    "filter-degree-s2": "S2 / Master",
    "filter-degree-s3": "S3 / Doctoral",
    "filter-funding-title": "Cakupan Pendanaan",
    "filter-funding-full": "Penuh (Fully Funded)",
    "filter-funding-partial": "Sebagian (Partially Funded)",
    "filter-location-title": "Lokasi Studi",
    "filter-location-indonesia": "Dalam Negeri (Indonesia)",
    "filter-location-foreign": "Luar Negeri",
    "filter-country-title": "Negara Tujuan",
    "filter-country-all": "Semua Negara",
    "empty-title": "Tidak Menemukan Beasiswa",
    "empty-desc": "Maaf, kami tidak menemukan beasiswa yang cocok dengan kombinasi filter dan pencarian Anda. Coba reset filter atau gunakan kata kunci lain.",
    "empty-btn": "Reset Pencarian",
    "wiz-badge": "Fitur Cerdas",
    "wiz-title": "Pemeriksa Kelayakan Beasiswa",
    "wiz-desc": "Gunakan tools interaktif ini untuk memeriksa beasiswa mana saja yang cocok dengan profil akademis dan keterampilan bahasa Anda secara otomatis.",
    "wiz-benefit-1": "Analisis IPK/GPA secara instan",
    "wiz-benefit-2": "Kalkulasi skor tes bahasa Inggris (IELTS/TOEFL)",
    "wiz-benefit-3": "Hemat waktu berjam-jam membaca syarat satu per satu",
    "wiz-step-label": "Langkah",
    "wiz-step-of": "dari",
    "wiz-step1-title": "Informasi Akademis",
    "wiz-step1-desc": "Berapa jenjang target dan nilai IPK (GPA) terakhir Anda?",
    "wiz-step1-degree-label": "Jenjang Pendidikan yang Diincar",
    "wiz-step1-gpa-label": "IPK Terakhir Anda (Skala 4.0)",
    "wiz-step2-title": "Kemampuan Bahasa",
    "wiz-step2-desc": "Masukkan skor tes kemampuan bahasa Inggris Anda jika ada.",
    "wiz-step2-cert-label": "Jenis Sertifikat Tes Bahasa Inggris",
    "wiz-step2-cert-none": "Tidak Ada / Belum Tes",
    "wiz-step2-score-label": "Skor Tes Anda",
    "wiz-step2-score-help": "Masukkan skor keseluruhan (overall score).",
    "wiz-step3-title": "Preferensi Studi",
    "wiz-step3-desc": "Ke mana rencana Anda akan melanjutkannya?",
    "wiz-step3-loc-indo": "Dalam Negeri",
    "wiz-step3-loc-abroad": "Luar Negeri",
    "wiz-step3-fund-full": "Penuh (Fully Funded)",
    "wiz-step3-fund-partial": "Parsial (Partial)",
    "wiz-step3-fund-label": "Kategori Pembiayaan",
    "wiz-step4-title": "Analisis Selesai!",
    "wiz-step4-desc": "Kami telah menganalisis kelayakan Anda berdasarkan data akademis dan kemampuan bahasa.",
    "wiz-step4-status-label": "Status Kelayakan:",
    "wiz-step4-match-label": "Beasiswa Cocok:",
    "wiz-btn-prev": "Kembali",
    "wiz-btn-next": "Lanjut",
    "wiz-btn-analyze": "Analisis Kelayakan",
    "wiz-btn-reset": "Cek Ulang Profil",
    "timeline-title": "Timeline Pendaftaran Terdekat",
    "timeline-desc": "Pantau tanggal-tanggal penting agar Anda tidak ketinggalan tenggat waktu pengiriman berkas.",
    "faq-title": "Pertanyaan Umum (FAQ)",
    "faq-desc": "Dapatkan jawaban cepat untuk pertanyaan-pertanyaan yang paling sering diajukan mengenai persiapan beasiswa.",
    "footer-desc": "Portal independen penyedia informasi beasiswa berkualitas tinggi. Kami berkomitmen untuk mendemokrasikan akses informasi pendidikan tingkat dunia.",
    "footer-nav-title": "Navigasi",
    "footer-cat-title": "Kategori Populer",
    "footer-news-title": "Dapatkan Update Mingguan",
    "footer-news-desc": "Berlangganan buletin kami untuk menerima info beasiswa terbaru langsung di inbox email Anda.",
    "footer-news-placeholder": "Alamat email Anda...",
    "footer-copyright": "Info Beasiswa. Semua Hak Cipta Dilindungi. Didesain dengan estetika tinggi untuk masa depan pendidikan bangsa.",
    "footer-privacy": "Kebijakan Privasi",
    "footer-terms": "Syarat & Ketentuan",
    // FAQ Questions & Answers
    "faq-q1": "Kapan waktu terbaik untuk mempersiapkan dokumen beasiswa?",
    "faq-a1": "Idealnya, Anda disarankan untuk memulai persiapan 6 hingga 12 bulan sebelum tenggat waktu pendaftaran. Dokumen seperti sertifikat tes bahasa (TOEFL/IELTS), surat rekomendasi dari akademisi/atasan, serta esai (Personal Statement/Study Plan) membutuhkan waktu pengerjaan dan revisi yang tidak sebentar.",
    "faq-q2": "Apakah saya tetap bisa mendaftar beasiswa luar negeri jika belum memiliki skor IELTS?",
    "faq-a2": "Ada beberapa skema beasiswa dalam negeri atau luar negeri yang tidak mewajibkan IELTS di awal seleksi berkas (misalnya dengan menggunakan Letter of Acceptance tanpa syarat/Unconditional LoA terlebih dahulu, atau menggunakan jalur beasiswa tertentu seperti MEXT Jepang jalur U to U). Namun, sebagian besar program fully funded tingkat global mewajibkan sertifikat bahasa Inggris resmi.",
    "faq-q3": "Apa perbedaan antara Fully Funded dan Partially Funded?",
    "faq-a3": "Fully Funded (Pendanaan Penuh): Seluruh biaya kuliah (tuition fee), biaya hidup bulanan (living allowance), tiket pesawat pulang-pergi, asuransi kesehatan, dan terkadang tunjangan buku atau riset ditanggung sepenuhnya oleh penyedia beasiswa.",
    "faq-a3-2": "Partially Funded (Pendanaan Sebagian): Hanya mencakup salah satu komponen saja, misalnya hanya gratis biaya kuliah tetapi biaya hidup ditanggung mandiri, atau hanya berupa potongan biaya kuliah sebesar sekian persen.",
    "faq-q4": "Bagaimana cara mendapatkan Surat Rekomendasi yang kuat?",
    "faq-a4": "Hubungi dosen pembimbing akademik, kepala program studi, atau atasan di tempat kerja yang mengenal kapasitas intelektual dan karakter kepemimpinan Anda secara mendalam. Berikan CV terbaru dan ringkasan beasiswa yang Anda daftar kepada mereka agar mereka dapat menulis surat rekomendasi yang relevan dan spesifik."
  },
  en: {
    "nav-explore": "Explore",
    "nav-eligibility": "Eligibility",
    "nav-timeline": "Timeline",
    "nav-faq": "FAQ",
    "btn-eligibility-quick": "Check Eligibility",
    "hero-badge": "Latest & Trusted Scholarship Portal 2026",
    "hero-title": "Reach Global Education with <br> <span class=\"gradient-text\">Best Scholarships</span>",
    "hero-desc": "Discover thousands of domestic and international scholarship opportunities. Filter based on your profile, calculate eligibility instantly, and prepare your application with expert guides.",
    "search-placeholder": "Search scholarship name, country, or university...",
    "search-btn": "Search",
    "search-popular": "Popular Searches:",
    "stat-beasiswa-label": "Key Scholarships",
    "stat-verified-label": "Officially Verified",
    "stat-partner-label": "Partner Universities",
    "stat-free-label": "Lifetime Access",
    "explore-title": "Explore Scholarships",
    "explore-subtitle": "Find the study funding program that matches your academic goals.",
    "sort-label": "Sort by:",
    "sort-default": "Relevance",
    "sort-deadline": "Nearest Deadline",
    "sort-funding": "Highest Funding",
    "filter-title": "Search Filters",
    "filter-reset": "Reset",
    "filter-degree-title": "Education Level",
    "filter-degree-s1": "S1 / Undergraduate",
    "filter-degree-s2": "S2 / Master",
    "filter-degree-s3": "S3 / Doctoral",
    "filter-funding-title": "Funding Coverage",
    "filter-funding-full": "Full (Fully Funded)",
    "filter-funding-partial": "Partial (Partially Funded)",
    "filter-location-title": "Study Location",
    "filter-location-indonesia": "Domestic (Indonesia)",
    "filter-location-foreign": "Abroad",
    "filter-country-title": "Target Country",
    "filter-country-all": "All Countries",
    "empty-title": "No Scholarships Found",
    "empty-desc": "Sorry, we couldn't find scholarships matching your filters and search. Try resetting filters or using other keywords.",
    "empty-btn": "Reset Search",
    "wiz-badge": "Smart Feature",
    "wiz-title": "Scholarship Eligibility Checker",
    "wiz-desc": "Use this interactive tool to automatically check which scholarships match your academic profile and language skills.",
    "wiz-benefit-1": "Instant GPA/GPA analysis",
    "wiz-benefit-2": "Calculation of English test scores (IELTS/TOEFL)",
    "wiz-benefit-3": "Save hours of reading requirements one by one",
    "wiz-step-label": "Step",
    "wiz-step-of": "of",
    "wiz-step1-title": "Academic Information",
    "wiz-step1-desc": "What is your target degree and your last GPA?",
    "wiz-step1-degree-label": "Target Education Level",
    "wiz-step1-gpa-label": "Your Last GPA (4.0 Scale)",
    "wiz-step2-title": "Language Skills",
    "wiz-step2-desc": "Enter your English language proficiency test score if any.",
    "wiz-step2-cert-label": "English Test Certificate Type",
    "wiz-step2-cert-none": "None / Not Yet Tested",
    "wiz-step2-score-label": "Your Test Score",
    "wiz-step2-score-help": "Enter overall score (overall band score).",
    "wiz-step3-title": "Study Preferences",
    "wiz-step3-desc": "Where do you plan to continue your studies?",
    "wiz-step3-loc-indo": "Domestic",
    "wiz-step3-loc-abroad": "Abroad",
    "wiz-step3-fund-full": "Full (Fully Funded)",
    "wiz-step3-fund-partial": "Partial (Partially Funded)",
    "wiz-step3-fund-label": "Funding Category",
    "wiz-step4-title": "Analysis Completed!",
    "wiz-step4-desc": "We have analyzed your eligibility based on your academic data and language skills.",
    "wiz-step4-status-label": "Eligibility Status:",
    "wiz-step4-match-label": "Matching Scholarships:",
    "wiz-btn-prev": "Back",
    "wiz-btn-next": "Next",
    "wiz-btn-analyze": "Analyze Eligibility",
    "wiz-btn-reset": "Re-check Profile",
    "timeline-title": "Upcoming Deadlines",
    "timeline-desc": "Monitor important dates so you don't miss application deadlines.",
    "faq-title": "Frequently Asked Questions (FAQ)",
    "faq-desc": "Get quick answers to the most frequently asked questions about scholarship preparation.",
    "footer-desc": "Independent portal providing high-quality scholarship information. We are committed to democratizing access to world-class education.",
    "footer-nav-title": "Navigation",
    "footer-cat-title": "Popular Categories",
    "footer-news-title": "Get Weekly Updates",
    "footer-news-desc": "Subscribe to our newsletter to receive the latest scholarship info directly in your email inbox.",
    "footer-news-placeholder": "Your email address...",
    "footer-copyright": "Info Beasiswa. All Rights Reserved. Designed with premium aesthetics for the future of national education.",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms & Conditions",
    // FAQ Questions & Answers
    "faq-q1": "When is the best time to prepare scholarship documents?",
    "faq-a1": "Ideally, you are advised to start preparation 6 to 12 months before the registration deadline. Documents such as language test certificates (TOEFL/IELTS), letters of recommendation from academics/supervisors, and essays (Personal Statement/Study Plan) take considerable time to write and revise.",
    "faq-q2": "Can I still apply for overseas scholarships if I do not have an IELTS score?",
    "faq-a2": "There are some domestic or foreign scholarship schemes that do not require IELTS at the beginning of document selection (for example, by using an unconditional Letter of Acceptance first, or using certain pathways like the MEXT Japan U-to-U route). However, most global fully funded programs require an official English certificate.",
    "faq-q3": "What is the difference between Fully Funded and Partially Funded?",
    "faq-a3": "Fully Funded: All tuition fees, monthly living allowances, round-trip flight tickets, health insurance, and sometimes book or research allowances are fully covered by the scholarship provider.",
    "faq-a3-2": "Partially Funded: Covers only some components, e.g., tuition only while living expenses are self-funded, or a discount of tuition fee by a certain percentage.",
    "faq-q4": "How do I get a strong Letter of Recommendation?",
    "faq-a4": "Contact your academic advisor, head of study program, or supervisor at work who knows your intellectual capacity and leadership character deeply. Provide them with your updated CV and a summary of the scholarship you are applying for so they can write a relevant and specific recommendation letter."
  }
};

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================

const STATE = {
  searchQuery: '',
  selectedDegrees: new Set<string>(),
  selectedFunding: new Set<string>(),
  selectedLocations: new Set<string>(),
  selectedCountry: '',
  sortKey: 'default',
  bookmarkedIds: new Set<string>(),
  
  // Wizard state
  wizardStep: 1,
  wizardData: {
    degree: 'S1',
    gpa: 3.5,
    langType: 'none',
    langScore: 0,
    locations: new Set<string>(['Dalam Negeri', 'Luar Negeri']),
    funding: new Set<string>(['Full'])
  },
  
  // Dark mode & language
  isDarkMode: false,
  activeLang: 'id' // 'id' or 'en'
};

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

function getDaysRemaining(targetDateStr: string): number {
  const targetDate = new Date(targetDateStr);
  const today = new Date();
  targetDate.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  
  const diffTime = targetDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function showToast(message: string) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }
}

// Language Switcher Engine
function updateLanguage() {
  const isEn = STATE.activeLang === 'en';
  const dict = TRANSLATIONS[STATE.activeLang];
  
  // Update Navbar Badge
  const badge = document.getElementById('active-lang-badge');
  if (badge) badge.textContent = STATE.activeLang.toUpperCase();
  
  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) {
      // If elements contain a span or format tags, use innerHTML, else textContent
      if (key === 'hero-title') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update country select dropdown labels
  document.querySelectorAll('#country-select option').forEach(opt => {
    const val = opt.getAttribute('value');
    const isDefaultOption = val === '';
    
    if (isDefaultOption) {
      opt.textContent = dict['filter-country-all'];
    } else {
      if (val === 'Inggris') {
        opt.textContent = isEn ? 'United Kingdom / UK' : 'Inggris / UK';
      } else if (val === 'Jepang') {
        opt.textContent = isEn ? 'Japan' : 'Jepang';
      } else if (val === 'Amerika Serikat') {
        opt.textContent = isEn ? 'United States / USA' : 'Amerika Serikat / USA';
      } else if (val === 'Eropa') {
        opt.textContent = isEn ? 'Europe (Other)' : 'Eropa (Lainnya)';
      }
    }
  });

  // Update wizard card elements (Step 1 description labels)
  const s1Desc = document.querySelector('.radio-card input[value="S1"] ~ .radio-card-content .radio-desc');
  if (s1Desc) s1Desc.textContent = isEn ? 'High school / vocational school graduates' : 'Lulusan SMA/SMK sederajat';
  
  const s2Desc = document.querySelector('.radio-card input[value="S2"] ~ .radio-card-content .radio-desc');
  if (s2Desc) s2Desc.textContent = isEn ? 'Undergraduate / D4 graduates' : 'Lulusan Sarjana/D4 sederajat';
  
  const s3Desc = document.querySelector('.radio-card input[value="S3"] ~ .radio-card-content .radio-desc');
  if (s3Desc) s3Desc.textContent = isEn ? 'Master / postgraduate graduates' : 'Lulusan Magister sederajat';

  // Toggle active filters text if active
  const filterLabel = document.querySelector('.active-filters-label');
  if (filterLabel) {
    filterLabel.textContent = isEn ? 'Active filters:' : 'Filter aktif:';
  }
  
  // Re-render components with translated database
  renderScholarships();
  renderTimeline();
}

// Bookmarks Logic
function loadBookmarks() {
  const saved = localStorage.getItem('info_beasiswa_bookmarks');
  if (saved) {
    try {
      STATE.bookmarkedIds = new Set<string>(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }
  updateBookmarkCount();
}

function toggleBookmark(id: string) {
  const isEn = STATE.activeLang === 'en';
  if (STATE.bookmarkedIds.has(id)) {
    STATE.bookmarkedIds.delete(id);
    showToast(isEn ? 'Scholarship removed from bookmarks.' : 'Beasiswa dihapus dari bookmark.');
  } else {
    STATE.bookmarkedIds.add(id);
    showToast(isEn ? 'Scholarship saved to bookmarks.' : 'Beasiswa disimpan ke bookmark.');
  }
  localStorage.setItem('info_beasiswa_bookmarks', JSON.stringify(Array.from(STATE.bookmarkedIds)));
  updateBookmarkCount();
  renderScholarships();
  
  // Dynamic update on drawer button if active
  const drawer = document.getElementById('detail-drawer');
  if (drawer && drawer.classList.contains('active')) {
    const drawBookBtn = drawer.querySelector('.btn-bookmark-drawer');
    if (drawBookBtn) {
      if (STATE.bookmarkedIds.has(id)) {
        drawBookBtn.classList.add('active');
        drawBookBtn.innerHTML = `<i data-lucide="bookmark"></i> ${isEn ? 'Bookmarked' : 'Tersimpan'}`;
      } else {
        drawBookBtn.classList.remove('active');
        drawBookBtn.innerHTML = `<i data-lucide="bookmark"></i> ${isEn ? 'Bookmark' : 'Simpan'}`;
      }
      lucide.createIcons();
    }
  }
}

function updateBookmarkCount() {
  const countSpan = document.getElementById('bookmark-count');
  if (countSpan) {
    countSpan.textContent = STATE.bookmarkedIds.size.toString();
  }
}

// Theme
function initTheme() {
  const savedTheme = localStorage.getItem('info_beasiswa_theme');
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    STATE.isDarkMode = true;
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (toggleBtn) {
      (toggleBtn.querySelector('.icon-moon') as HTMLElement).style.display = 'none';
      (toggleBtn.querySelector('.icon-sun') as HTMLElement).style.display = 'inline-block';
    }
  } else {
    STATE.isDarkMode = false;
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (toggleBtn) {
      (toggleBtn.querySelector('.icon-moon') as HTMLElement).style.display = 'inline-block';
      (toggleBtn.querySelector('.icon-sun') as HTMLElement).style.display = 'none';
    }
  }
}

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  STATE.isDarkMode = !STATE.isDarkMode;
  const isEn = STATE.activeLang === 'en';
  
  if (STATE.isDarkMode) {
    body.classList.replace('theme-light', 'theme-dark');
    localStorage.setItem('info_beasiswa_theme', 'dark');
    if (toggleBtn) {
      (toggleBtn.querySelector('.icon-moon') as HTMLElement).style.display = 'none';
      (toggleBtn.querySelector('.icon-sun') as HTMLElement).style.display = 'inline-block';
    }
    showToast(isEn ? 'Dark mode enabled' : 'Mode Gelap diaktifkan');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
    localStorage.setItem('info_beasiswa_theme', 'light');
    if (toggleBtn) {
      (toggleBtn.querySelector('.icon-moon') as HTMLElement).style.display = 'inline-block';
      (toggleBtn.querySelector('.icon-sun') as HTMLElement).style.display = 'none';
    }
    showToast(isEn ? 'Light mode enabled' : 'Mode Terang diaktifkan');
  }
  lucide.createIcons();
}

// ==========================================================================
// RENDER ACTIONS
// ==========================================================================

function getFilteredScholarships(): Scholarship[] {
  return SCHOLARSHIPS.filter(sch => {
    // 1. Search Match
    if (STATE.searchQuery) {
      const query = STATE.searchQuery.toLowerCase();
      const matchTitle = sch.title.toLowerCase().includes(query) || sch.title_en.toLowerCase().includes(query);
      const matchProvider = sch.provider.toLowerCase().includes(query) || sch.provider_en.toLowerCase().includes(query);
      const matchCountry = sch.country.toLowerCase().includes(query) || sch.country_en.toLowerCase().includes(query);
      const matchDesc = sch.description.toLowerCase().includes(query) || sch.description_en.toLowerCase().includes(query);
      
      if (!matchTitle && !matchProvider && !matchCountry && !matchDesc) {
        return false;
      }
    }
    
    // 2. Degree Filter
    if (STATE.selectedDegrees.size > 0) {
      const matchDegree = sch.degrees.some(d => STATE.selectedDegrees.has(d));
      if (!matchDegree) return false;
    }
    
    // 3. Funding Filter
    if (STATE.selectedFunding.size > 0) {
      if (!STATE.selectedFunding.has(sch.funding)) return false;
    }
    
    // 4. Location Filter
    if (STATE.selectedLocations.size > 0) {
      if (!STATE.selectedLocations.has(sch.location)) return false;
    }
    
    // 5. Country Filter
    if (STATE.selectedCountry) {
      const queryCountry = STATE.selectedCountry;
      if (queryCountry === 'Eropa' && ['Inggris', 'Jerman', 'Prancis', 'Belanda', 'Eropa', 'Europe', 'United Kingdom'].indexOf(sch.country) === -1 && sch.country_en !== 'Europe') {
        return false;
      } else if (queryCountry !== 'Eropa' && sch.country !== queryCountry) {
        return false;
      }
    }
    
    return true;
  });
}

function renderScholarships() {
  const container = document.getElementById('scholarship-grid');
  const emptyState = document.getElementById('empty-state');
  const statCount = document.getElementById('stat-count');
  const isEn = STATE.activeLang === 'en';
  
  if (!container || !emptyState) return;
  
  let list = getFilteredScholarships();
  
  // Sort
  if (STATE.sortKey === 'deadline-asc') {
    list.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  } else if (STATE.sortKey === 'funding-desc') {
    list.sort((a, b) => b.amountVal - a.amountVal);
  }
  
  if (statCount) {
    statCount.textContent = list.length.toString() + '+';
  }
  
  if (list.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    container.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    container.innerHTML = list.map(sch => {
      const days = getDaysRemaining(sch.deadline);
      let daysText = '';
      if (days > 0) {
        daysText = isEn ? `${days} days left` : `Sisa ${days} hari`;
      } else {
        daysText = isEn ? 'Closed' : 'Tutup';
      }
      
      const isBookmarked = STATE.bookmarkedIds.has(sch.id);
      const degreeBadges = sch.degrees.map(d => `<span class="card-tag">${d}</span>`).join('');
      
      const titleText = isEn ? sch.title_en : sch.title;
      const providerText = isEn ? sch.provider_en : sch.provider;
      const countryText = isEn ? sch.country_en : sch.country;
      
      let fundingText = '';
      if (sch.funding === 'Full') {
        fundingText = isEn ? 'Fully Funded' : 'Penuh';
      } else {
        fundingText = isEn ? 'Partial' : 'Parsial';
      }
      
      return `
        <article class="scholarship-card animate-fade-in" data-id="${sch.id}">
          <div class="card-top-row">
            <div class="university-logo-container">
              <div class="university-logo-fallback" style="background-color: ${sch.logoBg}; color: white;">
                ${sch.logoText}
              </div>
            </div>
            
            <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" data-id="${sch.id}" aria-label="Save scholarship">
              <i data-lucide="bookmark"></i>
            </button>
          </div>
          
          <div class="card-tags">
            ${degreeBadges}
            <span class="card-tag" style="background-color: var(--bg-accent); color: var(--color-primary);">${fundingText}</span>
          </div>
          
          <h3 class="card-title">${titleText}</h3>
          <p class="card-provider"><i data-lucide="building" style="width:1rem;height:1rem;"></i> ${providerText}</p>
          
          <div class="card-meta-grid">
            <div class="card-meta-item">
              <span class="meta-label">${isEn ? 'Country' : 'Negara Tujuan'}</span>
              <span class="meta-value"><i data-lucide="map-pin"></i> ${countryText}</span>
            </div>
            <div class="card-meta-item">
              <span class="meta-label">${isEn ? 'Coverage' : 'Cakupan'}</span>
              <span class="meta-value"><i data-lucide="wallet"></i> ${fundingText}</span>
            </div>
          </div>
          
          <div class="card-actions">
            <button class="btn-primary btn-detail-trigger" data-id="${sch.id}">${isEn ? 'Details' : 'Detail Program'}</button>
            <div class="card-deadline-countdown">
              <i data-lucide="clock"></i> ${daysText}
            </div>
          </div>
        </article>
      `;
    }).join('');
    
    // Bind Event Listeners
    container.querySelectorAll('.btn-bookmark').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = (btn as HTMLElement).dataset.id;
        if (id) toggleBookmark(id);
      });
    });
    
    container.querySelectorAll('.btn-detail-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id;
        if (id) openDetailDrawer(id);
      });
    });
  }
  
  renderActiveFilters();
  lucide.createIcons();
}

function renderActiveFilters() {
  const bar = document.getElementById('active-filters');
  const listContainer = document.getElementById('active-filters-list');
  const clearBtn = document.getElementById('clear-filters-btn');
  const isEn = STATE.activeLang === 'en';
  
  if (!bar || !listContainer || !clearBtn) return;
  
  const chips: string[] = [];
  
  STATE.selectedDegrees.forEach(d => {
    chips.push(`<span class="filter-chip" data-type="degree" data-val="${d}">${d} <button class="chip-remove" aria-label="Remove filter"><i data-lucide="x"></i></button></span>`);
  });
  STATE.selectedFunding.forEach(f => {
    let fText = '';
    if (f === 'Full') {
      fText = isEn ? 'Fully Funded' : 'Penuh';
    } else {
      fText = isEn ? 'Partial' : 'Parsial';
    }
    chips.push(`<span class="filter-chip" data-type="funding" data-val="${f}">${fText} <button class="chip-remove" aria-label="Remove filter"><i data-lucide="x"></i></button></span>`);
  });
  STATE.selectedLocations.forEach(l => {
    let lText = l;
    if (isEn) {
      lText = l === 'Dalam Negeri' ? 'Domestic' : 'Abroad';
    }
    chips.push(`<span class="filter-chip" data-type="location" data-val="${l}">${lText} <button class="chip-remove" aria-label="Remove filter"><i data-lucide="x"></i></button></span>`);
  });
  if (STATE.selectedCountry) {
    let cText = STATE.selectedCountry;
    if (isEn) {
      if (cText === 'Jepang') cText = 'Japan';
      else if (cText === 'Inggris') cText = 'United Kingdom';
      else if (cText === 'Amerika Serikat') cText = 'United States';
      else if (cText === 'Eropa') cText = 'Europe';
    }
    chips.push(`<span class="filter-chip" data-type="country" data-val="${STATE.selectedCountry}">${cText} <button class="chip-remove" aria-label="Remove filter"><i data-lucide="x"></i></button></span>`);
  }
  
  if (chips.length > 0) {
    bar.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
    listContainer.innerHTML = chips.join('');
    
    // Bind chip remove events
    listContainer.querySelectorAll('.filter-chip').forEach(chip => {
      chip.querySelector('button')?.addEventListener('click', () => {
        const type = (chip as HTMLElement).dataset.type;
        const val = (chip as HTMLElement).dataset.val;
        
        if (type === 'degree' && val) {
          STATE.selectedDegrees.delete(val);
          const checkbox = document.querySelector(`input[name="degree"][value="${val}"]`) as HTMLInputElement;
          if (checkbox) checkbox.checked = false;
        } else if (type === 'funding' && val) {
          STATE.selectedFunding.delete(val);
          const checkbox = document.querySelector(`input[name="funding"][value="${val}"]`) as HTMLInputElement;
          if (checkbox) checkbox.checked = false;
        } else if (type === 'location' && val) {
          STATE.selectedLocations.delete(val);
          const checkbox = document.querySelector(`input[name="location"][value="${val}"]`) as HTMLInputElement;
          if (checkbox) checkbox.checked = false;
        } else if (type === 'country') {
          STATE.selectedCountry = '';
          const select = document.getElementById('country-select') as HTMLSelectElement;
          if (select) select.value = '';
        }
        
        renderScholarships();
      });
    });
  } else {
    bar.classList.add('hidden');
    clearBtn.classList.add('hidden');
  }
}

function renderTimeline() {
  const container = document.getElementById('timeline-events-container');
  const isEn = STATE.activeLang === 'en';
  if (!container) return;
  
  const upcoming = [...SCHOLARSHIPS]
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 4);
    
  container.innerHTML = upcoming.map((sch) => {
    const days = getDaysRemaining(sch.deadline);
    const dateFormatted = new Date(sch.deadline).toLocaleDateString(isEn ? 'en-US' : 'id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const daysLeftText = isEn ? `${days} Days Left` : `${days} Hari Lagi`;
    
    const titleText = isEn ? sch.title_en : sch.title;
    const providerText = isEn ? sch.provider_en : sch.provider;
    const descText = isEn ? sch.description_en : sch.description;
    
    return `
      <div class="timeline-event">
        <div class="timeline-node"></div>
        <div class="timeline-card-wrapper">
          <div class="timeline-card animate-fade-in">
            <div class="timeline-date-badge">
              <i data-lucide="calendar"></i> ${dateFormatted} (${daysLeftText})
            </div>
            <h3 class="timeline-title">${titleText}</h3>
            <div class="timeline-provider">${providerText}</div>
            <p class="timeline-desc">${descText.slice(0, 110)}...</p>
            <button class="btn-text btn-detail-trigger" style="margin-top:0.75rem;padding:0;" data-id="${sch.id}">
              ${isEn ? 'View Timeline &rarr;' : 'Lihat Timeline Lengkap &rarr;'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  container.querySelectorAll('.btn-detail-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLElement).dataset.id;
      if (id) openDetailDrawer(id);
    });
  });
  lucide.createIcons();
}

// ==========================================================================
// DRAWER LOGIC
// ==========================================================================

function openDetailDrawer(id: string) {
  const sch = SCHOLARSHIPS.find(s => s.id === id);
  if (!sch) return;
  
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('detail-drawer');
  const content = document.getElementById('drawer-content');
  const isEn = STATE.activeLang === 'en';
  
  if (!backdrop || !drawer || !content) return;
  
  const isBookmarked = STATE.bookmarkedIds.has(sch.id);
  const degreeTags = sch.degrees.map(d => `<span class="card-tag">${d}</span>`).join('');
  const deadlineDate = new Date(sch.deadline).toLocaleDateString(isEn ? 'en-US' : 'id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  
  const titleText = isEn ? sch.title_en : sch.title;
  const providerText = isEn ? sch.provider_en : sch.provider;
  const descText = isEn ? sch.description_en : sch.description;
  const countryText = isEn ? sch.country_en : sch.country;
  
  const fundingValText = sch.funding === 'Full' ? (isEn ? 'Fully Funded' : 'Penuh') : (isEn ? 'Partial' : 'Parsial');
  const amountText = isEn ? sch.amount_en : sch.amount;
  const coverageList = isEn ? sch.coverage_en : sch.coverage;
  const documentsList = isEn ? sch.documents_en : sch.documents;
  const timelineList = isEn ? sch.timeline_en : sch.timeline;
  
  content.innerHTML = `
    <div class="detail-header">
      <div class="university-logo-container" style="width: 4.5rem; height: 4.5rem;">
        <div class="university-logo-fallback" style="background-color: ${sch.logoBg}; color: white; font-size:1.5rem;">
          ${sch.logoText}
        </div>
      </div>
      <h2 class="detail-title">${titleText}</h2>
      <div class="detail-provider">
        <i data-lucide="building"></i> ${providerText}
      </div>
      <div class="detail-tags">
        ${degreeTags}
        <span class="card-tag" style="background-color: var(--bg-accent); color: var(--color-primary);">${fundingValText}</span>
        <span class="card-tag" style="background-color: rgba(16, 185, 129, 0.08); color: var(--color-success);">${countryText}</span>
        <span class="card-tag" style="background-color: rgba(244, 63, 94, 0.08); color: var(--color-danger);"><i data-lucide="clock" style="width:0.875rem;height:0.875rem;vertical-align:middle;margin-right:0.25rem;"></i> Deadline: ${deadlineDate}</span>
      </div>
    </div>
    
    <div class="detail-desc-block">
      <p style="color:var(--text-secondary);font-size:0.95rem;line-height:1.6;">${descText}</p>
    </div>

    <!-- Cakupan Beasiswa -->
    <div class="detail-desc-block">
      <h3 class="detail-section-title"><i data-lucide="gift"></i> ${isEn ? 'Funding Benefits' : 'Cakupan Pembiayaan'}</h3>
      <div style="font-weight:600;font-size:0.9375rem;color:var(--text-primary);margin-bottom:0.75rem;">${amountText}</div>
      <ul class="detail-coverage-list">
        ${coverageList.map(item => `
          <li class="detail-list-item">
            <i data-lucide="check-circle-2"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Kriteria Persyaratan -->
    <div class="detail-desc-block">
      <h3 class="detail-section-title"><i data-lucide="user-check"></i> ${isEn ? 'Eligibility Requirements' : 'Persyaratan Kelayakan'}</h3>
      <ul class="detail-criteria-list">
        <li class="detail-list-item">
          <i data-lucide="award"></i>
          <span>${isEn ? 'Minimum GPA / GPA' : 'Minimal IPK / GPA'}: <strong>${sch.criteria.gpa.toFixed(2)}</strong></span>
        </li>
        ${sch.criteria.ielts ? `
          <li class="detail-list-item">
            <i data-lucide="languages"></i>
            <span>${isEn ? 'Minimum IELTS Score' : 'Minimal Skor IELTS'}: <strong>${sch.criteria.ielts}</strong></span>
          </li>
        ` : ''}
        ${sch.criteria.toeflIbt ? `
          <li class="detail-list-item">
            <i data-lucide="languages"></i>
            <span>${isEn ? 'Minimum TOEFL iBT' : 'Minimal TOEFL iBT'}: <strong>${sch.criteria.toeflIbt}</strong></span>
          </li>
        ` : ''}
        ${sch.criteria.toeflItp ? `
          <li class="detail-list-item">
            <i data-lucide="languages"></i>
            <span>${isEn ? 'Minimum TOEFL ITP' : 'Minimal TOEFL ITP'}: <strong>${sch.criteria.toeflItp}</strong></span>
          </li>
        ` : ''}
        ${sch.criteria.ageMax ? `
          <li class="detail-list-item">
            <i data-lucide="calendar-check"></i>
            <span>${isEn ? 'Maximum Age' : 'Usia Maksimal'}: <strong>${sch.criteria.ageMax} ${isEn ? 'Years Old' : 'Tahun'}</strong></span>
          </li>
        ` : ''}
      </ul>
    </div>

    <!-- Dokumen Penting -->
    <div class="detail-desc-block">
      <h3 class="detail-section-title"><i data-lucide="file-text"></i> ${isEn ? 'Required Documents' : 'Dokumen yang Dibutuhkan'}</h3>
      <ul class="detail-docs-list">
        ${documentsList.map(doc => `
          <li class="detail-list-item">
            <i data-lucide="paperclip"></i>
            <span>${doc}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Timeline Detail -->
    <div class="detail-desc-block">
      <h3 class="detail-section-title"><i data-lucide="clock"></i> ${isEn ? 'Activity Timeline (Estimated)' : 'Timeline Kegiatan (Estimasi)'}</h3>
      <div class="detail-timeline-list">
        ${timelineList.map(time => `
          <div class="detail-timeline-node">
            <div class="detail-timeline-date">${time.date}</div>
            <div class="detail-timeline-event-name">${time.event}</div>
            <div class="detail-timeline-event-desc">${time.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Actions -->
    <div class="drawer-actions">
      <button class="btn-bookmark btn-secondary btn-bookmark-drawer ${isBookmarked ? 'active' : ''}" data-id="${sch.id}" style="padding:0.75rem 1.25rem;">
        <i data-lucide="bookmark"></i> ${isBookmarked ? (isEn ? 'Bookmarked' : 'Tersimpan') : (isEn ? 'Save' : 'Simpan')}
      </button>
      <a href="https://google.com" target="_blank" class="btn-primary" style="flex:1;">
        ${isEn ? 'Apply Now' : 'Daftar Sekarang'} <i data-lucide="external-link"></i>
      </a>
    </div>
  `;
  
  // Bind actions
  const drawBookBtn = content.querySelector('.btn-bookmark-drawer');
  drawBookBtn?.addEventListener('click', () => {
    toggleBookmark(sch.id);
  });
  
  backdrop.classList.add('active');
  backdrop.classList.remove('hidden');
  drawer.classList.add('active');
  drawer.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  lucide.createIcons();
}

function closeDetailDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('detail-drawer');
  
  if (!backdrop || !drawer) return;
  
  backdrop.classList.remove('active');
  drawer.classList.remove('active');
  document.body.style.overflow = '';
  
  setTimeout(() => {
    if (!drawer.classList.contains('active')) {
      backdrop.classList.add('hidden');
      drawer.classList.add('hidden');
    }
  }, 300);
}

// ==========================================================================
// ELIGIBILITY WIZARD LOGIC
// ==========================================================================

function updateWizardStepUI() {
  const steps = document.querySelectorAll('.wizard-step');
  const progressBar = document.getElementById('wizard-progress-bar');
  const stepNum = document.getElementById('current-step-num');
  const prevBtn = document.getElementById('wiz-prev-btn');
  const nextBtn = document.getElementById('wiz-next-btn');
  const resetBtn = document.getElementById('wiz-reset-btn');
  const isEn = STATE.activeLang === 'en';
  
  if (!progressBar || !stepNum || !prevBtn || !nextBtn || !resetBtn) return;
  
  const progressPercent = ((STATE.wizardStep - 1) / 3) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  stepNum.textContent = STATE.wizardStep.toString();
  
  steps.forEach(step => {
    const stepIdx = parseInt((step as HTMLElement).dataset.step || '1');
    if (stepIdx === STATE.wizardStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  if (STATE.wizardStep === 1 || STATE.wizardStep === 4) {
    prevBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
  }
  
  if (STATE.wizardStep === 3) {
    nextBtn.innerHTML = isEn ? `Analyze Eligibility <i data-lucide="check-check"></i>` : `Analisis Kelayakan <i data-lucide="check-check"></i>`;
    nextBtn.classList.remove('hidden');
    resetBtn.classList.add('hidden');
  } else if (STATE.wizardStep === 4) {
    nextBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
  } else {
    nextBtn.innerHTML = isEn ? `Next <i data-lucide="chevron-right"></i>` : `Lanjut <i data-lucide="chevron-right"></i>`;
    nextBtn.classList.remove('hidden');
    resetBtn.classList.add('hidden');
  }
  
  lucide.createIcons();
}

function handleWizardNext() {
  if (STATE.wizardStep < 4) {
    if (STATE.wizardStep === 1) {
      const selectedDegree = document.querySelector('input[name="wiz-degree"]:checked') as HTMLInputElement;
      const gpaVal = document.getElementById('wiz-gpa') as HTMLInputElement;
      
      STATE.wizardData.degree = selectedDegree?.value || 'S1';
      STATE.wizardData.gpa = parseFloat(gpaVal?.value || '3.5');
    } else if (STATE.wizardStep === 2) {
      const langSelect = document.getElementById('wiz-lang-type') as HTMLSelectElement;
      const scoreInput = document.getElementById('wiz-lang-score') as HTMLInputElement;
      
      STATE.wizardData.langType = langSelect?.value || 'none';
      STATE.wizardData.langScore = parseFloat(scoreInput?.value || '0');
    } else if (STATE.wizardStep === 3) {
      const locChecks = document.querySelectorAll('input[name="wiz-location"]:checked');
      const fundChecks = document.querySelectorAll('input[name="wiz-funding"]:checked');
      
      STATE.wizardData.locations.clear();
      locChecks.forEach(ch => STATE.wizardData.locations.add((ch as HTMLInputElement).value));
      
      STATE.wizardData.funding.clear();
      fundChecks.forEach(ch => STATE.wizardData.funding.add((ch as HTMLInputElement).value));
      
      calculateEligibility();
    }
    
    STATE.wizardStep++;
    updateWizardStepUI();
  }
}

function handleWizardPrev() {
  if (STATE.wizardStep > 1) {
    STATE.wizardStep--;
    updateWizardStepUI();
  }
}

function handleWizardReset() {
  STATE.wizardStep = 1;
  STATE.wizardData.degree = 'S1';
  STATE.wizardData.gpa = 3.5;
  STATE.wizardData.langType = 'none';
  STATE.wizardData.langScore = 0;
  STATE.wizardData.locations = new Set<string>(['Dalam Negeri', 'Luar Negeri']);
  STATE.wizardData.funding = new Set<string>(['Full']);
  
  const s1Radio = document.querySelector('input[name="wiz-degree"][value="S1"]') as HTMLInputElement;
  if (s1Radio) s1Radio.checked = true;
  
  const gpaInput = document.getElementById('wiz-gpa') as HTMLInputElement;
  if (gpaInput) gpaInput.value = '3.5';
  
  const gpaDisplay = document.getElementById('gpa-value');
  if (gpaDisplay) gpaDisplay.textContent = '3.50';
  
  const langSelect = document.getElementById('wiz-lang-type') as HTMLSelectElement;
  if (langSelect) langSelect.value = 'none';
  
  const scoreInput = document.getElementById('wiz-lang-score') as HTMLInputElement;
  if (scoreInput) scoreInput.value = '';
  
  const scoreGroup = document.getElementById('wiz-lang-score-group');
  if (scoreGroup) scoreGroup.classList.add('hidden');
  
  const locChecks = document.querySelectorAll('input[name="wiz-location"]');
  locChecks.forEach(ch => (ch as HTMLInputElement).checked = true);
  
  const fundChecks = document.querySelectorAll('input[name="wiz-funding"]');
  fundChecks.forEach(ch => {
    const isFull = (ch as HTMLInputElement).value === 'Full';
    (ch as HTMLInputElement).checked = isFull;
  });
  
  updateWizardStepUI();
}

function calculateEligibility() {
  const resultStatus = document.getElementById('wiz-result-status');
  const resultCount = document.getElementById('wiz-result-count');
  const matchingList = document.getElementById('wiz-matching-list');
  const isEn = STATE.activeLang === 'en';
  
  if (!resultStatus || !resultCount || !matchingList) return;
  
  const userGpa = STATE.wizardData.gpa;
  const userLangType = STATE.wizardData.langType;
  const userLangScore = STATE.wizardData.langScore;
  const userLocations = STATE.wizardData.locations;
  const userFunding = STATE.wizardData.funding;
  const userTargetDegree = STATE.wizardData.degree;
  
  const eligible = SCHOLARSHIPS.filter(sch => {
    if (!sch.degrees.includes(userTargetDegree as any)) return false;
    if (userLocations.size > 0 && !userLocations.has(sch.location)) return false;
    if (userFunding.size > 0 && !userFunding.has(sch.funding)) return false;
    if (sch.criteria.gpa > userGpa) return false;
    
    if (userLangType === 'ielts' && sch.criteria.ielts) {
      if (userLangScore < sch.criteria.ielts) return false;
    } else if (userLangType === 'toefl-ibt' && sch.criteria.toeflIbt) {
      if (userLangScore < sch.criteria.toeflIbt) return false;
    } else if (userLangType === 'toefl-itp' && sch.criteria.toeflItp) {
      if (userLangScore < sch.criteria.toeflItp) return false;
    } else if (userLangType === 'none' && (sch.criteria.ielts || sch.criteria.toeflIbt || sch.criteria.toeflItp)) {
      return false;
    }
    
    return true;
  });
  
  resultCount.textContent = isEn ? `${eligible.length} Scholarships Match` : `${eligible.length} Beasiswa Cocok`;
  
  if (eligible.length > 0) {
    resultStatus.textContent = isEn ? 'Eligible to Apply' : 'Memenuhi Syarat';
    resultStatus.className = 'badge badge-success';
    
    matchingList.innerHTML = eligible.map(sch => {
      const titleText = isEn ? sch.title_en : sch.title;
      return `
        <div class="matching-preview-item">
          <span style="font-weight:600;">${titleText}</span>
          <button class="btn-text btn-detail-trigger" data-id="${sch.id}" style="padding:0;font-size:0.75rem;">
            ${isEn ? 'Details &rarr;' : 'Detail &rarr;'}
          </button>
        </div>
      `;
    }).join('');
    
    matchingList.querySelectorAll('.btn-detail-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.id;
        if (id) openDetailDrawer(id);
      });
    });
  } else {
    resultStatus.textContent = isEn ? 'Requirements Insufficient' : 'Syarat Belum Cukup';
    resultStatus.className = 'badge badge-danger';
    matchingList.innerHTML = `
      <div style="text-align:center;color:var(--text-muted);font-size:0.875rem;padding:1rem 0;">
        ${isEn ? 'No matching scholarships. Try increasing your GPA or getting an English certificate.' : 'Tidak ada beasiswa yang cocok. Coba naikkan IPK Anda atau peroleh sertifikasi bahasa Inggris resmi.'}
      </div>
    `;
  }
  lucide.createIcons();
}

// ==========================================================================
// SEARCH & AUTOCOMPLETE LOGIC
// ==========================================================================

function handleSearchSuggestions(val: string) {
  const dropdown = document.getElementById('search-suggestions');
  const isEn = STATE.activeLang === 'en';
  if (!dropdown) return;
  
  if (!val.trim()) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    return;
  }
  
  const query = val.toLowerCase();
  const matches: { title: string; type: string; query: string }[] = [];
  
  SCHOLARSHIPS.forEach(sch => {
    const titleText = isEn ? sch.title_en : sch.title;
    if (titleText.toLowerCase().includes(query)) {
      matches.push({ title: titleText, type: isEn ? 'Scholarship' : 'Beasiswa', query: titleText });
    }
  });
  
  const countries = Array.from(new Set(SCHOLARSHIPS.map(s => isEn ? s.country_en : s.country)));
  countries.forEach(c => {
    if (c.toLowerCase().includes(query)) {
      matches.push({ title: `${isEn ? 'Destination' : 'Tujuan'}: ${c}`, type: isEn ? 'Country' : 'Negara', query: c });
    }
  });
  
  const providers = Array.from(new Set(SCHOLARSHIPS.map(s => isEn ? s.provider_en : s.provider)));
  providers.forEach(p => {
    if (p.toLowerCase().includes(query)) {
      matches.push({ title: `${isEn ? 'Provider' : 'Penyedia'}: ${p}`, type: isEn ? 'Institution' : 'Instansi', query: p });
    }
  });
  
  const sliced = matches.slice(0, 5);
  
  if (sliced.length === 0) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    return;
  }
  
  dropdown.innerHTML = sliced.map(m => `
    <div class="suggestion-item" data-query="${m.query}">
      <i data-lucide="${m.type === 'Beasiswa' || m.type === 'Scholarship' ? 'graduation-cap' : m.type === 'Negara' || m.type === 'Country' ? 'map-pin' : 'building'}"></i>
      <span class="suggestion-title">${m.title}</span>
      <span class="suggestion-category">${m.type}</span>
    </div>
  `).join('');
  
  dropdown.classList.remove('hidden');
  
  dropdown.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const q = (item as HTMLElement).dataset.query;
      const input = document.getElementById('search-input') as HTMLInputElement;
      if (q && input) {
        input.value = q;
        STATE.searchQuery = q;
        dropdown.classList.add('hidden');
        renderScholarships();
      }
    });
  });
  
  lucide.createIcons();
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function init() {
  lucide.createIcons();
  
  loadBookmarks();
  initTheme();
  
  // Renders
  renderScholarships();
  renderTimeline();
  
  // ==========================================
  // EVENT LISTENERS: THEME, LANGUAGE & NAV
  // ==========================================
  
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn?.addEventListener('click', toggleTheme);
  
  // Language Selector Button Toggle
  const langBtn = document.getElementById('lang-toggle');
  langBtn?.addEventListener('click', () => {
    STATE.activeLang = STATE.activeLang === 'id' ? 'en' : 'id';
    updateLanguage();
    showToast(STATE.activeLang === 'en' ? 'Language switched to English' : 'Bahasa diubah ke Indonesia');
  });

  const closeDrawerBtn = document.getElementById('drawer-close-btn');
  closeDrawerBtn?.addEventListener('click', closeDetailDrawer);
  
  const backdrop = document.getElementById('drawer-backdrop');
  backdrop?.addEventListener('click', closeDetailDrawer);
  
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // Bookmarks quick tab
  const bookmarksBtn = document.getElementById('bookmarks-btn');
  bookmarksBtn?.addEventListener('click', () => {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const isEn = STATE.activeLang === 'en';
    
    if (STATE.searchQuery === 'is:bookmarked') {
      STATE.searchQuery = '';
      if (input) input.value = '';
      bookmarksBtn.classList.remove('active');
      showToast(isEn ? 'Showing all scholarships.' : 'Menampilkan semua beasiswa.');
      renderScholarships();
    } else {
      STATE.searchQuery = 'is:bookmarked';
      if (input) input.value = isEn ? 'Saved Scholarships' : 'Beasiswa Tersimpan';
      bookmarksBtn.classList.add('active');
      showToast(isEn ? 'Showing bookmarked scholarships.' : 'Menampilkan beasiswa yang Anda simpan.');
      
      // Bookmark lists override
      const list = SCHOLARSHIPS.filter(sch => STATE.bookmarkedIds.has(sch.id));
      const gridContainer = document.getElementById('scholarship-grid');
      const emptyState = document.getElementById('empty-state');
      
      if (gridContainer && emptyState) {
        if (list.length === 0) {
          gridContainer.classList.add('hidden');
          emptyState.classList.remove('hidden');
          emptyState.querySelector('.empty-title')!.textContent = isEn ? 'No Bookmarks Yet' : 'Belum Ada Bookmark';
          emptyState.querySelector('.empty-desc')!.textContent = isEn ? 'Click the bookmark icon on card elements to save them here.' : 'Klik ikon bookmark pada kartu beasiswa untuk menyimpannya di sini.';
        } else {
          gridContainer.classList.remove('hidden');
          emptyState.classList.add('hidden');
          
          gridContainer.innerHTML = list.map(sch => {
            const days = getDaysRemaining(sch.deadline);
            const daysText = days > 0 ? (isEn ? `${days} days left` : `Sisa ${days} hari`) : (isEn ? 'Closed' : 'Tutup');
            const degreeBadges = sch.degrees.map(d => `<span class="card-tag">${d}</span>`).join('');
            
            const titleText = isEn ? sch.title_en : sch.title;
            const providerText = isEn ? sch.provider_en : sch.provider;
            const countryText = isEn ? sch.country_en : sch.country;
            const fundingValText = sch.funding === 'Full' ? (isEn ? 'Fully Funded' : 'Penuh') : (isEn ? 'Partial' : 'Parsial');
            
            return `
              <article class="scholarship-card" data-id="${sch.id}">
                <div class="card-top-row">
                  <div class="university-logo-container">
                    <div class="university-logo-fallback" style="background-color: ${sch.logoBg}; color: white;">
                      ${sch.logoText}
                    </div>
                  </div>
                  <button class="btn-bookmark active" data-id="${sch.id}">
                    <i data-lucide="bookmark"></i>
                  </button>
                </div>
                <div class="card-tags">
                  ${degreeBadges}
                  <span class="card-tag" style="background-color: var(--bg-accent); color: var(--color-primary);">${fundingValText}</span>
                </div>
                <h3 class="card-title">${titleText}</h3>
                <p class="card-provider"><i data-lucide="building" style="width:1rem;height:1rem;"></i> ${providerText}</p>
                <div class="card-meta-grid">
                  <div class="card-meta-item">
                    <span class="meta-label">${isEn ? 'Country' : 'Negara Tujuan'}</span>
                    <span class="meta-value"><i data-lucide="map-pin"></i> ${countryText}</span>
                  </div>
                  <div class="card-meta-item">
                    <span class="meta-label">${isEn ? 'Coverage' : 'Cakupan'}</span>
                    <span class="meta-value"><i data-lucide="wallet"></i> ${fundingValText}</span>
                  </div>
                </div>
                <div class="card-actions">
                  <button class="btn-primary btn-detail-trigger" data-id="${sch.id}">${isEn ? 'Details' : 'Detail Program'}</button>
                  <div class="card-deadline-countdown">
                    <i data-lucide="clock"></i> ${daysText}
                  </div>
                </div>
              </article>
            `;
          }).join('');
          
          gridContainer.querySelectorAll('.btn-bookmark').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const id = (btn as HTMLElement).dataset.id;
              if (id) {
                toggleBookmark(id);
                bookmarksBtn.dispatchEvent(new Event('click')); // refresh view
              }
            });
          });
          gridContainer.querySelectorAll('.btn-detail-trigger').forEach(btn => {
            btn.addEventListener('click', () => {
              const id = (btn as HTMLElement).dataset.id;
              if (id) openDetailDrawer(id);
            });
          });
        }
        lucide.createIcons();
      }
    }
  });

  // ==========================================
  // EVENT LISTENERS: SEARCH
  // ==========================================
  
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const searchBtn = document.getElementById('search-btn');
  const suggestionsDropdown = document.getElementById('search-suggestions');
  
  searchInput?.addEventListener('input', (e) => {
    const val = (e.target as HTMLInputElement).value;
    STATE.searchQuery = val;
    handleSearchSuggestions(val);
    if (STATE.searchQuery !== 'is:bookmarked') {
      renderScholarships();
    }
  });
  
  document.addEventListener('click', (e) => {
    if (suggestionsDropdown && !suggestionsDropdown.contains(e.target as Node) && e.target !== searchInput) {
      suggestionsDropdown.classList.add('hidden');
    }
  });
  
  searchBtn?.addEventListener('click', () => {
    if (STATE.searchQuery !== 'is:bookmarked') {
      renderScholarships();
    }
  });
  
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const isEn = STATE.activeLang === 'en';
      const q = isEn ? (tag as HTMLElement).getAttribute('data-query-en') || (tag as HTMLElement).dataset.query : (tag as HTMLElement).dataset.query;
      if (q && searchInput) {
        searchInput.value = q;
        STATE.searchQuery = q;
        renderScholarships();
      }
    });
  });

  // ==========================================
  // EVENT LISTENERS: FILTERS SIDEBAR
  // ==========================================
  
  const filterInputs = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
  filterInputs.forEach(input => {
    input.addEventListener('change', () => {
      const name = (input as HTMLInputElement).name;
      const val = (input as HTMLInputElement).value;
      const isChecked = (input as HTMLInputElement).checked;
      
      if (name === 'degree') {
        if (isChecked) STATE.selectedDegrees.add(val);
        else STATE.selectedDegrees.delete(val);
      } else if (name === 'funding') {
        if (isChecked) STATE.selectedFunding.add(val);
        else STATE.selectedFunding.delete(val);
      } else if (name === 'location') {
        if (isChecked) STATE.selectedLocations.add(val);
        else STATE.selectedLocations.delete(val);
      }
      
      renderScholarships();
    });
  });
  
  const countrySelect = document.getElementById('country-select') as HTMLSelectElement;
  countrySelect?.addEventListener('change', (e) => {
    STATE.selectedCountry = (e.target as HTMLSelectElement).value;
    renderScholarships();
  });
  
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;
  sortSelect?.addEventListener('change', (e) => {
    STATE.sortKey = (e.target as HTMLSelectElement).value;
    renderScholarships();
  });
  
  const clearFiltersBtn = document.getElementById('clear-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');
  
  const resetAllFilters = () => {
    const isEn = STATE.activeLang === 'en';
    STATE.searchQuery = '';
    STATE.selectedDegrees.clear();
    STATE.selectedFunding.clear();
    STATE.selectedLocations.clear();
    STATE.selectedCountry = '';
    STATE.sortKey = 'default';
    
    if (searchInput) searchInput.value = '';
    if (countrySelect) countrySelect.value = '';
    if (sortSelect) sortSelect.value = 'default';
    
    filterInputs.forEach(input => {
      (input as HTMLInputElement).checked = false;
    });
    
    document.getElementById('bookmarks-btn')?.classList.remove('active');
    
    renderScholarships();
    showToast(isEn ? 'All filters reset.' : 'Semua filter di-reset.');
  };
  
  clearFiltersBtn?.addEventListener('click', resetAllFilters);
  emptyResetBtn?.addEventListener('click', resetAllFilters);

  document.querySelectorAll('.filter-trigger-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = (link as HTMLElement).dataset.type;
      const val = (link as HTMLElement).dataset.val;
      
      resetAllFilters();
      
      if (type === 'degree' && val) {
        STATE.selectedDegrees.add(val);
        const cb = document.querySelector(`input[name="degree"][value="${val}"]`) as HTMLInputElement;
        if (cb) cb.checked = true;
      } else if (type === 'funding' && val) {
        STATE.selectedFunding.add(val);
        const cb = document.querySelector(`input[name="funding"][value="${val}"]`) as HTMLInputElement;
        if (cb) cb.checked = true;
      }
      
      renderScholarships();
      document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ==========================================
  // EVENT LISTENERS: ELIGIBILITY WIZARD
  // ==========================================
  
  const wizNext = document.getElementById('wiz-next-btn');
  const wizPrev = document.getElementById('wiz-prev-btn');
  const wizReset = document.getElementById('wiz-reset-btn');
  const gpaInput = document.getElementById('wiz-gpa') as HTMLInputElement;
  const gpaDisplay = document.getElementById('gpa-value');
  const langSelect = document.getElementById('wiz-lang-type') as HTMLSelectElement;
  const scoreGroup = document.getElementById('wiz-lang-score-group');
  const scoreInput = document.getElementById('wiz-lang-score') as HTMLInputElement;
  const langHelpText = document.getElementById('wiz-lang-help');
  
  wizNext?.addEventListener('click', handleWizardNext);
  wizPrev?.addEventListener('click', handleWizardPrev);
  wizReset?.addEventListener('click', handleWizardReset);
  
  gpaInput?.addEventListener('input', (e) => {
    const val = parseFloat((e.target as HTMLInputElement).value);
    if (gpaDisplay) {
      gpaDisplay.textContent = val.toFixed(2);
    }
  });
  
  langSelect?.addEventListener('change', (e) => {
    const val = (e.target as HTMLSelectElement).value;
    const isEn = STATE.activeLang === 'en';
    
    if (val === 'none') {
      scoreGroup?.classList.add('hidden');
      if (scoreInput) scoreInput.value = '';
    } else {
      scoreGroup?.classList.remove('hidden');
      if (langHelpText) {
        if (val === 'ielts') {
          langHelpText.textContent = isEn ? 'Enter overall IELTS score (Scale 1.0 - 9.0).' : 'Masukkan skor keseluruhan IELTS (Skala 1.0 - 9.0).';
          if (scoreInput) {
            scoreInput.placeholder = 'Contoh: 6.5';
            scoreInput.min = '1.0';
            scoreInput.max = '9.0';
            scoreInput.step = '0.5';
          }
        } else if (val === 'toefl-ibt') {
          langHelpText.textContent = isEn ? 'Enter total TOEFL iBT score (Scale 0 - 120).' : 'Masukkan skor total TOEFL iBT (Skala 0 - 120).';
          if (scoreInput) {
            scoreInput.placeholder = 'Contoh: 85';
            scoreInput.min = '0';
            scoreInput.max = '120';
            scoreInput.step = '1';
          }
        } else if (val === 'toefl-itp') {
          langHelpText.textContent = isEn ? 'Enter total TOEFL ITP score (Scale 310 - 677).' : 'Masukkan skor total TOEFL ITP (Skala 310 - 677).';
          if (scoreInput) {
            scoreInput.placeholder = 'Contoh: 550';
            scoreInput.min = '310';
            scoreInput.max = '677';
            scoreInput.step = '1';
          }
        }
      }
    }
  });

  // ==========================================
  // EVENT LISTENERS: FAQ ACCORDION
  // ==========================================
  
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    toggle?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ==========================================
  // EVENT LISTENERS: NEWSLETTER
  // ==========================================
  
  const newsletter = document.getElementById('newsletter-form');
  newsletter?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletter.querySelector('.newsletter-input') as HTMLInputElement;
    const isEn = STATE.activeLang === 'en';
    if (input && input.value) {
      showToast(isEn ? `Thank you! ${input.value} has been subscribed.` : `Terima kasih! Email ${input.value} telah terdaftar.`);
      input.value = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
}
