import React, { useContext } from 'react';
import { I18nContext } from 'next-i18next';
import PropTypes from 'prop-types';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18n, withTranslation } from '../../../i18n';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';

import Logo from '../../assets/img/svg/do-not-inline/Logo.svg';
import FootPrints from '../../assets/img/svg/do-not-inline/Footprints.svg';
import Facebook from '../../assets/img/svg/do-not-inline/social-icons/facebook.svg';
import Twitter from '../../assets/img/svg/do-not-inline/social-icons/twitter.svg';
import Instagram from '../../assets/img/svg/do-not-inline/social-icons/instagram.svg';
import Pinterest from '../../assets/img/svg/do-not-inline/social-icons/pinterest.svg';
import LinkedIn from '../../assets/img/svg/do-not-inline/social-icons/linkedin.svg';

import styles from './Footer.module.scss';
import ContentWrapper from '../ContentWrapper';

function Footer({ t }) {
  const router = useRouter();
  const { i18n: { language } } = useContext(I18nContext);
  return (
    <ContentWrapper>
      <div className="bg-white">
        <div className={styles.footprints}>
          <img src={FootPrints} alt="foot" />
        </div>
        <div className="container">
          <div className={styles.footerWrapper}>
            <div className={styles.headerMenuWrapper}>
              <Link href="/" passHref>
                <a className={styles.logoLink}>
                  <img width={100} height={26} alt="Logo" src={Logo} />
                </a>
              </Link>
              <div className={styles.linksWrapper}>
                <span className={styles.leftMenuFooter}>
                  {router.pathname === '/'
                    ? (
                      <>
                        <LinkScroll
                          activeClass={styles.selected}
                          to="about-me"
                          spy
                          smooth
                          duration={500}
                        >
                          {t('about-me')}
                        </LinkScroll>
                        <LinkScroll
                          activeClass={styles.selected}
                          to="relationships"
                          spy
                          smooth
                          duration={500}
                        >
                          {t('relationship')}
                        </LinkScroll>
                        <LinkScroll
                          activeClass={styles.selected}
                          to="users"
                          spy
                          smooth
                          duration={500}
                        >
                          {t('users')}
                        </LinkScroll>
                      </>
                    )
                    : (
                      <>
                        <Link scroll={false} href="/#about-me"><a>{t('about-me')}</a></Link>
                        <Link scroll={false} href="/#relationships">
                          <a>
                            {t('relationship')}
                          </a>
                        </Link>
                        <Link scroll={false} href="/#users"><a>{t('users')}</a></Link>
                      </>
                    )}
                  <Link href="/registration"><a>{t('sign-up')}</a></Link>
                </span>
                <span className={styles.rightMenuFooter}>
                  <span className={styles.langMenu}>
                    <button
                      type="button"
                      className={language !== 'de' ? styles.selected : null}
                      onClick={(e) => {
                        i18n.changeLanguage('en');
                      }}
                    >
                      En
                    </button>
                    <button
                      type="button"
                      className={language === 'de' ? styles.selected : null}
                      onClick={(e) => {
                        i18n.changeLanguage('de');
                      }}
                    >
                      De
                    </button>
                  </span>
                </span>
              </div>
            </div>
            <hr className={styles.hrFooter} />
            <div className={styles.footerSitemapWrapper}>
              <div className={styles.footerSitemapColumn1}>
                <div className={styles.footerCol}>
                  <div className={styles.columnTitle}>{t('information')}</div>
                  <div>
                    <a href="#">{t('News')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Blog')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Partners')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Shop')}</a>
                  </div>
                </div>
                <div className={styles.footerCol}>
                  <div className={styles.columnTitle}>{t('About')}</div>
                  <div>
                    <a href="#">{t('Overview')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Design')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Code')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Collaborate')}</a>
                  </div>
                </div>
                <div className={styles.footerCol}>
                  <div className={styles.columnTitle}>{t('Tools')}</div>
                  <div>
                    <a href="#">{t('Tutorials')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Resources')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Guides')}</a>
                  </div>
                  <div>
                    <a href="#">{t('Examples')}</a>
                  </div>
                </div>
                <div className={styles.footerCol}>
                  <div className={styles.columnTitle}>
                    {t('Support')}
                  </div>
                  <div>
                    <a href="#">{t('FAQ')}</a>
                  </div>
                  <div>
                    <Link
                    // scroll={false}
                      href="/terms"
                    >
                      <a>{t('Terms')}</a>
                    </Link>
                  </div>
                  <div>
                    <Link
                    // scroll={false}
                      href="/terms"
                    >
                      <a>{t('Conditions')}</a>
                    </Link>
                  </div>
                  <div>
                    <a href="#">{t('Help')}</a>
                  </div>
                </div>
              </div>
              <div className={styles.footerSitemapColumn2}>
                <div className={styles.columnTitle}>{t('Contacts')}</div>
                <div><a href="mailto:work.of.future@gmail.com">work.of.future@gmail.com</a></div>
                <div><a href="tel:+380507892498">+38 (050) 789 24 98</a></div>
                <div><a href="tel:+380507896534">+38 (050) 789 65 34</a></div>
              </div>
            </div>
            <div className={styles.footerCopyrightAndLinksWrapper}>
              <div className={styles.footerCopyright}>
                © abz.agency
                {t('copyright')}
              </div>
              <div className={styles.footerButton}>
                <ButtonComponent
                  variant="outlined"
                  color="primary"
                  size="large"
                  disabled={false}
                  label={t('sign-up')}
                />
              </div>
              <div className={styles.footerIcons}>
                <a href="https://www.facebook.com/"><img src={Facebook} alt="facebook" /></a>
                <a href="https://twitter.com/"><img src={Twitter} alt="twitter" /></a>
                <a href="https://www.instagram.com/"><img src={Instagram} alt="instagram" /></a>
                <a href="https://www.linkedin.com/"><img src={LinkedIn} alt="linkedin" /></a>
                <a href="https://www.pinterest.com/"><img src={Pinterest} alt="pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Footer);
