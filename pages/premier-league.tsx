import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';
import { StandingTable } from '../components/StandingTable';
import { Leagues } from '../enums/leagues';
import { League } from '../interfaces/league';
import { PlayerStat } from '../interfaces/playerStat';
import { footballApi } from '../services/api';

import styles from './styles.module.scss';
import { PlayerCard } from '../components/PlayerCard';

interface PremierLeagueProps {
  league: League;
  topScorers: PlayerStat[],
  topAssists: PlayerStat[]
}

export default function PremierLeague({ league, topScorers, topAssists }: PremierLeagueProps) {
  const [tabActive, setTabActive] = useState(0);

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
          <h2>Classificação</h2>
          <StandingTable league={league} />
        </div>

        {(topScorers?.length && topAssists?.length) && <div className={styles.topList}>
          <div className={styles.tabs}>
            <div className={`${styles.tab} ${tabActive == 0 && styles.active}`} onClick={() => setTabActive(0)}>
              <h2>Artilheiros</h2>
            </div>
            <div className={`${styles.tab} ${tabActive == 1 && styles.active}`} onClick={() => setTabActive(1)}>
              <h2>Assistências</h2>
            </div>
          </div>
          <div className={styles.tabContent}>
            {tabActive == 0 && topScorers?.map((player, index) => 
              <PlayerCard key={`sc-${index}`} pos={index + 1} player={player} score={player.statistics[0].goals.total} />
            )}
            {tabActive == 1 && topAssists?.map((player, index) =>
              <PlayerCard key={`as-${index}`} pos={index + 1} player={player} score={player.statistics[0].goals.assists} />
            )}
          </div>
        </div>}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {  
  const standingsResult = await footballApi.get('/standings?league=39&season=2022');
  const topScorersResult = await footballApi.get('/players/topscorers?season=2022&league=39');
  const topAssists = await footballApi.get('/players/topassists?season=2022&league=39');

  return {
    props: {
      league: standingsResult.status == 200 ? standingsResult.data.response[0].league : [],
      topScorers: topScorersResult.status == 200 ? topScorersResult.data.response : [],
      topAssists: topAssists.status == 200 ? topAssists.data.response : []
    },
    revalidate: 3600
  }
}