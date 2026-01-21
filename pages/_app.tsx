import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";

import { SourceText } from "../components/SourceText";

import 'katex/dist/katex.min.css'

const components = {
  SourceText,
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Detect if current page is an Arabic page
  const arabicPages = ["/ArabicPaperReviews", "/DeTr", "/Transformer", "/ImageNet", "/GeoSAM"];
  const isArabicPage = arabicPages.includes(router.pathname);

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
      <MDXProvider components={components}>
        <article
          className="prose mx-auto p-8 max-w-4xl"
          dir={isArabicPage ? "rtl" : "ltr"}
        >
          <Component {...pageProps} />
        </article>
      </MDXProvider>
    </>
  );
}
