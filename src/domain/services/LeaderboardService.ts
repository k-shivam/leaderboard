import { LeaderboardRepository } from "../interfaces/LeaderboardRepository";

export class LeaderboardService {
    constructor(private repo: LeaderboardRepository){}

    async updateScore(playerId: string, delta: number){
        return this.repo.incrementScore(playerId, delta);
    }

    async getTop(n: number){
        return this.repo.getTopN(n);
    }

    async getRank(playerId: string){
        return this.repo.getRank(playerId);
    }
}
