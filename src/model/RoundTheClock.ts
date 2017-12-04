namespace game {

    export const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25];

    export class Player {
        constructor(readonly name: string) {}
    }

    export class RoundTheClockSettings {
        constructor(readonly quickGame: boolean) {}
    }

    export class GameHistoryEntry {
        constructor(readonly player: Player,
                    readonly hit: number|null,
                    readonly multiplier: 1|2|3) {}
    }

    export class RoundTheClock {

        players: Array<Player>;
        settings: RoundTheClockSettings;

        currentPlayer: Player;


    }

}