# Sapling frontend

Sapling is an AI-powered curriculum generator: enter a topic and it presents a structured curriculum of modules, lessons, and resources. The backend is an n8n workflow that uses Google Gemini to generate the curriculum JSON.

## Run locally

```sh
npm install
npm run dev
```

Before generating a curriculum, create/update `.env` and set `VITE_WEBHOOK_URL` to your own n8n webhook URL. See `.env.example` for the expected format.
