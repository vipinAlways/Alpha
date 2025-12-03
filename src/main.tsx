import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Nav from "./components/Nav.tsx";
import Faq from "./components/Faq.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-4/5 max-md:px-3 max-md:w-full mx-auto relative">
      <Nav />
      <main className="overflow-hen w-full relative h-full" >
         <Toaster />
        <App />
        <Faq />
      </main>
    </div>
  </StrictMode>
);
