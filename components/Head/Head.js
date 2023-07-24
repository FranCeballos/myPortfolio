import Head from "next/head";
import Script from "next/script";

function HeadComponent(props) {
  const { title, description } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
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
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
      </Head>
    </>
  );
}

export default HeadComponent;
