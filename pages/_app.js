import App from "next/app";
import Layout from "../components/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout query={pageProps.query}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
