import { PlayerStat } from '../../interfaces/playerStat';
import styles from './styles.module.scss';

interface PlayerCardProps {
  pos: number;
  player: PlayerStat;
  score: number;
}

export function PlayerCard({pos, player, score}: PlayerCardProps) {
  return (
    <div className={styles.player}>
      <div className={styles.pos}>{pos}</div>
      <div className={styles.playerInfo}>
        <div className={styles.photo}>
          <img src={player.player.photo} alt={player.player.name} />
          <div className={styles.team}>
            <img src={player.statistics[0].team.logo} alt={player.statistics[0].team.name} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{player.player.name}</div>
          <div className={styles.position}>{player.statistics[0].games.position}</div>
        </div>
      </div>
      <div className={styles.score}>{score}</div>
    </div>
  )
}