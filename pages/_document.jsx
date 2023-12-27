import { ColorModeScript, useColorModeValue } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { colors } from "../src/foundations/colors";
const whitenColor = colors.whiten.primary_100;
const darkenColor = colors.darken.primary_100;

const themeColor = whitenColor;

export default class MyDocument extends Document {
  render() {
    const { langValue, pageContext } = this.props;

    return (
      <Html lang={"tr"} prefix="og: http://ogp.me/ns#">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Manrope:wght@200&family=Open+Sans:ital,wght@1,300&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="1 days" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <meta name="theme-color" content={themeColor} />
          <meta name="language" content="Turkish" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
/*
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App {...props} />;
        },
    });
  const initialProps = await Document.getInitialProps(ctx);

  const { asPath } = ctx;

  const language = asPath.split("/")[1]; // İlk bölüm dil bölümü olacak

  let langValue = "";

  if (language === "tr" || language === "en") {
    langValue = language;
  }

  console.log("doc  asPath : " + language);

  return {
    ...initialProps,
    langValue,
  };
};
*/
