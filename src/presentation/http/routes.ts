import { Router } from "express";
import { RedisLeaderboardRepo } from "../../infrastructure/redis/RedisLeaderboardRepo";
import { LeaderboardService } from "../../domain/services/LeaderboardService";
import { GetTopPlayers } from "../../application/usecases/GetTopPlayers";
import { GetRank } from "../../application/usecases/GetRank";
import { updateScore } from "../../application/usecases/UpdateScore";

export const leaderboardRoutes = Router();

const repo = new RedisLeaderboardRepo();
const service = new LeaderboardService(repo);
const UpdateScore = new updateScore(service);
const getTop = new GetTopPlayers(service);
const getRank = new GetRank(service);

leaderboardRoutes.post("/score", async (req, res) => {
  const { playerId, delta } = req.body;
  await UpdateScore.execute(playerId, delta);
  res.json({ ok: true });
})

leaderboardRoutes.get("/top/:n", async (req, res) => {
  const n = Number(req.params.n);
  const data = await getTop.execute(n);
  res.json(data);
});

leaderboardRoutes.get("/rank/:playerId", async (req, res) => {
  const rank = await getRank.execute(req.params.playerId);
  res.json({ rank });
});
