import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';

import { Leagues } from '../enums/leagues';

import styles from './styles.module.scss';

export default function EuropeLeague() {
  return (
    <>
      <Head>
        <title>Europe League</title>
      </Head>

      <main className={styles.main}>
        <LeagueBanner league={Leagues.EUROPE_LEAGUE} season="22/23" startDate='08/04/22' endDate='05/30/23' />
      </main>
    </>
  )
}