import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* All Pages */}
      <AppRoutes />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "14px",
            background: "#18181b",
            color: "#ffffff",
            fontWeight: "600",
            padding: "14px 18px",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
