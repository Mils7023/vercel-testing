import client from "@/src/apollo/client";
import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/style/style.css"
import "../src/style/e-Com.css"
import "../src/style/contactUs.css"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
