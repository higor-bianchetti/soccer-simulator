import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';

import { Leagues } from '../enums/leagues';

import styles from './styles.module.scss';

export default function BrasileiroA() {
  return (
    <>
      <Head>
        <title>Brasileiro Série A</title>
      </Head>

      <main className={styles.main}>
        <LeagueBanner league={Leagues.BRASILEIRO_A} season="2023" startDate='04/15/23' endDate='12/03/23' />
      </main>
    </>
  )
}