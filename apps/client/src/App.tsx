import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import ArticlesGrid from './components/ArticlesGrid';
import ArticlePage from './components/ArticlePage';
import Home from "./components/Home";
import Analytics from "./components/Analytics";

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<ArticlesGrid />} />
        <Route path="/library/:_id" element={<ArticlePage />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </>
  )
}

export default App
