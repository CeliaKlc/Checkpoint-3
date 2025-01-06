import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import Layout from "@/components/layout";
import { BrowserRouter } from "react-router-dom";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter> {/* Ajout du Router ici */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

// Désactiver SSR si nécessaire
export default dynamic(() => Promise.resolve(App), { ssr: false });
