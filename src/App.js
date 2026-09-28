import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AppProvider } from './context/AppContext';
import Navbar from './app/Header';
import Footer from './app/Footer';
import Home from './components/Home';
import HiraganaPage from './pages/HiraganaPage';
import KatakanaPage from './pages/KatakanaPage';
import VocabularyPage from './pages/VocabularyPage';
import GrammarPage from './pages/GrammarPage';
import KanjiQuizPage from './pages/KanjiQuizPage';
import ExamPage from './pages/ExamPage';
import ListeningPage from './pages/ListeningPage';

const App = () => (
  <AppProvider>
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<HiraganaPage />} />
            <Route path="/katakana" element={<KatakanaPage />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/kanji-quiz" element={<KanjiQuizPage />} />
            <Route path="/exam" element={<ExamPage />} />
            <Route path="/listening" element={<ListeningPage />} />
            <Route path="*" element={
              <div className="not-found">
                <h2>404 — ページが見つかりません</h2>
                <p>The page you are looking for does not exist. <a href="/">Back to Home</a></p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AppProvider>
);

export default App;
