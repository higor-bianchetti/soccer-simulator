import { ProgressBar } from '../ProgressBar';
import { Leagues } from '../../enums/leagues';

import europeFlag from '../../public/imgs/flags/europe.webp';
import englandFlag from '../../public/imgs/flags/en.webp';
import americaFlag from '../../public/imgs/flags/south-america.webp';
import brasilFlag from '../../public/imgs/flags/br.webp';

import championsLeague from '../../public/imgs/leagues/champions-league.png';
import europeLeague from '../../public/imgs/leagues/europe-league.png';
import libertadores from '../../public/imgs/leagues/libertadores.png';
import serieA from '../../public/imgs/leagues/brasileiro-serie-a.png';
import premierLeague from '../../public/imgs/leagues/premier-league.png';

import styles from './styles.module.scss';

interface LeagueBannerProps {
  league: number;
  season: string;
  startDate: string;
  endDate: string;
}

export function LeagueBanner({league, season, startDate, endDate}: LeagueBannerProps) {
  function getImgLeague(league: number) {
    switch(league) {
      case Leagues.CHAMPIONS_LEAGUE:
        return <img src={championsLeague.src} alt="Champions League" />
      case Leagues.EUROPE_LEAGUE:
        return <img src={europeLeague.src} alt="Europe League" />
      case Leagues.PREMIER_LEAGUE:
        return <img src={premierLeague.src} alt="Premier League" />
      case Leagues.LIBERTADORES:
        return <img src={libertadores.src} alt="Copa Libertadores da América" />
      case Leagues.BRASILEIRO_A:
        return <img src={serieA.src} alt="Brasileiro Série A" />
    }
  }

  function getLeagueName(league: number) {
    switch(league) {
      case Leagues.CHAMPIONS_LEAGUE:
        return 'Champions League'
      case Leagues.EUROPE_LEAGUE:
        return 'Europe League'
      case Leagues.PREMIER_LEAGUE:
        return 'Premier League'
      case Leagues.LIBERTADORES:
        return 'Copa Libertadores'
      case Leagues.BRASILEIRO_A:
        return 'Brasileiro Série A'
    }
  }

  function getFlag(league: number) {
    switch(league) {
      case Leagues.CHAMPIONS_LEAGUE:
      case Leagues.EUROPE_LEAGUE:
        return (<>
          <img src={europeFlag.src} alt="Europa" />
          <h4>Europa</h4>
        </>)
      case Leagues.PREMIER_LEAGUE:
        return (<>
          <img src={englandFlag.src} alt="Inglaterra" />
          <h4>Inglaterra</h4>
        </>)
      case Leagues.LIBERTADORES:
        return (<>
          <img src={americaFlag.src} alt="América do Sul" />
          <h4>Amér. do Sul</h4>
        </>)
      case Leagues.BRASILEIRO_A:
        return (<>
          <img src={brasilFlag.src} alt="Brasil" />
          <h4>Brasil</h4>
        </>)
    }
  }

  function calcCompleted(startDate: string, endDate: string) {
    let start = new Date(startDate).getTime();
    let end = new Date(endDate).getTime();
    let today = new Date().getTime();

    if(today < start)
      return 0;

    return ((today - start) * 100) / (end - start);
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short'
    });
  }

  return(
    <>
      <div className={styles.banner}>
        <div className={styles.imgLeague}>
          {getImgLeague(league)}
        </div>
        <div className={styles.league}>
          <h2>{getLeagueName(league)}</h2>
          <div className={styles.info}>
            {getFlag(league)}
            <div className={styles.season}>{season}</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.progressbar}>
              <ProgressBar bgColor='#f0f0f0' completed={calcCompleted(startDate, endDate)} thin={true} />
            </div>
            <div className={styles.date}>
              <div>{formatDate(startDate)}</div>
              <div>{formatDate(endDate)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}