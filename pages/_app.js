import NavBarLayout from "@/components/UI/NavBarLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NavBarLayout>
      <Component {...pageProps} />
    </NavBarLayout>
  );
}
