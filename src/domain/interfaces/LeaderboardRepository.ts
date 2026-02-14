export interface LeaderboardRepository {
    incrementScore(playerId: string, delta: number): Promise<void>;
    getTopN(n: number): Promise<any[]>;
    getRank(playerId: string):Promise<number | null>;

}
