import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import Layout from "./Layout/Layout";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
