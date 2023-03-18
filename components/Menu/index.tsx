import serieA from '../../public/imgs/leagues/brasileiro-serie-a.png';
import championsLeague from '../../public/imgs/leagues/champions-league.png';
import europeLeague from '../../public/imgs/leagues/europe-league.png';
import libertadores from '../../public/imgs/leagues/libertadores.png';
import premierLeague from '../../public/imgs/leagues/premier-league.png';
import { ActiveLink } from '../ActiveLink';

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
          <ActiveLink activeClassName={styles.active} href="/champions-league">
            <li><img src={championsLeague.src} alt="Champions League" /> Champions League</li>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/europe-league">
            <li><img src={europeLeague.src} alt="Europe League" /> Europe League</li>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/premier-league">
            <li><img src={premierLeague.src} alt="Premier League" /> Premier League</li>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/libertadores">
            <li><img src={libertadores.src} alt="Libertadores" /> Libertadores</li>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/brasileiro-serie-a">
            <li><img src={serieA.src} alt="Brasileiro Série A" /> Brasileiro Série A</li>
          </ActiveLink>
        </ul>
      </menu>
    :
      <></>
  );
}