import React, { useState, useMemo } from 'react';
import { hiragana, hiraganaGroups } from '../data/hiragana';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  }
};

const getRandomOptions = (correct, allChars) => {
  const pool = allChars.filter(c => c.romaji !== correct.romaji);
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  return [...shuffled, correct].sort(() => Math.random() - 0.5);
};

const HiraganaPage = () => {
  const [mode, setMode] = useState('chart'); // 'chart' | 'quiz'
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const filteredChars = useMemo(() => {
    if (selectedGroup === 'All') return hiragana;
    const group = hiraganaGroups.find(g => g.label === selectedGroup);
    return hiragana.filter(c => group?.chars.includes(c.char));
  }, [selectedGroup]);

  const quizChars = useMemo(() => [...filteredChars].sort(() => Math.random() - 0.5), [filteredChars]);
  const current = quizChars[quizIndex];
  const options = useMemo(() => current ? getRandomOptions(current, filteredChars) : [], [current, filteredChars]);

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt.romaji);
    setTotal(t => t + 1);
    if (opt.romaji === current.romaji) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (quizIndex + 1 >= quizChars.length) {
      setShowResult(true);
    } else {
      setQuizIndex(i => i + 1);
      setSelected(null);
    }
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setTotal(0);
    setShowResult(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>ひらがな Hiragana</h2>
        <p className="page-subtitle">The basic Japanese syllabary — master all 46+ characters</p>
        <div className="mode-toggle">
          <button className={`mode-btn ${mode === 'chart' ? 'active' : ''}`} onClick={() => setMode('chart')}>📊 Chart</button>
          <button className={`mode-btn ${mode === 'quiz' ? 'active' : ''}`} onClick={() => { setMode('quiz'); restartQuiz(); }}>🎯 Quiz</button>
        </div>
      </div>

      {mode === 'chart' && (
        <>
          <div className="group-filter">
            <button className={`filter-btn ${selectedGroup === 'All' ? 'active' : ''}`} onClick={() => setSelectedGroup('All')}>All</button>
            {hiraganaGroups.map(g => (
              <button key={g.label} className={`filter-btn ${selectedGroup === g.label ? 'active' : ''}`} onClick={() => setSelectedGroup(g.label)}>{g.chars[0]}</button>
            ))}
          </div>
          <div className="kana-grid">
            {filteredChars.map((c) => (
              <div key={c.char} className="kana-card" onClick={() => speak(c.char)}>
                <div className="kana-char">{c.char}</div>
                <div className="kana-romaji">{c.romaji}</div>
                <div className="kana-sound">🔊</div>
              </div>
            ))}
          </div>
          <p className="kana-tip">💡 Click any card to hear the pronunciation!</p>
        </>
      )}

      {mode === 'quiz' && !showResult && current && (
        <div className="quiz-container">
          <div className="quiz-progress">Question {quizIndex + 1} / {quizChars.length} &nbsp;|&nbsp; Score: {score}</div>
          <div className="quiz-card">
            <div className="quiz-char large-kana" onClick={() => speak(current.char)}>{current.char} <span className="speak-hint">🔊</span></div>
            <p className="quiz-prompt">What is the romaji for this character?</p>
            <div className="quiz-options">
              {options.map(opt => (
                <button
                  key={opt.romaji}
                  className={`quiz-option ${selected ? (opt.romaji === current.romaji ? 'correct' : selected === opt.romaji ? 'wrong' : 'dimmed') : ''}`}
                  onClick={() => handleAnswer(opt)}
                >
                  {opt.romaji}
                </button>
              ))}
            </div>
            {selected && (
              <div className={`quiz-feedback ${selected === current.romaji ? 'correct-fb' : 'wrong-fb'}`}>
                {selected === current.romaji ? '✅ Correct!' : `❌ Wrong! It's "${current.romaji}"`}
                <button className="next-btn" onClick={nextQuestion}>Next →</button>
              </div>
            )}
          </div>
        </div>
      )}

      {mode === 'quiz' && showResult && (
        <div className="result-container">
          <h3>🎉 Quiz Complete!</h3>
          <div className="result-score">{score} / {total}</div>
          <p>{score === total ? '完璧！Perfect score!' : score >= total * 0.7 ? 'よくできました！ Great job!' : 'もっと練習しましょう！ Keep practicing!'}</p>
          <button className="restart-btn" onClick={restartQuiz}>🔄 Try Again</button>
        </div>
      )}
    </div>
  );
};

export default HiraganaPage;
