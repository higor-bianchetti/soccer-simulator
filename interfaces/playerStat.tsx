import { League } from "./league";
import { Team } from "./team";

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface Stats {
  team: Team;
  league: Omit<League, 'standings'>;
  games: {
    appearences: number;
    lineups: number;
    minutes: number;
    number?: number;
    position: string;
    rating: string;
    captain: boolean; 
  };
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  shots: {
    total: number;
    on: number;
  };
  goals: {
    total: number;
    conceded: number;
    assists: number;
    saves: number;
  };
  passes: {
    total: number;
    key: number;
    accuracy: number;
  }
  tackles: {
    total: number;
    blocks: number;
    interceptions: number;
  };
  duels: {
    total: number;
    won: number;
  };
  dribbles: {
    attempts: number;
    success: number;
    past?: number;
  },
  fouls: {
    drawn: number;
    committed: number;
  },
  cards: {
    yellow: number;
    yellowred: number;
    red: number;
  },
  penalty: {
    won?: number;
    commited?: number;
    scored?: number;
    missed?: number;
    saved?: number;
  }
}

export interface PlayerStat {
  player: Player;
  statistics: Stats[];
}