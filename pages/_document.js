import {Html, Head, Main, NextScript} from "next/document";

const themeInitializerScript = `
       (function () {
         document.body.dataset.theme = window.localStorage.getItem("theme") || "light";
       })();
   `;

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{__html: themeInitializerScript}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
