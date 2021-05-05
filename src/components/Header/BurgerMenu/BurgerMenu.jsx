import React, { useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withTranslation } from '../../../../i18n';
import { disableScroll, enableScroll } from '../../../utils/disableScroll';

import Logo from '../../../assets/img/svg/Logo.svg';
import AboutSvg from '../../../assets/img/svg/burger-menu-icons/about.svg';
import RelationshipSvg from '../../../assets/img/svg/burger-menu-icons/relationship.svg';
import UsersSvg from '../../../assets/img/svg/burger-menu-icons/users.svg';
import SignIn from '../../../assets/img/svg/burger-menu-icons/sign-in.svg';

import BookmarkSvg from '../../../assets/img/svg/burger-menu-icons/bookmark.svg';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({
  burgerActive, closeBurgerMenu, t,
}) => {
  useEffect(() => {
    if (burgerActive) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [burgerActive]);

  const [isSwipe, setSwipe] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const router = useRouter();

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    if (!isSwipe) setSwipe(true);
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(e, classNameOverlay) {
    if (touchStart - touchEnd > 75) {
      closeBurgerMenu();
    }

    if (e.target.className === classNameOverlay) {
      e.preventDefault();
      if (!isSwipe) closeBurgerMenu();
    }
    setSwipe(false);
  }

  return (
    <>
      <div
        className={burgerActive ? classNames(styles.overlay, styles.active) : styles.active}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={(e) => handleTouchEnd(e, classNames(styles.overlay, styles.active))}
        onClick={(e) => {
          closeBurgerMenu();
        }}
      />
      <div
        className={burgerActive ? classNames(styles.burger, styles.active) : styles.burger}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <a onClick={closeBurgerMenu} href="#" className={styles.headerLogo}>
          <Logo />
        </a>
        <div style={{ marginTop: 7 }} />
        <div>
          {router.pathname === '/'
            ? (
              <>
                <div className={styles.burgerLinkContainer}>
                  <LinkScroll
                    onClick={() => {
                      enableScroll();
                      closeBurgerMenu();
                    }}
                    className={styles.burgerLink}
                    activeClass={styles.selected}
                    to="about-me"
                    spy
                    smooth
                    duration={500}
                  >
                    <div className={styles.burgerLinkSvgContainer}>
                      <AboutSvg />
                    </div>
                    <span className={styles.burgerLinkText}>{t('about-me')}</span>
                  </LinkScroll>
                </div>
                <div className={styles.burgerLinkContainer}>
                  <LinkScroll
                    onClick={() => {
                      enableScroll();
                      closeBurgerMenu();
                    }}
                    className={styles.burgerLink}
                    activeClass={styles.selected}
                    to="relationships"
                    spy
                    smooth
                    duration={500}
                  >
                    <div className={styles.burgerLinkSvgContainer}>
                      <RelationshipSvg />
                    </div>
                    <span className={styles.burgerLinkText}>{t('relationship')}</span>
                  </LinkScroll>
                </div>
                <div className={styles.burgerLinkContainer}>
                  <LinkScroll
                    onClick={() => {
                      enableScroll();
                      closeBurgerMenu();
                    }}
                    className={styles.burgerLink}
                    activeClass={styles.selected}
                    to="users"
                    spy
                    smooth
                    duration={500}
                  >
                    <div>
                      <UsersSvg />
                    </div>
                    <span className={styles.burgerLinkText}>{t('users')}</span>
                  </LinkScroll>
                </div>
              </>
            )
            : (
              <>
                <div className={styles.burgerLinkContainer}>
                  <Link scroll={false} href="/#about-me">
                    <a
                      className={styles.burgerLink}
                    >
                      <div className={styles.burgerLinkSvgContainer}>
                        <AboutSvg />
                      </div>
                      <span className={styles.burgerLinkText}>{t('about-me')}</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.burgerLinkContainer}>
                  <Link scroll={false} href="/#relationships">
                    <a
                      className={styles.burgerLink}
                    >
                      <div className={styles.burgerLinkSvgContainer}>
                        <RelationshipSvg />
                      </div>
                      <span className={styles.burgerLinkText}>{t('relationship')}</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.burgerLinkContainer}>
                  <Link scroll={false} href="/#users">
                    <a
                      className={styles.burgerLink}
                    >
                      <div>
                        <UsersSvg />
                      </div>
                      <span className={styles.burgerLinkText}>{t('users')}</span>
                    </a>
                  </Link>
                </div>
              </>
            )}
          <div className={styles.burgerLinkContainer}>
            <Link href="/registration">
              <a onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <SignIn />
                </div>
                <span className={styles.burgerLinkText}>{t('sign-up')}</span>
              </a>
            </Link>
          </div>
          {/* // )} */}
          <div className={styles.burgerMobileLinks}>
            <hr className={styles.hrFooterMobileMenu} />
            <div className={styles.burgerSubmenuTitle}>{t('information')}</div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('News')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Blog')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Partners')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Shop')}</span>
              </a>
            </div>
            <hr className={styles.hrFooterMobileMenu} />
            <div className={styles.burgerSubmenuTitle}>{t('About')}</div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Overview')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Design')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Code')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Collaborate')}</span>
              </a>
            </div>
            <hr className={styles.hrFooterMobileMenu} />
            <div className={styles.burgerSubmenuTitle}>{t('Tools')}</div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Tutorials')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Resources')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Guides')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Examples')}</span>
              </a>
            </div>
            <hr className={styles.hrFooterMobileMenu} />
            <div className={styles.burgerSubmenuTitle}>{t('Support')}</div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('FAQ')}</span>
              </a>
            </div>
            <div className={styles.burgerLinkContainer}>
              <Link scroll={false} href="/terms">
                <a
                  className={styles.burgerLink}
                >
                  <div className={styles.burgerLinkSvgContainer}>
                    <BookmarkSvg />
                  </div>
                  <span className={styles.burgerLinkText}>{t('Terms')}</span>
                </a>
              </Link>
            </div>
            <div className={styles.burgerLinkContainer}>
              <Link scroll={false} href="/terms">
                <a
                  className={styles.burgerLink}
                >
                  <div className={styles.burgerLinkSvgContainer}>
                    <BookmarkSvg />
                  </div>
                  <span className={styles.burgerLinkText}>{t('Conditions')}</span>
                </a>
              </Link>
            </div>
            <div className={styles.burgerLinkContainer}>
              <a href="#" onClick={closeBurgerMenu} className={styles.burgerLink}>
                <div className={styles.burgerLinkSvgContainer}>
                  <BookmarkSvg />
                </div>
                <span className={styles.burgerLinkText}>{t('Help')}</span>
              </a>
            </div>

          </div>
          <div className={styles.burgerBottomMargin} />
        </div>
      </div>
    </>
  );
};

BurgerMenu.propTypes = {
  burgerActive: PropTypes.bool,
  t: PropTypes.func.isRequired,
  openModal: PropTypes.func,
  closeBurgerMenu: PropTypes.func,
};

BurgerMenu.defaultProps = {
  burgerActive: false,
};

export default (withTranslation('common')(BurgerMenu));
