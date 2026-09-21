import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AppProvider } from './context/AppContext';
import Navbar from './app/Header';
import Sidebar from './app/Sidebar';
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
        <div className="app-body">
          <Sidebar />
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
                  <h2>404 — Page Not Found</h2>
                  <p>この页面は存在しません。 <a href="/">Go Home</a></p>
                </div>
              } />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  </AppProvider>
);

export default App;
