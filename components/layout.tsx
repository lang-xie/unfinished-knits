import Header from "./header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
