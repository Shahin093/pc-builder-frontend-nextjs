// import "@/styles/globals.css";

import NavBar from "@/components/shared/navber";
import "../styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { SessionProvider } from "next-auth/react";
import FooterPage from "@/components/shared/footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {
        <SessionProvider session={pageProps.session}>
          <NavBar></NavBar>
          {/* getLayout( */}
          <Component {...pageProps} />
          <FooterPage></FooterPage>
        </SessionProvider>
      }
    </Provider>
  );
}
