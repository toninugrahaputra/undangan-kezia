# Undangan Digital Modern 💒

Starter pack undangan digital modern dengan React. Template undangan pernikahan digital yang elegan, modern, dan mudah dikustomisasi. Tersedia untuk **pernikahan Kristen** dan dapat disesuaikan untuk agama lain.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Fitur

- 🎨 **Modern Minimalist Design** - Desain clean dan elegan
- 🎬 **Animated Cover** - Cover dengan animasi smooth dan tombol "Buka Undangan"
- ⏰ **Countdown Timer** - Timer hitung mundur ke tanggal pernikahan
- 📸 **Photo Gallery** - Galeri foto dengan lightbox dan navigasi
- 📝 **RSVP Form** - Form konfirmasi kehadiran dengan integrasi WhatsApp
- 🎵 **Music Player** - Background music player dengan kontrol lengkap
- 📍 **Google Maps** - Integrasi peta lokasi acara
- 💬 **Quote Section** - Bagian quote/ayat tentang pernikahan
- 📱 **Responsive Design** - Tampil sempurna di semua device
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk loading cepat

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Installation

1. Clone atau download repository ini

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Buka browser dan kunjungi `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output akan ada di folder `dist`

## 🎨 Kustomisasi

### Edit Data Undangan

Semua data undangan ada di file `src/data/invitationData.json`. Edit file ini untuk mengubah informasi undangan:

```json
{
  "couple": {
    "groom": {
      "name": "Nama Pria Lengkap",
      "nickname": "Panggilan Pria",
      "photo": "URL foto pria",
      "parents": {
        "father": "Bpk. Nama Ayah",
        "mother": "Ibu Nama Ibu"
      }
    },
    "bride": {
      "name": "Nama Wanita Lengkap",
      "nickname": "Panggilan Wanita",
      "photo": "URL foto wanita",
      "parents": {
        "father": "Bpk. Nama Ayah",
        "mother": "Ibu Nama Ibu"
      }
    }
  },
  "event": {
    "weddingDate": "2026-12-25T08:00:00",
    "pemberkatan": {
      "date": "Sabtu, 25 Desember 2026",
      "time": "08:00 - 10:00 WIB",
      "location": "Nama Lokasi Pemberkatan",
      "address": "Alamat lengkap"
    },
    "resepsi": {
      "date": "Sabtu, 25 Desember 2026",
      "time": "11:00 - 14:00 WIB",
      "location": "Nama Lokasi Resepsi",
      "address": "Alamat lengkap"
    }
  },
  "gallery": [
    "URL foto 1",
    "URL foto 2",
    "URL foto 3"
  ],
  "quote": {
    "text": "Teks quote/ayat Alkitab",
    "source": "Sumber (misal: 1 Korintus 13:4-8a)"
  },
  "music": {
    "title": "Judul Lagu",
    "artist": "Nama Artis",
    "url": "URL file audio"
  },
  "map": {
    "embedUrl": "Google Maps embed URL",
    "directUrl": "Google Maps direct URL"
  },
  "rsvp": {
    "waNumber": "6281234567890",
    "formUrl": ""
  }
}
```

### Mengubah Foto

Letakkan file foto di folder `public/` dan referensikan di `invitationData.json`:

```json
{
  "gallery": [
    "/photos/wedding1.jpg",
    "/photos/wedding2.jpg",
    "/photos/wedding3.jpg"
  ]
}
```

### Mengubah Music

Ganti URL music di `invitationData.json`:

```json
{
  "music": {
    "title": "Judul Lagu",
    "artist": "Nama Artis",
    "url": "/music/wedding-song.mp3"
  }
}
```

Letakkan file music di folder `public/music/`

### Mengubah Google Maps

1. Buka [Google Maps](https://www.google.com/maps)
2. Cari lokasi venue
3. Klik menu > Bagikan > Embed peta
4. Copy HTML dan ambil URL dari `src` attribute
5. Paste di `invitationData.json`

### Mengubah Warna (Tema)

Edit file `tailwind.config.js` untuk mengubah color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // ... primary colors
      },
      accent: {
        // ... accent colors (ganti pink dengan warna favorit Anda)
      }
    }
  }
}
```

## 📁 Struktur Project

```
undangan-digital-modern/
├── public/                 # Static assets (foto, music, dll)
├── src/
│   ├── components/        # React components
│   │   ├── Cover/        # Cover dengan tombol buka undangan
│   │   ├── Hero/         # Hero section dengan nama couple
│   │   ├── Countdown/    # Countdown timer
│   │   ├── Quote/        # Quote/ayat section
│   │   ├── EventDetails/ # Detail acara (akad & resepsi)
│   │   ├── Gallery/      # Galeri foto dengan lightbox
│   │   ├── RSVP/         # Form konfirmasi kehadiran
│   │   ├── Map/          # Google Maps integration
│   │   └── MusicPlayer/  # Music player floating button
│   ├── data/
│   │   └── invitationData.json  # Data undangan
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis detect dan deploy project

### Deploy ke Netlify

1. Build project: `npm run build`
2. Drag & drop folder `dist` ke [Netlify Drop](https://app.netlify.com/drop)

### Deploy ke GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Tambah script di `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy: `npm run deploy`

## 🛠️ Teknologi

- **React 18** - UI library
- **Vite** - Build tool dan dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Countdown** - Countdown timer component

## 📝 Customization Tips

### Tambah Font Baru

1. Import font di `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

2. Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      yourfont: ['YourFont', 'serif'],
    }
  }
}
```

### Tambah Analytics

Tambahkan Google Analytics atau lainnya di `index.html` sebelum closing `</head>` tag.

### Tambah Meta Tags untuk SEO

Edit meta tags di `index.html`:

```html
<meta name="description" content="The Wedding of Name & Name" />
<meta property="og:title" content="The Wedding of Name & Name" />
<meta property="og:image" content="URL-OG-IMAGE" />
```

## 🐛 Troubleshooting

### Music tidak autoplay

Browser modern memblokir autoplay. Pastikan user berinteraksi dengan page dulu (klik tombol buka undangan).

### Countdown tidak muncul

Pastikan format tanggal di `invitationData.json` benar: `YYYY-MM-DDTHH:MM:SS`

### Maps tidak muncul

Pastikan Google Maps embed URL valid. Test URL di browser terlebih dahulu.

## 📄 License

MIT License - Bebas digunakan untuk personal atau commercial projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

Jika template ini membantu, consider giving it a ⭐️ on GitHub!

---

Made with ❤️ using React & Vite
