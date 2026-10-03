import { ToastContainer, Flip } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import { store, persistor } from "./store/store";

import AppRoutes from "./config/router";

import "react-toastify/dist/ReactToastify.css";
import AuthExpiryHandler from "./components/dataModals/AuthExpiryHandler";

// import { NotificationProvider } from "./context/NotificationContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <NotificationProvider> */}
            <AuthExpiryHandler />
            
              <AppRoutes />
            {/* </NotificationProvider> */}
          </PersistGate>
        </Provider>
      </QueryClientProvider>

      <ToastContainer
        stacked
        transition={Flip}
        position="top-right"
        autoClose={4000}
      />
    </div>
  );
}

export default App;
