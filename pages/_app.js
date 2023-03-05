import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { withTranslateRoutes } from 'next-translate-routes'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withTranslateRoutes(appWithTranslation(MyApp));
