let scrollPosition = 0;

const disableScroll = () => {
  const body = document.querySelector('body');
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollPosition}px`;
  body.style.width = '100%';
};

const enableScroll = () => {
  const body = document.querySelector('body');
  body.style.removeProperty('overflow');
  body.style.removeProperty('position');
  body.style.removeProperty('top');
  body.style.removeProperty('width');
  if (window.pageYOffset === 0) window.scrollTo(0, scrollPosition);
};

export { disableScroll, enableScroll };
