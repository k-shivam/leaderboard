import Redis from 'ioredis';
import { LeaderboardRepository } from '../../domain/interfaces/LeaderboardRepository';

export class RedisLeaderboardRepo implements LeaderboardRepository {
    private redis = new Redis();
    private KEY = "leaderboard:global";

    async incrementScore(playerId: string, delta: number): Promise<void> {
        await this.redis.zincrby(this.KEY, delta, playerId);
    }

    async getTopN(n: number): Promise<any[]> {
        return await this.redis.zrevrange(this.KEY, 0, n-1, "WITHSCORES");
    }

    async getRank(playerId: string): Promise<number | null> {
        const rank = await this.redis.zrevrank(this.KEY, playerId);
        return rank === null ? null : rank + 1;
    }
}
