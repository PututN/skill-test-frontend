import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { toDoApi } from "../redux/services/apiSlice";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApiProvider api={toDoApi}>
        <Component {...pageProps} />
      </ApiProvider>
    </Provider>
  );
}
