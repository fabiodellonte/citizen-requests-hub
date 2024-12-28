import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;