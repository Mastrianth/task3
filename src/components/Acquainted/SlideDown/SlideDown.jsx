import React, { memo } from "react";
import styles from './SlideDown.module.scss';
import {withTranslation} from '../../../i18n';
import PropTypes from "prop-types";

function SlideDown () {
  return (
    <div className={styles.slideDownContainer}>
      <div className={styles.slideDown}>{("Scroll down")}</div>
      <svg className={styles.slideDownIcon} width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.6544 14.2187C20.6544 15.5081 20.6634 16.7975 20.6524 18.0879C20.6072 23.4263 16.6395 27.7618 11.4257 28.3477C6.05304 28.9527 1.0613 25.169 0.156822 19.8194C0.0935086 19.4436 0.0874787 19.0546 0.0824538 18.6718C0.0492895 15.9282 0.00708028 13.1846 4.54188e-05 10.44C-0.00698944 7.84409 0.803025 5.51555 2.54667 3.587C5.32041 0.518791 8.79161 -0.653016 12.8085 0.350959C16.7973 1.3479 19.3097 3.98899 20.3539 7.9657C20.564 8.76466 20.6112 9.61889 20.6413 10.451C20.6886 11.7052 20.6544 12.9625 20.6544 14.2187ZM18.8887 14.1936C18.8887 12.9715 18.9007 11.7484 18.8836 10.5264C18.8756 9.97566 18.8485 9.4199 18.762 8.87721C18.0214 4.25129 13.4155 1.02932 8.82076 1.90767C4.67521 2.6996 1.79796 6.12457 1.7658 10.3405C1.7467 12.9353 1.75675 15.5312 1.77384 18.126C1.77786 18.6748 1.81002 19.2386 1.93463 19.7702C2.74666 23.2444 4.86817 25.5508 8.33334 26.388C11.8045 27.2261 14.7371 26.1197 17.0355 23.3921C17.7872 22.5007 18.2997 21.4596 18.6173 20.341C18.8736 19.4375 18.9037 18.4989 18.8927 17.5592C18.8786 16.4377 18.8887 15.3151 18.8887 14.1936Z" fill="#7E7E7E"/>
        <path d="M10.3343 39.0968C11.5634 38.2818 12.7884 37.4698 14.0135 36.6577C15.2396 35.8437 16.4626 35.0257 17.6947 34.2207C17.8706 34.1061 18.0807 34.0116 18.2857 33.9815C18.6625 33.9262 18.9982 34.1373 19.1449 34.4599C19.2997 34.8005 19.2213 35.2146 18.9429 35.4739C18.8585 35.5533 18.757 35.6166 18.6605 35.6809C16.125 37.3642 13.5834 39.0396 11.0579 40.738C10.5413 41.0857 10.1112 41.0877 9.59259 40.739C7.09521 39.0586 4.58075 37.4024 2.07333 35.7382C1.96177 35.6638 1.8452 35.5955 1.7447 35.5091C1.38793 35.2015 1.3216 34.7041 1.58189 34.3342C1.82912 33.9815 2.29844 33.8569 2.69742 34.0649C2.94867 34.1955 3.17981 34.3644 3.41699 34.5212C5.60483 35.9734 7.79066 37.4266 9.9785 38.8788C10.088 38.9491 10.2026 39.0154 10.3343 39.0968Z" fill="#7E7E7E"/>
        <path d="M2.42514 29.8945C2.56182 29.9649 2.81005 30.0634 3.02712 30.2071C5.31546 31.7186 7.59878 33.2391 9.88511 34.7536C10.4198 35.1074 10.267 35.0822 10.7494 34.7637C13.0247 33.2612 15.2929 31.7507 17.5652 30.2443C17.7179 30.1428 17.8717 30.0362 18.0395 29.9669C18.4355 29.8031 18.8636 29.9508 19.0887 30.3076C19.3008 30.6432 19.2636 31.0854 18.9832 31.3719C18.8797 31.4784 18.751 31.5628 18.6264 31.6462C16.1049 33.3205 13.5764 34.9848 11.065 36.6731C10.5504 37.0198 10.1223 37.0349 9.60171 36.6842C7.09026 34.9948 4.56173 33.3306 2.04023 31.6563C1.91562 31.5729 1.78597 31.4904 1.67945 31.3859C1.42217 31.1337 1.35685 30.7357 1.50156 30.4111C1.63523 30.1106 1.97189 29.8935 2.42514 29.8945Z" fill="#7E7E7E"/>
        <path d="M9.4419 6.80839C9.4419 6.08983 9.43687 5.37027 9.44592 4.65171C9.44793 4.47081 9.46702 4.28087 9.52732 4.11304C9.65395 3.7623 9.94238 3.59748 10.3012 3.57035C10.6469 3.54422 11.0036 3.77838 11.1252 4.11404C11.1805 4.2668 11.2036 4.43966 11.2046 4.60347C11.2107 6.10792 11.2087 7.61238 11.2076 9.11683C11.2076 9.18316 11.2097 9.2515 11.2016 9.31683C11.1413 9.81831 10.7634 10.167 10.2991 10.15C9.85093 10.1339 9.48813 9.7962 9.45295 9.31381C9.42481 8.91483 9.44391 8.51184 9.4429 8.11085C9.4419 7.6777 9.4419 7.24255 9.4419 6.80839Z" fill="#7E7E7E"/>
      </svg>
    </div>
  );
};

// SlideDown.propTypes = {
//   translate: PropTypes.func.isRequired,
// }

// export default withTranslation('common')(SlideDown);
export default memo(SlideDown);


