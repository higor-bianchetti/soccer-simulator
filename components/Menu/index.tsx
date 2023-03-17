import serieA from '../../public/imgs/leagues/brasileiro-serie-a.png';
import championsLeague from '../../public/imgs/leagues/champions-league.png';
import europeLeague from '../../public/imgs/leagues/europe-league.png';
import libertadores from '../../public/imgs/leagues/libertadores.png';
import premierLeague from '../../public/imgs/leagues/premier-league.png';

import styles from './styles.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  isMobile?: boolean;
}

export function Menu({ isOpen, isMobile = true }: MobileMenuProps) {
  return (
    isOpen ?
      <menu className={isMobile ? styles.mobMenu : styles.menu}>
        <ul>
          <li><img src={championsLeague.src} alt="Champions League" /> Champions League</li>
          <li><img src={europeLeague.src} alt="Europe League" /> Europe League</li>
          <li><img src={premierLeague.src} alt="Premier League" /> Premier League</li>
          <li><img src={libertadores.src} alt="Libertadores" /> Libertadores</li>
          <li><img src={serieA.src} alt="Brasileiro Série A" /> Brasileiro Série A</li>
        </ul>
      </menu>
    :
      <></>
  );
}