# 📰 Berita Kini - Portal Berita Modern

Selamat datang di repositori proyek **Berita Kini**. Proyek ini dibangun sebagai bagian dari *Technical Test* untuk program frontend engineer di **SEAL**. Aplikasi web ini menyajikan pengalaman membaca berita terkini secara real-time yang bersumber dari portal berita ternama di Indonesia melalui integrasi dengan **Berita Indo API**.

## ✨ Fitur Unggulan

- **Antarmuka Premium & Responsif:** Desain modern menggunakan sistem warna, tipografi (*Nunito Sans*), dan ruang spasi yang *pixel-perfect* di berbagai perangkat (Mobile hingga Desktop).
- **Kategori Dinamis:** Pengguna bisa menavigasi berita berdasarkan kategori, seperti Terbaru, Nasional, Internasional, Ekonomi, dan Olahraga.
- **Ekstraksi Berita Lengkap (Smart Scraping):** Menyelesaikan limitasi RSS dari *API source* yang hanya menyediakan *snippet*, dengan cara menerapkan *custom proxy* HTML-scraper di sisi *client/development server* untuk mengambil seluruh badan artikel.
- **Sistem Komentar Interaktif:** Tampilan *Comment Section* modern yang mendukung fitur utasan (*threaded replies*) dan *pagination* tanpa mengganggu performa halaman utama.
- **Layout Berita Populer (Sidebar & Grid):** Komponen fungsional yang memiliki logika *rendering* struktural (menyesuaikan wujudnya entah saat ditaruh di *homepage* atau di *sidebar*).

## 🛠️ Stack Teknologi Utama

Proyek ini sepenuhnya dibangun memanfaatkan ekosistem React modern:
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v3 (*Custom Configuration*)
- **State & Data Management:** `@tanstack/react-query` & `axios`
- **Ikon UI:** `lucide-react` & `react-icons`
- **Routing:** `react-router-dom` v7

## 🚀 Panduan Instalasi & Menjalankan Lokal

Karena proyek ini mencantumkan *Proxy* khusus untuk menghindari masalah CORS, disarankan untuk selalu menjalankannya di lingkungan *development server* (via `npm run dev`) saat diuji coba (assesment).

1. **Clone repositori**
   ```bash
   git clone <URL_REPOSITORI_INI>
   cd SEAL-FE
   ```

2. **Pasang dependensi (`node_modules`)**
   ```bash
   npm install
   ```
   > *Disarankan menggunakan versi Node.js >= 18.*

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. **Buka di Browser**
   Buka `http://localhost:5173/` (atau port lain yang dialokasikan otomatis) pada browser kamu.

## 💡 Sorotan Solusi Teknis (Technical Highlights)

- **Mengakali Limitasi RSS & CORS:** *Endpoint* bawaan `berita-indo-api-next` berbasis RSS dan tidak memiliki respon *full-body-text* dan juga memblokir origin. Aplikasi ini merombak pengaturan `vite.config.js` dengan membuat rute *middleware* `/api/html` yang secara tak kasat mata melakukan *fetch* struktur HTML situs berita aslinya dan merayapinya via DOMParser di dalam *hook* React langsung di klien.
- **Komponen Modular (`/src/features`):** Struktur folder dibangun menyesuaikan standar FSD (Feature-Sliced Design) agar komponen spesifik-halaman (misal: Komentar Halaman Berita Detail) tidak mengotori repositori komponen umum UI (`/src/components/ui/Button.jsx`).

---
Dibuat dengan dedikasi tinggi untuk *Technical Test* SEAL. Coded by **Candidate**.
