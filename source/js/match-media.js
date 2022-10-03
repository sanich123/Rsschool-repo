const bigDesktop = '(min-width: 1600px)';
const smallDesktop = '(min-width: 1000px) and (max-width: 1599px)';
const tablet = '(min-width: 640) and (max-width: 999px)';
const mobile = '(max-width: 639px)';

let mQLBigDesktop = window.matchMedia(bigDesktop);
let mQLSmallDesktop = window.matchMedia(smallDesktop);
let mQLTablet = window.matchMedia(tablet);
let mQLMobile = window.matchMedia(mobile);

let isBigDesktop = false;
let isSmallDesktop = false;
let isTablet = false;
let isMobile = false;
const bgDesk = window.matchMedia(bigDesktop);
const smDesk = window.matchMedia(smallDesktop);
const pad = window.matchMedia(tablet);
const phone = window.matchMedia(mobile);

function handleWidthChange(mql) {
  if (mql.matches === bigDesktop) {
    isBigDesktop = true;
  }
  if (mql.matches === smallDesktop) {
    isSmallDesktop = true;
  }
  if (mql.matches === tablet) {
    isTablet = true;
  } else {
    isMobile = true;
  }
}

handleWidthChange(mQLBigDesktop);
handleWidthChange(mQLSmallDesktop);
handleWidthChange(mQLTablet);
handleWidthChange(mQLMobile);

mQLBigDesktop.addEventListener('change', handleWidthChange);
mQLSmallDesktop.addEventListener('change', handleWidthChange);
mQLTablet.addEventListener('change', handleWidthChange);
mQLMobile.addEventListener('change', handleWidthChange)
