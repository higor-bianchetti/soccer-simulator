import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';
import { Leagues } from '../enums/leagues';
import { League } from '../interfaces/league';
import { footballApi } from '../services/api';

import styles from './styles.module.scss';

interface PremierLeagueProps {
  league: League;
}

export default function PremierLeague({ league }: PremierLeagueProps) {
  return (
    <>
      <Head>
        <title>Premier League</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <LeagueBanner league={Leagues.PREMIER_LEAGUE} season="22/23" startDate='08/05/22' endDate='05/27/23' />
        </div>
        <div className={styles.table}>
          <div className={styles.theader}>
            <div className={styles.title}>Classificação</div>
            <div className={styles.score}>
              <div>Pts</div>
              <div>J</div>
              <div className='m-hide'>V</div>
              <div className='m-hide'>E</div>
              <div className='m-hide'>D</div>
              <div className='m-hide'>GP</div>
              <div className='m-hide'>GC</div>
              <div>SG</div>
              <div className='m-hide'>Últ. Jogos</div>
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
                  <div>{team.points}</div>
                  <div>{team.all.played}</div>
                  <div className='m-hide'>{team.all.win}</div>
                  <div className='m-hide'>{team.all.draw}</div>
                  <div className='m-hide'>{team.all.lose}</div>
                  <div className='m-hide'>{team.all.goals.for}</div>
                  <div className='m-hide'>{team.all.goals.against}</div>
                  <div>{team.goalsDiff}</div>
                  <div className='m-hide'>
                    <div className={styles.form}>
                      {team.form.split('').map(p =>
                        <div className={`${styles.status} ${p == 'W' ? styles.victory : p == 'L' ? styles.draw : styles.lost}`}>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {  
  const response = await footballApi.get('/standings?league=39&season=2022');

  return {
    props: {
      league: response.status == 200 ? response.data.response[0].league : []
    }
  }
}