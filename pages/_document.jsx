import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Empower your server's economy! Manage currency, rewards, and engage users in a thriving virtual marketplace. Start building wealth today!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Coinopolis" />
          <meta name="twitter:creator" content="@Coinopolis" />
          <meta property="og:url" content="https://coinopolis.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Coinopolis" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Empower your server's economy! Manage currency, rewards, and engage users in a thriving virtual marketplace. Start building wealth today!"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Coinopolis" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Coinopolis"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
