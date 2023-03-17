import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXLg } from 'react-icons/bs';
import { FormEvent, useState } from 'react';

import styles from './styles.module.scss';

import { Menu } from '../Menu';

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu(event: FormEvent) {
    event.preventDefault();

    setMenuIsOpen(!menuIsOpen);
  }

  function menuIcon() {
    if(!menuIsOpen)
      return <GiHamburgerMenu />
    
      return <BsXLg />
  }

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.mobMenu} m-show`} onClick={toggleMenu}>
          {menuIcon()}
        </div>
        <h1>Football Stats</h1>
        <div className="m-show">
          <Menu isOpen={menuIsOpen} />
        </div>
      </header>
      <div className="m-hide">
        <menu>
          <Menu isOpen={true} isMobile={false} />
        </menu>
      </div>
    </>
  );
}