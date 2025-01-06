import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Désactiver SSR si nécessaire
export default dynamic(() => Promise.resolve(App), { ssr: false });
