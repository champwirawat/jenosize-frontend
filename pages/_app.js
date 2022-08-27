import MainLayout from "../layouts/MainLayout";
import { wrapper } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Layout Component={Component}>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

const Layout = ({ Component, children }) => {
  if (Component.Layout) {
    return (
      <Layout Component={Component.Layout}>
        <Component.Layout>{children}</Component.Layout>
      </Layout>
    );
  } else {
    return <>{children}</>;
  }
};

export default wrapper.withRedux(MyApp);
