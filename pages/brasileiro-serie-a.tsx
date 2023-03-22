import { GetStaticProps } from 'next';
import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';
import { StandingTable } from '../components/StandingTable';

import { Leagues } from '../enums/leagues';
import { League } from '../interfaces/league';
import { footballApi } from '../services/api';

import styles from './styles.module.scss';

interface BrasileiroAProps {
  league: League;
}

export default function BrasileiroA({ league }: BrasileiroAProps) {
  return (
    <>
      <Head>
        <title>Brasileiro Série A</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <LeagueBanner league={Leagues.BRASILEIRO_A} season="2023" startDate='04/15/23' endDate='12/03/23' />
        </div>

        <div className={styles.table}>
          <StandingTable league={league} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {  
  const response = await footballApi.get('/standings?league=71&season=2023');

  return {
    props: {
      league: response.status == 200 ? response.data.response[0].league : []
    }
  }
}