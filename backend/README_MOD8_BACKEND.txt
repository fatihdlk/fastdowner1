ULTRA V5 MODÜL 8 — Fastdowner Backend (yt-dlp Motoru)

1) Bu klasörü sunucuda frontend'in yanına koy:
   /home/fatih_beat/frontend
   /home/fatih_beat/backend   ← bu modül

2) Sunucuda backend kurulumu:
   cd /home/fatih_beat/backend
   npm install

3) Sunucuya yt-dlp kur:
   Ubuntu/Debian:
     sudo apt-get update
     sudo apt-get install yt-dlp
   veya:
     pip install yt-dlp

4) Backend'i çalıştır:
   npm start
   veya pm2 ile:
     pm2 start src/server.js --name fastdowner-backend --interpreter node

5) Backend URL:
   Varsayılan: http://127.0.0.1:4001

   Frontend'de FASTDOWNER_BACKEND_URL ortam değişkeni olarak kullanabilirsin.

6) API endpoint'leri:

   POST /api/v1/info
     body: { "url": "https://..." }
     response: { title, description, duration, thumbnail, ... }

   POST /api/v1/download
     body: { "url": "https://...", "format": "best" | "audio" | format_id }

     response:
       - direct_url: gerçek medya URL'si (dosyayı kendi sunucun yerine kaynaktan indir)
       - title, format_id, ext, height, fps

Bu backend, Fastdowner'ın ana indirme motorudur. Frontend /api/download
endpoint'i bu motoru proxy olarak kullanabilir.
