import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';

import { Leagues } from '../enums/leagues';

import styles from './styles.module.scss';

export default function ChampionsLeague() {
  return (
    <>
      <Head>
        <title>Champions League</title>
      </Head>

      <main className={styles.main}>
        <LeagueBanner league={Leagues.CHAMPIONS_LEAGUE} season="22/23" startDate='06/20/22' endDate='06/09/23' />
      </main>
    </>
  )
}