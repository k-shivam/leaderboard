import express from "express";
import { leaderboardRoutes } from "./presentation/http/routes";
import { RedisLeaderboardRepo } from "./infrastructure/redis/RedisLeaderboardRepo";
import { LeaderboardService } from "./domain/services/LeaderboardService";
import { WsServer } from "./infrastructure/websocket/LivePush";

const app = express();

app.use(express.json());     // body parser
app.use("/api", leaderboardRoutes);    // register routes

const repo = new RedisLeaderboardRepo();
const service = new LeaderboardService(repo);
new WsServer(service);


app.listen(3000, () => {
  console.log("HTTP server running on port 3000");
  console.log("WebSocket server running on port 4000");
});
