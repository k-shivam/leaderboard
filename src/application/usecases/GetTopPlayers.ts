import { LeaderboardService } from "../../domain/services/LeaderboardService";

export class GetTopPlayers {
    constructor(private service: LeaderboardService){}

    async execute(n:number){
        return this.service.getTop(n);
    }
}
