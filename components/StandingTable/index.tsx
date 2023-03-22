import { League } from '../../interfaces/league';
import styles from './styles.module.scss';

export interface StandingTableProps {
  league: League;
}

export function StandingTable({league}: StandingTableProps) {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.theader}>
          <div className={styles.title}>Classificação</div>
          <div className={styles.score}>
            <div className={styles.values}>Pts</div>
            <div className={styles.values}>J</div>
            <div className={`${styles.values} m-hide`}>V</div>
            <div className={`${styles.values} m-hide`}>E</div>
            <div className={`${styles.values} m-hide`}>D</div>
            <div className={`${styles.values} m-hide`}>GP</div>
            <div className={`${styles.values} m-hide`}>GC</div>
            <div className={styles.values}>SG</div>
            <div className={`${styles.values} m-hide`}>Últ. Jogos</div>
          </div>
        </div>
        <div className={styles.tbody}>
          {league.standings[0].map((team) =>
            <div className={styles.rank}>
              <div className={styles.team}>
                <div className={styles.pos}>{team.rank}</div>
                <div className={styles.imgTeam}>
                  <img src={team.team.logo} alt={team.team.name} />
                </div>
                <div className={styles.nameTeam}>{team.team.name}</div>
              </div>
              <div className={styles.stats}>
                <div className={styles.values}>{team.points}</div>
                <div className={styles.values}>{team.all.played}</div>
                <div className={`${styles.values} m-hide`}>{team.all.win}</div>
                <div className={`${styles.values} m-hide`}>{team.all.draw}</div>
                <div className={`${styles.values} m-hide`}>{team.all.lose}</div>
                <div className={`${styles.values} m-hide`}>{team.all.goals.for}</div>
                <div className={`${styles.values} m-hide`}>{team.all.goals.against}</div>
                <div className={styles.values}>{team.goalsDiff}</div>
                <div className='m-hide'>
                  <div className={styles.form}>
                    {team.form?.length && team.form.split('').map(p =>
                      <div className={`${styles.status} ${p == 'W' ? styles.victory : p == 'L' ? styles.lost : styles.draw}`}>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}