import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';
import { StandingTable } from '../components/StandingTable';
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
          <StandingTable league={league} />
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