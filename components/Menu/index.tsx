import serieA from '../../public/imgs/leagues/brasileiro-serie-a.png';
import championsLeague from '../../public/imgs/leagues/champions-league.png';
import europeLeague from '../../public/imgs/leagues/europe-league.png';
import libertadores from '../../public/imgs/leagues/libertadores.png';
import premierLeague from '../../public/imgs/leagues/premier-league.png';

import styles from './styles.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  isMobile?: boolean;
  active?: number;
}

export function Menu({ isOpen, isMobile = true, active = 0 }: MobileMenuProps) {
  return (
    isOpen ?
      <menu className={isMobile ? styles.mobMenu : styles.menu}>
        <ul>
          <li className={active == 0 ? styles.active : ''}><img src={championsLeague.src} alt="Champions League" /> Champions League</li>
          <li className={active == 1 ? styles.active : ''}><img src={europeLeague.src} alt="Europe League" /> Europe League</li>
          <li className={active == 2 ? styles.active : ''}><img src={premierLeague.src} alt="Premier League" /> Premier League</li>
          <li className={active == 3 ? styles.active : ''}><img src={libertadores.src} alt="Libertadores" /> Libertadores</li>
          <li className={active == 4 ? styles.active : ''}><img src={serieA.src} alt="Brasileiro Série A" /> Brasileiro Série A</li>
        </ul>
      </menu>
    :
      <></>
  );
}