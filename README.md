#Prerequisites

##Make sure you have:
Node.js v18+
Docker (for Redis)
npm or yarn

# 🧱 Setup Instructions
##Clone Repository
```
git clone <your-repo-url>
cd leaderboard
```

##Install Dependencies
```
npm install
```

##Start Redis (Docker)
```
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:7
```
##Verify
```
redis-cli ping
```
##Environment Variables (Optional)
```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
WS_PORT=4000
```

##Running the Project
```
npm run dev
or
npx ts-node src/app.ts



