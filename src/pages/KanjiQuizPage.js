import React, { useState, useMemo } from 'react';
import { kanji } from '../data/kanji';
import { useApp } from '../context/AppContext';

const LEVELS = ['All', 'N1', 'N2', 'N3', 'N4', 'N5'];
const QUIZ_TYPES = [
  { id: 'meaning', label: 'Kanji → Meaning' },
  { id: 'reading', label: 'Kanji → Reading (音・訓)' },
];

const levelColors = {
  N1: '#e11d48',
  N2: '#ea580c',
  N3: '#8b5cf6',
  N4: '#3b82f6',
  N5: '#10b981'
};

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const getTargetAnswer = (item, quizType) => {
  if (quizType === 'meaning') return item.meaning;
  // If kun-yomi exists, prefer kun-yomi, otherwise on-yomi
  return item.reading_kun || item.reading_on;
};

const getOptions = (correct, allKanji, quizType) => {
  const correctVal = getTargetAnswer(correct, quizType);
  const pool = allKanji.filter(k => getTargetAnswer(k, quizType) !== correctVal);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [...shuffled.map(k => getTargetAnswer(k, quizType)), correctVal];
  return options.sort(() => Math.random() - 0.5);
};

const KanjiQuizPage = () => {
  const { updateProgress } = useApp();
  const [level, setLevel] = useState('N1');
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
  const correctAnswer = current ? getTargetAnswer(current, quizType) : '';
  const options = useMemo(() => current ? getOptions(current, filteredKanji, quizType) : [], [current, filteredKanji, quizType]);

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt);
    const isCorrect = opt === correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setWrongAnswers(w => [...w, { kanji: current, chosen: opt, correct: correctAnswer }]);
    }
  };

  const next = () => {
    if (index + 1 >= quizKanji.length) {
      setFinished(true);
      updateProgress(`Kanji ${level} Quiz`, score + (selected === correctAnswer ? 1 : 0), quizKanji.length);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  };

  if (!started) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h2>漢 漢字クイズ Kanji Quiz</h2>
          <p className="page-subtitle">Master JLPT Kanji from N5 up to advanced N1 with interactive flash quizzes</p>
        </div>
        <div className="quiz-setup">
          <div className="setup-section">
            <h5>Choose JLPT Level:</h5>
            <div className="level-filter">
              {LEVELS.map(l => (
                <button
                  key={l}
                  className={`filter-btn ${level === l ? 'active' : ''}`}
                  onClick={() => setLevel(l)}
                  style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}
                >
                  {l} {l !== 'All' && `(${kanji.filter(k => k.level === l).length})`}
                </button>
              ))}
            </div>
          </div>
          <div className="setup-section">
            <h5>Quiz Mode:</h5>
            <div className="level-filter">
              {QUIZ_TYPES.map(t => (
                <button
                  key={t.id}
                  className={`filter-btn ${quizType === t.id ? 'active' : ''}`}
                  onClick={() => setQuizType(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="setup-info">
            <p>📚 <strong>{filteredKanji.length}</strong> kanji ready for {level} study</p>
          </div>
          <button
            className="start-btn"
            style={{ background: level !== 'All' ? levelColors[level] : undefined }}
            onClick={startQuiz}
          >
            🎯 Start {level} Kanji Quiz
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizKanji.length) * 100);
    return (
      <div className="page-container">
        <div className="result-container text-start">
          <div className="text-center mb-4">
            <h3>🎉 Quiz Complete!</h3>
            <div className="result-score">{score} / {quizKanji.length}</div>
            <div className={`result-grade ${pct >= 80 ? 'pass' : 'fail'}`}>
              {pct >= 80 ? '✅ Pass' : '❌ Needs Review'} — {pct}%
            </div>
            <p className="text-muted">
              {pct === 100 ? '完璧！ Perfect score!' : pct >= 70 ? 'よくできました！ Great job!' : 'もっと練習しましょう！ Keep practicing!'}
            </p>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="wrong-review">
              <h5>📖 Review Misidentified Kanji:</h5>
              {wrongAnswers.map((w, i) => (
                <div key={i} className="wrong-item">
                  <div className="d-flex align-items-center gap-2">
                    <span className="wrong-kanji">{w.kanji.char}</span>
                    <div>
                      <div className="wrong-detail">
                        Correct: <strong className="text-success">{w.correct}</strong> | Chosen: <span className="wrong-chosen">{w.chosen}</span>
                      </div>
                      <div className="small text-muted">
                        On: {w.kanji.reading_on} • Kun: {w.kanji.reading_kun}
                      </div>
                    </div>
                  </div>
                  <div className="wrong-examples mt-2">
                    {w.kanji.examples.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions justify-content-center mt-4">
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
          <span className="level-tag" style={{ background: levelColors[current?.level] }}>
            {current?.level}
          </span>
        </div>
        <div className="quiz-card">
          <div className="quiz-char large-kanji" onClick={() => speak(current?.char)} title="Click to hear audio">
            {current?.char} <span className="speak-hint">🔊</span>
          </div>
          <div className="kanji-meta">
            <span>Strokes: {current?.strokes}</span>
          </div>
          <p className="quiz-prompt">
            {quizType === 'meaning'
              ? 'What is the English meaning of this kanji?'
              : 'What is the standard reading of this kanji?'}
          </p>
          <div className="quiz-options">
            {options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${selected ? (opt === correctAnswer ? 'correct' : selected === opt ? 'wrong' : 'dimmed') : ''}`}
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {selected && (
            <>
              <div className={`quiz-feedback ${selected === correctAnswer ? 'correct-fb' : 'wrong-fb'}`}>
                {selected === correctAnswer ? '✅ 正解！ Correct!' : `❌ 正解: "${correctAnswer}"`}
              </div>
              <div className="kanji-reveal">
                <strong>On-yomi:</strong> {current?.reading_on || '-'} &nbsp;|&nbsp; <strong>Kun-yomi:</strong> {current?.reading_kun || '-'}
                <div className="kanji-examples mt-2">
                  {current?.examples.map((ex, i) => (
                    <span key={i} className="kanji-ex-tag" onClick={() => speak(ex.split(' ')[0])} style={{ cursor: 'pointer' }} title="Click to hear">
                      🔊 {ex}
                    </span>
                  ))}
                </div>
              </div>
              <button className="next-btn mt-3" onClick={next}>Next Question →</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanjiQuizPage;
