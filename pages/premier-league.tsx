import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';
import { Leagues } from '../enums/leagues';

import styles from './styles.module.scss';

export default function PremierLeague() {
  return (
    <>
      <Head>
        <title>Premier League</title>
      </Head>

      <main className={styles.main}>
        <LeagueBanner league={Leagues.PREMIER_LEAGUE} season="22/23" startDate='08/05/22' endDate='05/27/23' />
      </main>
    </>
  )
}