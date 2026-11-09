import React, { useState, useEffect, useMemo } from 'react';
import { jlptLevels, jlptLevelExams, oldPastQuestions } from '../data/exam';
import { useApp } from '../context/AppContext';

const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const ExamPage = () => {
  const { updateProgress } = useApp();
  
  // Navigation & Mode
  const [selectedLevel, setSelectedLevel] = useState('N1'); // N1 | N2 | N3 | N4 | N5
  const [examTab, setExamTab] = useState('mock'); // 'mock' | 'past'
  
  // Mock Exam State
  const [phase, setPhase] = useState('intro'); // 'intro' | 'exam' | 'results'
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timesUp, setTimesUp] = useState(false);
  const [allAnswers, setAllAnswers] = useState({});

  // Past Questions (過去問) State
  const [pastFilterCat, setPastFilterCat] = useState('All');
  const [pastAnswers, setPastAnswers] = useState({});
  const [pastRevealed, setPastRevealed] = useState({});
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // Active mock exam sections for chosen level
  const currentLevelSections = useMemo(() => {
    return jlptLevelExams[selectedLevel] || jlptLevelExams.N1;
  }, [selectedLevel]);

  const activeSection = currentLevelSections[sectionIdx] || currentLevelSections[0];

  // Timer for Mock Exam
  useEffect(() => {
    if (phase !== 'exam' || !activeSection) return;
    setTimeLeft(activeSection.timeLimit);
    setTimesUp(false);
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setTimesUp(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, sectionIdx, activeSection]);

  const handleMockAnswer = (qId, answer) => {
    if (timesUp) return;
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const submitSection = () => {
    const updatedAll = { ...allAnswers, ...answers };
    setAllAnswers(updatedAll);
    setAnswers({});
    if (sectionIdx + 1 < currentLevelSections.length) {
      setSectionIdx(s => s + 1);
    } else {
      finishExam(updatedAll);
    }
  };

  const finishExam = (finalAnswers) => {
    setAllAnswers(finalAnswers);
    setPhase('results');
    const totalQ = currentLevelSections.reduce((a, s) => a + s.questions.length, 0);
    const totalScore = currentLevelSections.reduce((a, s) =>
      a + s.questions.filter(q => finalAnswers[q.id] === q.answer).length, 0);
    updateProgress(`JLPT ${selectedLevel} Exam`, totalScore, totalQ);
  };

  const restartMock = () => {
    setPhase('intro');
    setSectionIdx(0);
    setAnswers({});
    setAllAnswers({});
    setTimesUp(false);
  };

  // Past Questions Filtering
  const filteredPastQuestions = useMemo(() => {
    return oldPastQuestions.filter(q => {
      const matchLevel = selectedLevel === 'All' || q.level === selectedLevel;
      const matchCat = pastFilterCat === 'All' || q.category === pastFilterCat;
      return matchLevel && matchCat;
    });
  }, [selectedLevel, pastFilterCat]);

  const handlePastAnswer = (qId, opt) => {
    setPastAnswers(prev => ({ ...prev, [qId]: opt }));
    setPastRevealed(prev => ({ ...prev, [qId]: true }));
  };

  const toggleBookmark = (qId) => {
    setBookmarkedIds(prev =>
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const levelInfo = jlptLevels.find(l => l.level === selectedLevel) || jlptLevels[0];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h2>📋 JLPT 試験＆過去問トレーニング</h2>
            <p className="page-subtitle">Authentic JLPT Mock Exams & Real Past Exam Questions with Explanations (N1–N5)</p>
          </div>
          <div className="exam-mode-pills">
            <button
              className={`mode-btn ${examTab === 'mock' ? 'active' : ''}`}
              onClick={() => { setExamTab('mock'); setPhase('intro'); }}
            >
              ⏱️ Timed Mock Exam (本試験形式)
            </button>
            <button
              className={`mode-btn ${examTab === 'past' ? 'active' : ''}`}
              onClick={() => setExamTab('past')}
            >
              📚 Past Questions Archive (過去問)
            </button>
          </div>
        </div>

        {/* Level Selector Tabs */}
        <div className="jlpt-level-bar mt-3">
          <span className="jlpt-bar-label">Target Level:</span>
          {jlptLevels.map(lvl => (
            <button
              key={lvl.level}
              className={`jlpt-level-tab ${selectedLevel === lvl.level ? 'active' : ''}`}
              style={{
                '--tab-color': lvl.badgeColor,
                backgroundColor: selectedLevel === lvl.level ? lvl.badgeColor : undefined,
                color: selectedLevel === lvl.level ? '#fff' : undefined,
                borderColor: selectedLevel === lvl.level ? lvl.badgeColor : undefined
              }}
              onClick={() => {
                setSelectedLevel(lvl.level);
                if (phase === 'exam') restartMock();
              }}
            >
              {lvl.level}
            </button>
          ))}
          {examTab === 'past' && (
            <button
              className={`jlpt-level-tab ${selectedLevel === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('All')}
            >
              All Levels
            </button>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: TIMED MOCK EXAM (本番模擬試験)                          */}
      {/* ============================================================== */}
      {examTab === 'mock' && (
        <>
          {/* Phase 1: Intro */}
          {phase === 'intro' && (
            <div className="exam-intro">
              <div className="exam-level-card mb-4" style={{ borderLeft: `6px solid ${levelInfo.badgeColor}` }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <h4 className="mb-0">{levelInfo.name}</h4>
                  <span className="badge-level" style={{ background: levelInfo.badgeColor }}>
                    Pass Criteria: {levelInfo.passScore}
                  </span>
                </div>
                <p className="text-muted mt-2 mb-0">{levelInfo.desc}</p>
              </div>

              <h5 className="mb-3">Exam Structure & Sections:</h5>
              <div className="exam-intro-grid">
                {currentLevelSections.map((s, i) => (
                  <div key={s.id} className="exam-section-card">
                    <div className="exam-section-num">Section {i + 1}</div>
                    <h5>{s.title}</h5>
                    <p>{s.questions.length} questions</p>
                    <p>⏱ {formatTime(s.timeLimit)}</p>
                  </div>
                ))}
              </div>

              <div className="exam-rules">
                <h5>📋 JLPT Simulation Rules</h5>
                <ul>
                  <li>Covers <strong>{currentLevelSections.length} sections</strong>: Vocabulary & Kanji, Grammar, and Reading Comprehension.</li>
                  <li>Strict countdown timer per section. Unanswered questions count as incorrect when time expires!</li>
                  <li>Passing threshold is calibrated according to standard JLPT score distribution.</li>
                  <li>Detailed Japanese & English explanations (解説) provided on the results screen.</li>
                </ul>
              </div>

              <button
                className="start-btn large"
                style={{ background: levelInfo.badgeColor }}
                onClick={() => {
                  setSectionIdx(0);
                  setPhase('exam');
                }}
              >
                🚀 Start {selectedLevel} Exam
              </button>
            </div>
          )}

          {/* Phase 2: Active Exam */}
          {phase === 'exam' && activeSection && (
            <div className="exam-running">
              {/* Exam Sticky Header Bar */}
              <div className="exam-header-bar">
                <div className="exam-section-info">
                  <span className="exam-step">
                    {selectedLevel} Exam • Section {sectionIdx + 1} / {currentLevelSections.length}
                  </span>
                  <h5 className="mb-0">{activeSection.title}</h5>
                </div>
                <div className={`exam-timer ${timeLeft < 60 ? (timeLeft < 30 ? 'danger' : 'warning') : ''}`}>
                  ⏱ {formatTime(timeLeft)}
                </div>
              </div>

              {timesUp && (
                <div className="time-up-banner">
                  ⏰ Time is up for this section! Please submit your answers below.
                </div>
              )}

              {/* Questions List */}
              <div className="exam-questions">
                {activeSection.questions.map((q, qIndex) => {
                  const answered = answers[q.id] !== undefined;
                  return (
                    <div key={q.id} className={`exam-question ${answered ? 'answered' : ''}`}>
                      <div className="eq-num">Q{qIndex + 1}</div>
                      <div className="eq-body">
                        {q.passage && (
                          <div className="eq-passage">
                            {q.passage}
                          </div>
                        )}
                        <div className="d-flex align-items-center gap-2">
                          <p className="eq-text mb-1">{q.question}</p>
                          <button
                            type="button"
                            className="audio-small-btn"
                            title="Hear question"
                            onClick={() => speak(q.passage || q.question)}
                          >
                            🔊
                          </button>
                        </div>
                        <p className="eq-text-en">{q.questionEn}</p>

                        <div className="eq-options">
                          {q.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              disabled={timesUp}
                              className={`eq-option ${answers[q.id] === opt ? 'selected' : ''}`}
                              onClick={() => handleMockAnswer(q.id, opt)}
                            >
                              <span className="eq-option-num">{oIdx + 1}.</span> {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="exam-footer">
                <span className="exam-answered">
                  Answered: {Object.keys(answers).length} / {activeSection.questions.length}
                </span>
                <button
                  className="submit-btn"
                  style={{ background: levelInfo.badgeColor }}
                  onClick={submitSection}
                >
                  {sectionIdx + 1 < currentLevelSections.length ? 'Submit & Next Section →' : 'Finish & View Score ✔'}
                </button>
              </div>
            </div>
          )}

          {/* Phase 3: Results */}
          {phase === 'results' && (
            <div className="result-container text-start">
              <div className="text-center mb-4">
                <h2>{selectedLevel} Exam Results</h2>
                {(() => {
                  const allQ = currentLevelSections.flatMap(s => s.questions);
                  const totalScore = allQ.filter(q => allAnswers[q.id] === q.answer).length;
                  const totalCount = allQ.length;
                  const pct = Math.round((totalScore / totalCount) * 100);
                  const pass = pct >= 60;
                  return (
                    <>
                      <div className="result-score">{totalScore} / {totalCount}</div>
                      <div className={`result-grade ${pass ? 'pass' : 'fail'}`}>
                        {pass ? '🎉 合格 PASSED!' : '❌ 不合格 DID NOT PASS'} ({pct}%)
                      </div>
                      <p className="result-msg">
                        {pass
                          ? '素晴らしい！ You met the JLPT score benchmark for this section!'
                          : 'もう一歩！ Review the questions and detailed explanations below to improve.'}
                      </p>
                    </>
                  );
                })()}
              </div>

              {/* Section Breakdown */}
              <h5 className="mb-3">Section Breakdown:</h5>
              <div className="result-sections mb-4">
                {currentLevelSections.map(s => {
                  const secCorrect = s.questions.filter(q => allAnswers[q.id] === q.answer).length;
                  const secTotal = s.questions.length;
                  const secPct = Math.round((secCorrect / secTotal) * 100);
                  return (
                    <div key={s.id} className="result-section-row">
                      <span className="rs-title">{s.titleEn}</span>
                      <div className="rs-bar-wrap">
                        <div
                          className="rs-bar-fill"
                          style={{
                            width: `${secPct}%`,
                            background: secPct >= 60 ? '#10b981' : '#f43f5e'
                          }}
                        />
                      </div>
                      <span className="rs-score">{secCorrect}/{secTotal} ({secPct}%)</span>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Review & Explanations */}
              <h5 className="mb-3">Comprehensive Review & Explanations (解説):</h5>
              <div className="review-list">
                {currentLevelSections.flatMap(s => s.questions).map((q, idx) => {
                  const userAns = allAnswers[q.id];
                  const isCorrect = userAns === q.answer;
                  return (
                    <div key={q.id} className={`review-card ${isCorrect ? 'correct-border' : 'wrong-border'} mb-3`}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold">Q{idx + 1}. {q.question}</span>
                        <span className={`badge ${isCorrect ? 'bg-success' : 'bg-danger'}`}>
                          {isCorrect ? 'Correct ✅' : 'Incorrect ❌'}
                        </span>
                      </div>
                      <p className="text-muted small mb-2">{q.questionEn}</p>
                      <div className="small mb-2">
                        <span>Your Answer: <strong>{userAns || '(Unanswered)'}</strong></span>
                        {!isCorrect && (
                          <span className="ms-3 text-success">Correct Answer: <strong>{q.answer}</strong></span>
                        )}
                      </div>
                      {q.explanation && (
                        <div className="explanation-box">
                          💡 <strong>解説 Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-4">
                <button className="restart-btn" onClick={restartMock}>
                  🔄 Try Another Exam
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ============================================================== */}
      {/* TAB 2: PAST QUESTIONS ARCHIVE (過去問トレーニング)             */}
      {/* ============================================================== */}
      {examTab === 'past' && (
        <div className="past-questions-view">
          {/* Filter Bar */}
          <div className="filter-bar justify-content-between align-items-center flex-wrap mb-4">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <span className="fw-bold text-muted small">Category:</span>
              {['All', '文字・語彙', '文法', '読解'].map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${pastFilterCat === cat ? 'active' : ''}`}
                  onClick={() => setPastFilterCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-muted small">
              Found <strong>{filteredPastQuestions.length}</strong> real exam questions
            </div>
          </div>

          {/* Past Questions Grid */}
          <div className="past-questions-list">
            {filteredPastQuestions.map((pq, idx) => {
              const selectedOpt = pastAnswers[pq.id];
              const isRevealed = pastRevealed[pq.id];
              const isCorrect = selectedOpt === pq.answer;
              const isBookmarked = bookmarkedIds.includes(pq.id);

              return (
                <div key={pq.id} className="past-question-card mb-4">
                  <div className="pq-header">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge-level" style={{ background: jlptLevels.find(l => l.level === pq.level)?.badgeColor || '#6366f1' }}>
                        {pq.level}
                      </span>
                      <span className="pq-year">{pq.year}</span>
                      <span className="pq-category">{pq.category}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="audio-small-btn"
                        title="Hear Japanese audio"
                        onClick={() => speak(pq.passage || pq.question)}
                      >
                        🔊 Listen
                      </button>
                      <button
                        className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark for later'}
                        onClick={() => toggleBookmark(pq.id)}
                      >
                        {isBookmarked ? '★ Saved' : '☆ Save'}
                      </button>
                    </div>
                  </div>

                  {/* Reading Passage if available */}
                  {pq.passage && (
                    <div className="eq-passage mt-3">
                      {pq.passage}
                    </div>
                  )}

                  {/* Question */}
                  <h5 className="pq-question-text mt-3">{idx + 1}. {pq.question}</h5>
                  <p className="pq-question-en text-muted small">{pq.questionEn}</p>

                  {/* Options */}
                  <div className="pq-options-grid mt-3">
                    {pq.options.map((opt, oIdx) => {
                      let btnClass = 'pq-opt-btn';
                      if (isRevealed) {
                        if (opt === pq.answer) btnClass += ' correct';
                        else if (selectedOpt === opt) btnClass += ' wrong';
                        else btnClass += ' dimmed';
                      } else if (selectedOpt === opt) {
                        btnClass += ' selected';
                      }

                      return (
                        <button
                          key={oIdx}
                          className={btnClass}
                          onClick={() => handlePastAnswer(pq.id, opt)}
                        >
                          <span className="pq-opt-num">{oIdx + 1}</span> {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Instant Explanation Box */}
                  {isRevealed && (
                    <div className={`pq-explanation mt-3 ${isCorrect ? 'correct-exp' : 'wrong-exp'}`}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="fw-bold">{isCorrect ? '✅ 正解！ Correct!' : '❌ 不正解... Incorrect'}</span>
                        <span className="small text-muted">(Correct: <strong>{pq.answer}</strong>)</span>
                      </div>
                      <p className="mb-0">{pq.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
