import { LeaderboardService } from "../../domain/services/LeaderboardService";

export class GetRank{
    constructor(private service: LeaderboardService){}

    async execute(playerId: string){
        this.service.getRank(playerId);
    }
}
