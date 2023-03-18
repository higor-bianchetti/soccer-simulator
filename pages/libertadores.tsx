import Head from 'next/head';
import { LeagueBanner } from '../components/LeagueBanner';

import { Leagues } from '../enums/leagues';

import styles from './styles.module.scss';

export default function Libertadores() {
  return (
    <>
      <Head>
        <title>Libertadores</title>
      </Head>

      <main className={styles.main}>
        <LeagueBanner league={Leagues.LIBERTADORES} season="2023" startDate='02/07/23' endDate='11/11/23' />
      </main>
    </>
  )
}