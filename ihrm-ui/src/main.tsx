import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux"
import { store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { ConfigProvider } from "antd"
import persistStore from "redux-persist/es/persistStore"

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2f54eb",
              fontFamily: "Poppins",
            },
          }}
        >
          {/* <ThemeProvider> */}
            <App />
          {/* </ThemeProvider> */}
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
