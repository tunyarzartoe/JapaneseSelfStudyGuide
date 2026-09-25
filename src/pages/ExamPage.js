import React, { useState, useEffect, useCallback } from 'react';
import { examSections } from '../data/exam';
import { useApp } from '../context/AppContext';

const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const ExamPage = () => {
  const { updateProgress } = useApp();
  const [phase, setPhase] = useState('intro'); // intro | exam | results
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timesUp, setTimesUp] = useState(false);
  const [allAnswers, setAllAnswers] = useState({});

  const section = examSections[sectionIdx];

  // Timer
  useEffect(() => {
    if (phase !== 'exam') return;
    setTimeLeft(section.timeLimit);
    setTimesUp(false);
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); setTimesUp(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, sectionIdx]);

  const handleAnswer = (qId, answer) => {
    if (timesUp) return;
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const submitSection = () => {
    setAllAnswers(prev => ({ ...prev, ...answers }));
    setAnswers({});
    if (sectionIdx + 1 < examSections.length) {
      setSectionIdx(s => s + 1);
    } else {
      finishExam({ ...allAnswers, ...answers });
    }
  };

  const finishExam = (finalAnswers) => {
    setAllAnswers(finalAnswers);
    setPhase('results');
    const totalQ = examSections.reduce((a, s) => a + s.questions.length, 0);
    const totalScore = examSections.reduce((a, s) =>
      a + s.questions.filter(q => finalAnswers[q.id] === q.answer).length, 0);
    updateProgress('Exam', totalScore, totalQ);
  };

  const restart = () => {
    setPhase('intro');
    setSectionIdx(0);
    setAnswers({});
    setAllAnswers({});
    setTimesUp(false);
  };

  // -- INTRO --
  if (phase === 'intro') {
    return (
      <div className="page-container">
        <div className="page-header">
          <h2>📋 試験練習 Exam Practice</h2>
          <p className="page-subtitle">Simulate a real JLPT-style exam with timed sections</p>
        </div>
        <div className="exam-intro">
          <div className="exam-intro-grid">
            {examSections.map((s, i) => (
              <div key={s.id} className="exam-section-card">
                <div className="exam-section-num">Section {i + 1}</div>
                <h5>{s.title}</h5>
                <p>{s.questions.length} questions</p>
                <p>⏱ {formatTime(s.timeLimit)}</p>
              </div>
            ))}
          </div>
          <div className="exam-rules">
            <h5>📋 Exam Rules</h5>
            <ul>
              <li>There are {examSections.length} sections: Vocabulary, Grammar, and Kanji.</li>
              <li>Each section is timed. Answer before time runs out!</li>
              <li>You cannot go back to a previous section.</li>
              <li>Your score and wrong answers will be shown at the end.</li>
            </ul>
          </div>
          <button className="start-btn large" onClick={() => { setSectionIdx(0); setPhase('exam'); }}>
            🚀 Start Exam
          </button>
        </div>
      </div>
    );
  }

  // -- RESULTS --
  if (phase === 'results') {
    const allQ = examSections.flatMap(s => s.questions);
    const totalCorrect = allQ.filter(q => allAnswers[q.id] === q.answer).length;
    const pct = Math.round((totalCorrect / allQ.length) * 100);
    const pass = pct >= 60;

    return (
      <div className="page-container">
        <div className="result-container">
          <h2>📊 Exam Results</h2>
          <div className="result-score">{totalCorrect} / {allQ.length}</div>
          <div className={`result-grade ${pass ? 'pass' : 'fail'}`}>
            {pass ? '✅ PASS' : '❌ FAIL'} — {pct}%
          </div>
          <p className="result-msg">{pct >= 80 ? '素晴らしい！Excellent!' : pct >= 60 ? 'よくできました！Good job!' : 'もっと勉強しましょう！Study more!'}</p>

          {/* Section breakdown */}
          <div className="result-sections">
            {examSections.map(s => {
              const correct = s.questions.filter(q => allAnswers[q.id] === q.answer).length;
              const sectionPct = Math.round((correct / s.questions.length) * 100);
              return (
                <div key={s.id} className="result-section-row">
                  <span className="rs-title">{s.title}</span>
                  <div className="rs-bar-wrap">
                    <div className="rs-bar-fill" style={{ width: `${sectionPct}%`, background: sectionPct >= 60 ? '#27ae60' : '#e74c3c' }}></div>
                  </div>
                  <span className="rs-score">{correct}/{s.questions.length} ({sectionPct}%)</span>
                </div>
              );
            })}
          </div>

          {/* Wrong answers review */}
          <div className="wrong-review">
            <h5>📖 Review Wrong Answers</h5>
            {allQ.filter(q => allAnswers[q.id] !== q.answer).map(q => (
              <div key={q.id} className="wrong-item">
                <div className="wrong-q">{q.question}</div>
                <div className="wrong-detail">
                  Your answer: <span className="wrong-chosen">{allAnswers[q.id] || '(no answer)'}</span> &nbsp;
                  Correct: <strong className="correct-ans">{q.answer}</strong>
                </div>
              </div>
            ))}
            {allQ.every(q => allAnswers[q.id] === q.answer) && <p>🎉 You got everything right!</p>}
          </div>

          <div className="result-actions">
            <button className="start-btn" onClick={restart}>🔄 Try Again</button>
          </div>
        </div>
      </div>
    );
  }

  // -- EXAM --
  const answered = section.questions.filter(q => answers[q.id]).length;
  const unanswered = section.questions.length - answered;

  return (
    <div className="page-container">
      <div className="exam-header-bar">
        <div className="exam-section-info">
          <span className="exam-step">Section {sectionIdx + 1} / {examSections.length}</span>
          <strong>{section.title}</strong>
        </div>
        <div className={`exam-timer ${timeLeft <= 30 ? 'danger' : timeLeft <= 60 ? 'warning' : ''}`}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      {timesUp && (
        <div className="time-up-banner">⏰ Time's up! Please submit this section.</div>
      )}

      <div className="exam-questions">
        {section.questions.map((q, i) => (
          <div key={q.id} className={`exam-question ${answers[q.id] ? 'answered' : ''}`}>
            <div className="eq-num">Q{i + 1}</div>
            <div className="eq-body">
              <p className="eq-text">{q.question}</p>
              <p className="eq-text-en">{q.questionEn}</p>
              <div className="eq-options">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    className={`eq-option ${answers[q.id] === opt ? 'selected' : ''}`}
                    onClick={() => handleAnswer(q.id, opt)}
                    disabled={timesUp}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="exam-footer">
        <span className="exam-answered">{answered} / {section.questions.length} answered</span>
        <button
          className="submit-btn"
          onClick={submitSection}
          disabled={!timesUp && unanswered > 0}
          title={unanswered > 0 && !timesUp ? `Answer all ${unanswered} remaining questions` : ''}
        >
          {sectionIdx + 1 < examSections.length ? 'Submit & Next Section →' : 'Submit Exam ✔'}
        </button>
        {unanswered > 0 && !timesUp && (
          <p className="exam-warning">⚠ {unanswered} question(s) unanswered</p>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
