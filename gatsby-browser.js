import './src/styles/base.css'

function initGTM() {
  if(process.env.NODE_ENV === 'production') {
    if (window.isGTMLoaded) {
      return false;
    }

    window.isGTMLoaded = true;

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-PXW63FZLLE`;

    script.onload = () => {
      function gaOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/'
        window[disableStr] = !0
      }
      window.gaOptout = gaOptout;

      var gaProperty = 'G-PXW63FZLLE', disableStr = 'ga-disable-' + gaProperty;
      document.cookie.indexOf(disableStr + '=true') > -1 && (window[disableStr] = !0);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', `G-PXW63FZLLE`, { "anonymize_ip": true, "send_page_view": false });
    };

    document.head.appendChild(script);
  }
}

function loadGTM(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, loadGTM);
}

export const onClientEntry = () => {
  document.onreadystatechange = () => {
    if (document.readyState !== 'loading') {
      setTimeout(initGTM, 2000);
    }
  };

  document.addEventListener('scroll', loadGTM);
  document.addEventListener('mousemove', loadGTM);
  document.addEventListener('touchstart', loadGTM);
};