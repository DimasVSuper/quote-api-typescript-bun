# 🚀 Quote API

API sederhana untuk mengambil kutipan inspiratif dari [ZenQuotes.io](https://zenquotes.io/), dibangun dengan **Bun**, **TypeScript**, dan **Express**.

---

## ✨ Fitur

- **GET /api/quotes**  
  📚 Mendapatkan 50 kutipan acak.

- **GET /api/quotes/random**  
  🎲 Mendapatkan satu kutipan acak.

- **GET /api/quotes/today**  
  ☀️ Mendapatkan kutipan of the day.

- **GET /api/quotes/image**  
  🖼️ Mendapatkan URL gambar inspirasi acak.

- 🛡️ Rate limiter untuk mencegah abuse/DDoS.
- 📝 Logging IP jika menyentuh rate limit.
- 🧩 Kode rapi, modular, dan siap dikembangkan.
- 🔥 Siap untuk deployment di server mana pun.

---

## ⚡️ Instalasi

```bash
bun install
```

## ▶️ Menjalankan Server

```bash
bun run index.ts
```

Server akan berjalan di [http://localhost:3000](http://localhost:3000).

---

## 🧪 Contoh Request

```bash
curl http://localhost:3000/api/quotes
curl http://localhost:3000/api/quotes/random
curl http://localhost:3000/api/quotes/today
curl http://localhost:3000/api/quotes/image
```

---

## 🚦 Rate Limiting

- ⏱️ Maksimal **100 request per menit per IP**.
- 🚫 Jika melebihi, akan mendapat status **429** dan IP dicatat di log.
- 🕵️‍♂️ Log IP otomatis jika terdeteksi abuse.

---

## 🗂️ Struktur Folder

```
src/
  controllers/    # Handler untuk setiap endpoint
  routes/         # Routing Express
  services/       # Logic pemanggilan API eksternal
  types/          # Definisi tipe TypeScript
  utils/          # Helper functions (misal: httpClient)
  app.ts          # Setup Express app
  server.ts       # Entry point server
index.ts          # Entry utama project
```

---

## 🛠️ Stack & Tools

- [Bun](https://bun.sh/) ⚡
- [TypeScript](https://www.typescriptlang.org/) 🟦
- [Express](https://expressjs.com/) 🚂
- [Morgan](https://github.com/expressjs/morgan) (logging)
- [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) (rate limiter)
- [ZenQuotes API](https://zenquotes.io/) (sumber kutipan)

---

## 💡 Pengembangan & Kontribusi

- Fork & clone repo ini.
- Tambahkan fitur baru, perbaiki bug, atau buat dokumentasi lebih lengkap!
- Pull request sangat diterima 🚀

---

## 📋 Lisensi & Attribution

Inspirational quotes provided by [ZenQuotes API](https://zenquotes.io/)  
Project ini open source, silakan gunakan dan modifikasi sesuai kebutuhan.

---

## 🙏 Terima Kasih