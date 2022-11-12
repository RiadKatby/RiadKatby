import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hi there, My name is Reda</title>
        <meta
          name="description"
          content="I'm Creative problem solver, Technology Advocate, and Evangelist in both fields of Software Development and Machine Learning."
        />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
      <article className="prose mx-auto p-8">
        <Component {...pageProps} />
      </article>
    </>
  );
}
