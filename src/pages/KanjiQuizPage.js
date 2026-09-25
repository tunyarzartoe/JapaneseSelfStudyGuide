import React, { useState, useMemo, useEffect } from 'react';
import { kanji } from '../data/kanji';
import { useApp } from '../context/AppContext';

const LEVELS = ['All', 'N5', 'N4', 'N3'];
const QUIZ_TYPES = [
  { id: 'meaning', label: 'Kanji → Meaning' },
  { id: 'reading', label: 'Kanji → Reading' },
];

const levelColors = { N5: '#27ae60', N4: '#2980b9', N3: '#8e44ad' };

const getOptions = (correct, allKanji, quizType) => {
  const field = quizType === 'meaning' ? 'meaning' : 'reading_kun';
  const pool = allKanji.filter(k => k[field] !== correct[field]);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  return [...shuffled, correct].sort(() => Math.random() - 0.5);
};

const KanjiQuizPage = () => {
  const { updateProgress } = useApp();
  const [level, setLevel] = useState('N5');
  const [quizType, setQuizType] = useState('meaning');
  const [started, setStarted] = useState(false);
  const [quizKanji, setQuizKanji] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const filteredKanji = useMemo(() => level === 'All' ? kanji : kanji.filter(k => k.level === level), [level]);

  const startQuiz = () => {
    const shuffled = [...filteredKanji].sort(() => Math.random() - 0.5);
    setQuizKanji(shuffled);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setWrongAnswers([]);
    setStarted(true);
  };

  const current = quizKanji[index];
  const options = useMemo(() => current ? getOptions(current, filteredKanji, quizType) : [], [current, filteredKanji, quizType]);

  const handleAnswer = (opt) => {
    if (selected) return;
    const field = quizType === 'meaning' ? 'meaning' : 'reading_kun';
    setSelected(opt[field]);
    const isCorrect = opt[field] === current[field];
    if (isCorrect) setScore(s => s + 1);
    else setWrongAnswers(w => [...w, { kanji: current, chosen: opt[field] }]);
  };

  const next = () => {
    if (index + 1 >= quizKanji.length) {
      setFinished(true);
      updateProgress('Kanji Quiz', score + (selected === current[quizType === 'meaning' ? 'meaning' : 'reading_kun'] ? 1 : 0), quizKanji.length);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  };

  const field = quizType === 'meaning' ? 'meaning' : 'reading_kun';

  if (!started) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h2>漢 Kanji Quiz</h2>
          <p className="page-subtitle">Test your kanji reading and meaning knowledge</p>
        </div>
        <div className="quiz-setup">
          <div className="setup-section">
            <h5>Choose Level:</h5>
            <div className="level-filter">
              {LEVELS.map(l => (
                <button key={l} className={`filter-btn ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}
                  style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}>
                  {l} {l !== 'All' && `(${kanji.filter(k=>k.level===l).length})`}
                </button>
              ))}
            </div>
          </div>
          <div className="setup-section">
            <h5>Quiz Type:</h5>
            <div className="level-filter">
              {QUIZ_TYPES.map(t => (
                <button key={t.id} className={`filter-btn ${quizType === t.id ? 'active' : ''}`} onClick={() => setQuizType(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="setup-info">
            <p>📚 {filteredKanji.length} kanji available for {level} level</p>
          </div>
          <button className="start-btn" onClick={startQuiz}>🎯 Start Quiz</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizKanji.length) * 100);
    return (
      <div className="page-container">
        <div className="result-container">
          <h3>🎉 Quiz Complete!</h3>
          <div className="result-score">{score} / {quizKanji.length}</div>
          <div className={`result-grade ${pct >= 80 ? 'pass' : 'fail'}`}>
            {pct >= 80 ? '✅ Pass' : '❌ Needs Review'} — {pct}%
          </div>
          <p>{pct === 100 ? '完璧！Perfect score!' : pct >= 70 ? 'よくできました！Great job!' : 'もっと練習しましょう！Keep practicing!'}</p>

          {wrongAnswers.length > 0 && (
            <div className="wrong-review">
              <h5>📖 Review Wrong Answers:</h5>
              {wrongAnswers.map((w, i) => (
                <div key={i} className="wrong-item">
                  <span className="wrong-kanji">{w.kanji.char}</span>
                  <span className="wrong-detail">
                    Correct: <strong>{w.kanji[field]}</strong> | You answered: <span className="wrong-chosen">{w.chosen}</span>
                  </span>
                  <div className="wrong-examples">{w.kanji.examples.join(' / ')}</div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button className="restart-btn" onClick={startQuiz}>🔄 Try Again</button>
            <button className="restart-btn secondary" onClick={() => setStarted(false)}>⚙️ Change Settings</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="quiz-container">
        <div className="quiz-progress">
          Question {index + 1} / {quizKanji.length} &nbsp;|&nbsp; Score: {score}
          <span className="level-tag" style={{ background: levelColors[current?.level] }}>{current?.level}</span>
        </div>
        <div className="quiz-card">
          <div className="quiz-char large-kanji">{current?.char}</div>
          <div className="kanji-meta">
            <span>Strokes: {current?.strokes}</span>
          </div>
          <p className="quiz-prompt">
            {quizType === 'meaning' ? 'What is the meaning of this kanji?' : 'What is the kun-yomi (reading) of this kanji?'}
          </p>
          <div className="quiz-options">
            {options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${selected ? (opt[field] === current[field] ? 'correct' : selected === opt[field] ? 'wrong' : 'dimmed') : ''}`}
                onClick={() => handleAnswer(opt)}
              >
                {opt[field]}
              </button>
            ))}
          </div>
          {selected && (
            <>
              <div className={`quiz-feedback ${selected === current[field] ? 'correct-fb' : 'wrong-fb'}`}>
                {selected === current[field] ? '✅ Correct!' : `❌ Correct answer: "${current[field]}"`}
              </div>
              <div className="kanji-reveal">
                <strong>On-yomi:</strong> {current?.reading_on} &nbsp; <strong>Kun-yomi:</strong> {current?.reading_kun}
                <div className="kanji-examples">
                  {current?.examples.map((ex, i) => <span key={i} className="kanji-ex-tag">{ex}</span>)}
                </div>
              </div>
              <button className="next-btn" onClick={next}>Next →</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanjiQuizPage;
