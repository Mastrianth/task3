export const preloadImgAndReplaceSrc = (src, imgToReplace) => {
  const image = new Image();
  image.onload = () => { imgToReplace.src = src; };
  image.src = src;
};

export const preloadImg = (src, callback) => {
  const image = new Image();
  image.onload = callback;
  image.src = src;
};
