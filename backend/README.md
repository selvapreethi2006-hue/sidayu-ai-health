# Sidayu Backend API

## Installation

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

Runs on `http://localhost:5000`

## Production

```bash
npm start
```

## API Routes

- `POST /api/chat` - Send message to AI
- `POST /api/assessment` - Start health assessment
- `GET /api/doctors` - Get available doctors
- `POST /api/appointments` - Book appointment
- `GET /health` - Health check

## Environment Variables

Create a `.env` file:

```
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```
