import MainLayout from "../layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
