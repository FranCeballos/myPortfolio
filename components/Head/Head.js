import Head from "next/head";
import Script from "next/script";

function HeadComponent(props) {
  const { title, description } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          defer
          type="text/javascript"
        />
      </Head>
    </>
  );
}

export default HeadComponent;
