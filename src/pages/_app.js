// import "@/styles/globals.css";

import NavBar from "@/components/shared/navber";
import "../styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { SessionProvider } from "next-auth/react";

// import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <NavBar></NavBar>
      getLayout(
      <Component {...pageProps} />)
    </SessionProvider>
  );
}
