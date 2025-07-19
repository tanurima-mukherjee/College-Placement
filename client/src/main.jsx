import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

// Create a query client instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
