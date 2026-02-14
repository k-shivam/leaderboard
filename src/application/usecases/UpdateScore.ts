import { LeaderboardService } from "../../domain/services/LeaderboardService";

export class updateScore {
    constructor(private service: LeaderboardService){}

    async execute(playerId:string, delta: number){
        return this.service.updateScore(playerId, delta);
    }
}
