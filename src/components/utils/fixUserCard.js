export const addDefaultSrc = (defaultAvatar) => (event) => {
  event.target.src = defaultAvatar;
};

export const isEllipsisActive = (tag) => tag.offsetWidth < tag.scrollWidth;
