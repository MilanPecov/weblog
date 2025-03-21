
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlogPost from "@/pages/BlogPost";
import BlogListPage from "@/pages/BlogListPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";

const BASENAME = import.meta.env.MODE === "production" ? "/weblog" : "/";

function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
