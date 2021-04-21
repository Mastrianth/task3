const customViewports = {
  iPhone5: {
    name: "iPhone5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  iPhoneX: {
    name: "iPhoneX",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  iPad: {
    name: "iPad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  iPadPro: {
    name: "iPad Pro",
    styles: {
      width: "1024px",
      height: "1360px",
    },
  },
  Desktop1920x1080: {
    name: "Desktop 1920x1080",
    styles: {
      width: "1920",
      height: "1080px",
    },
  },
  Desktop2560x1440: {
    name: "Desktop 2560x1440",
    styles: {
      width: "2560",
      height: "1440px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
};
