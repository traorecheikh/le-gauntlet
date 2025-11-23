import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Activity, 
  ShieldAlert, 
  Skull, 
  Trophy, 
  ChevronRight, 
  RefreshCw,
  Heart,
  HeartCrack,
  Code2,
  Binary,
  Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  TRACKS, 
  type TrackId, 
  type Question, 
  INSULTS,
  TIER_1_INSULTS,
  PRAISE, 
  RANKS,
  type Track
} from './data/questions';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// --- Types ---
type GameState = 'MENU' | 'PLAYING' | 'FEEDBACK' | 'GAME_OVER';

interface GameSession {
  trackId: TrackId;
  score: number;
  lives: number;
  maxLives: number;
  questions: Question[];
  currentIndex: number;
  history: {
    questionId: string;
    correct: boolean;
  }[];
}

// --- Constants ---
const TIERS_CONFIG = {
  1: { count: 5, multiplier: 10, color: 'text-cyber-neonBlue' }, // Reduced counts for demo purposes, typically 20
  2: { count: 5, multiplier: 20, color: 'text-yellow-400' },
  3: { count: 5, multiplier: 50, color: 'text-orange-500' },
  4: { count: 5, multiplier: 100, color: 'text-cyber-neonRed' },
};

const TIME_LIMITS = {
  LOW: 60, // Tier 1 & 2
  HIGH: 120 // Tier 3 & 4
};

// --- Components ---

const Button = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className, 
  disabled 
}: { 
  onClick: () => void; 
  children: React.ReactNode; 
  variant?: 'primary' | 'danger' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
}) => {
  const variants = {
    primary: 'bg-cyber-neonGreen text-cyber-black hover:bg-green-400 border-transparent',
    danger: 'bg-cyber-neonRed text-white hover:bg-red-600 border-transparent',
    outline: 'bg-transparent border-cyber-neonGreen text-cyber-neonGreen hover:bg-cyber-neonGreen/10',
    ghost: 'bg-transparent border-cyber-gray text-cyber-muted hover:text-cyber-text'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider border transition-all duration-200 flex items-center justify-center gap-2",
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed grayscale",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = Math.min(100, (current / total) * 100);
  return (
    <div className="w-full h-1 bg-cyber-gray overflow-hidden relative">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="h-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff41]"
      />
    </div>
  );
};

const LifeBar = ({ lives, maxLives }: { lives: number; maxLives: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxLives }).map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ 
            scale: i < lives ? 1 : 0.8,
            opacity: i < lives ? 1 : 0.3
          }}
        >
          {i < lives ? (
            <Heart className="w-5 h-5 text-cyber-neonRed fill-cyber-neonRed drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]" />
          ) : (
            <HeartCrack className="w-5 h-5 text-cyber-gray" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [session, setSession] = useState<GameSession | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [lastResult, setLastResult] = useState<{ correct: boolean; question: Question; timeOut?: boolean } | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const [showExitModal, setShowExitModal] = useState(false);

  // Audio placeholders (browser policies prevent auto-play often, visuals are safer)
  
  const startSession = (trackId: TrackId) => {
    const track = TRACKS[trackId];
    
    // Build the Gauntlet: Shuffle and pick questions per tier
    // Note: In a real app with 80 questions, we'd pick 20 per tier.
    // Here we use what we have in the dummy data.
    let pool: Question[] = [];
    
    [1, 2, 3, 4].forEach(tier => {
      const tierQuestions = track.questions.filter(q => q.tier === tier);
      pool = [...pool, ...shuffle(tierQuestions)]; // Take all available for now, or limit with .slice(0, count)
    });

    setSession({
      trackId,
      score: 0,
      lives: 5,
      maxLives: 5,
      questions: pool,
      currentIndex: 0,
      history: []
    });
    setGameState('PLAYING');
  };

  // Timer Logic
  useEffect(() => {
    if (gameState !== 'PLAYING' || !session || showExitModal) return; // Pause timer if modal open

    // const currentQuestion = session.questions[session.currentIndex];
    // const limit = (currentQuestion.tier === 1 || currentQuestion.tier === 2) 
    //   ? TIME_LIMITS.LOW 
    //   : TIME_LIMITS.HIGH;
    
    // Only reset time if it's a new question (we need to track this better in real app, 
    // but for now let's assume timeLeft is managed by state updates on nextQuestion)
    // Actually, let's reset timeLeft in nextQuestion/startSession to be safe.
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session?.currentIndex, gameState, showExitModal]); // Added showExitModal dependency

  // Initialize timer on new question
  useEffect(() => {
      if (session) {
          const currentQuestion = session.questions[session.currentIndex];
          const limit = (currentQuestion.tier === 1 || currentQuestion.tier === 2) 
            ? TIME_LIMITS.LOW 
            : TIME_LIMITS.HIGH;
          setTimeLeft(limit);
      }
  }, [session?.currentIndex]);


  const handleTimeOut = () => {
    if (!session) return;
    const currentQuestion = session.questions[session.currentIndex];
    
    setLastResult({ correct: false, question: currentQuestion, timeOut: true });
    setGameState('FEEDBACK');
  };

  const handleAnswer = (optionIndex: number) => {
    if (!session) return;
    setSelectedOption(optionIndex);
    
    const currentQuestion = session.questions[session.currentIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    // Update Session State roughly, committed after feedback
    setLastResult({ correct: isCorrect, question: currentQuestion });
    
    // Small delay for "processing" effect
    setTimeout(() => {
      setGameState('FEEDBACK');
    }, 400);
  };

  const nextQuestion = () => {
    if (!session || !lastResult) return;
    
    const newLives = lastResult.correct ? session.lives : session.lives - 1;
    const newScore = session.score + (lastResult.correct ? TIERS_CONFIG[lastResult.question.tier as keyof typeof TIERS_CONFIG].multiplier : 0);
    
    if (newLives <= 0) {
      setSession({ ...session, lives: 0, score: newScore });
      setGameState('GAME_OVER');
      return;
    }
    
    if (session.currentIndex >= session.questions.length - 1) {
      setSession({ ...session, lives: newLives, score: newScore });
      setGameState('GAME_OVER'); // Victory basically
      return;
    }

    setSession({
      ...session,
      score: newScore,
      lives: newLives,
      currentIndex: session.currentIndex + 1,
      history: [...session.history, { questionId: lastResult.question.id, correct: lastResult.correct }]
    });
    setSelectedOption(null);
    setLastResult(null);
    setGameState('PLAYING');
  };

  const handleExit = () => {
      setShowExitModal(true);
  };

  const confirmExit = () => {
      setShowExitModal(false);
      setSession(null);
      setGameState('MENU');
  };

  // --- Render Helpers ---

  const renderModal = () => {
      if (!showExitModal) return null;
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full border border-cyber-neonRed bg-cyber-black p-6 shadow-[0_0_20px_rgba(255,0,60,0.3)] space-y-6"
            >
                <div className="flex items-center gap-3 text-cyber-neonRed">
                    <ShieldAlert className="w-8 h-8" />
                    <h3 className="text-xl font-bold font-mono uppercase">Alerte Système</h3>
                </div>
                <p className="text-cyber-text font-mono">
                    Abandonner la session en cours ?<br/>
                    <span className="text-cyber-muted text-sm">Toute progression sera perdue définitivement.</span>
                </p>
                <div className="flex justify-end gap-4 pt-4">
                    <Button onClick={() => setShowExitModal(false)} variant="ghost">Annuler</Button>
                    <Button onClick={confirmExit} variant="danger">CONFIRMER_ABANDON()</Button>
                </div>
            </motion.div>
        </div>
      );
  };

  const renderMenu = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl w-full mx-auto p-6 space-y-12"
    >
      <div className="text-center space-y-4">
        <motion.div 
          initial={{ scale: 0.9 }} animate={{ scale: 1 }} 
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="inline-block"
        >
          <ShieldAlert className="w-20 h-20 text-cyber-neonRed mx-auto mb-4" />
        </motion.div>
        <h1 className="text-6xl font-mono font-black tracking-tighter text-white uppercase glitched-text">
          Le <span className="text-cyber-neonRed">Gauntlet</span>
        </h1>
        <p className="text-cyber-muted text-xl font-mono max-w-2xl mx-auto">
          Évaluation de compétences développeur. Brutale. Honnête. Impitoyable.
          <br/>
          <span className="text-cyber-neonBlue text-sm mt-2 block">v2.5.0-RELEASE // AUTH_REQUIRED</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {(Object.values(TRACKS) as Track[]).map((track) => (
          <motion.div
            key={track.id}
            whileHover={{ scale: 1.02, borderColor: '#00ff41' }}
            className="border border-cyber-gray bg-cyber-gray/20 p-8 cursor-pointer group relative overflow-hidden"
            onClick={() => startSession(track.id)}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-gray group-hover:bg-cyber-neonGreen transition-colors" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {track.id === 'data_science' ? <Binary className="w-8 h-8 text-cyber-neonBlue" /> : <Code2 className="w-8 h-8 text-cyber-neonBlue" />}
                <ChevronRight className="text-cyber-muted group-hover:text-cyber-neonGreen transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-mono text-white">{track.name}</h3>
              <p className="text-cyber-muted text-sm h-12">{track.description}</p>
              <div className="pt-4 flex gap-2 text-xs font-mono text-cyber-text/50 uppercase">
                <span>80 Questions</span>
                <span>•</span>
                <span>4 Niveaux</span>
                <span>•</span>
                <span>Mort Subite</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderGame = () => {
    if (!session) return null;
    const question = session.questions[session.currentIndex];
    const tierInfo = TIERS_CONFIG[question.tier as keyof typeof TIERS_CONFIG];
    
    const maxTime = (question.tier === 1 || question.tier === 2) ? TIME_LIMITS.LOW : TIME_LIMITS.HIGH;
    const timePercentage = (timeLeft / maxTime) * 100;
    const isLowTime = timeLeft <= 5;

    // Calculate live stats
    const answeredCount = session.history.length;
    const correctCount = session.history.filter(h => h.correct).length;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 100;

    return (
      <div className="max-w-3xl w-full mx-auto h-full flex flex-col">
        {/* HUD */}
        <header className="border-b border-cyber-gray bg-cyber-black/90 p-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Button onClick={handleExit} variant="ghost" className="px-2 py-1 h-8 border-cyber-gray text-xs">
                ← QUITTER
            </Button>
            <div className="hidden md:flex items-center gap-4">
                <span className="font-mono font-bold text-cyber-neonBlue uppercase tracking-widest text-sm">
                {TRACKS[session.trackId].name}
                </span>
                <span className="h-4 w-px bg-cyber-gray" />
                <span className={cn("font-mono text-xs px-2 py-0.5 border rounded", tierInfo.color, "border-current")}>
                TIER {question.tier}
                </span>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
             <span className="text-xs font-mono text-cyber-muted mb-1">Vies</span>
             <LifeBar lives={session.lives} maxLives={session.maxLives} />
          </div>

          <div className="text-right flex flex-col items-end">
             <div className="font-mono font-bold text-xl text-white">{session.score.toString().padStart(5, '0')}</div>
             <div className="text-[10px] font-mono text-cyber-muted flex gap-2">
                 <span>PRÉCISION: <span className={accuracy > 80 ? "text-cyber-neonGreen" : accuracy > 50 ? "text-yellow-500" : "text-cyber-neonRed"}>{accuracy}%</span></span>
             </div>
          </div>
        </header>

        <ProgressBar current={session.currentIndex} total={session.questions.length} />

        {/* Timer Warning */}
        <div className="w-full bg-cyber-black relative h-1">
             <motion.div 
                className={cn("h-full absolute top-0 left-0 transition-colors", isLowTime ? "bg-cyber-neonRed" : "bg-cyber-neonBlue")}
                initial={{ width: "100%" }}
                animate={{ width: `${timePercentage}%` }}
                transition={{ ease: "linear", duration: 1 }}
             />
        </div>

        {/* Arena */}
        <main className="flex-1 p-6 md:p-12 flex flex-col justify-center relative">
          {/* Floating Timer */}
          <div className={cn(
              "absolute top-4 right-4 font-mono text-2xl font-bold flex items-center gap-2",
              isLowTime ? "text-cyber-neonRed animate-pulse" : "text-cyber-muted"
          )}>
              <Timer className="w-5 h-5" />
              {timeLeft.toString().padStart(2, '0')}s
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="font-mono text-cyber-neonGreen/50 text-xs">
                   QUERY_ID: {question.id.toUpperCase()}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                  {question.text}
                </h2>
              </div>

              <div className="grid gap-4">
                {question.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ x: 4 }}
                    onClick={() => handleAnswer(idx)}
                    className={cn(
                      "w-full text-left p-4 md:p-6 border bg-cyber-gray/10 hover:bg-cyber-gray/30 transition-colors font-mono text-sm md:text-base flex items-start gap-4 group",
                      selectedOption === idx ? "border-cyber-neonBlue bg-cyber-neonBlue/10" : "border-cyber-gray"
                    )}
                  >
                    <span className={cn(
                      "flex-shrink-0 w-6 h-6 flex items-center justify-center border text-xs transition-colors",
                      selectedOption === idx ? "border-cyber-neonBlue text-cyber-neonBlue" : "border-cyber-muted text-cyber-muted group-hover:border-white group-hover:text-white"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-cyber-text group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
        {renderModal()}
      </div>
    );
  };

  const renderFeedback = () => {
    if (!lastResult) return null;
    const { correct, question, timeOut } = lastResult;

    // Logic for brutal insults on low tier failure
    const isLowTierFail = !correct && question.tier === 1;
    const insult = isLowTierFail 
        ? TIER_1_INSULTS[Math.floor(Math.random() * TIER_1_INSULTS.length)] 
        : "Segmentation Fault. Core Dumped.";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={cn(
            "max-w-2xl w-full border-2 bg-cyber-black p-1 shadow-2xl",
            correct ? "border-cyber-neonGreen shadow-cyber-neonGreen/20" : "border-cyber-neonRed shadow-cyber-neonRed/20"
          )}
        >
          <div className="p-8 space-y-6 relative overflow-hidden">
            {/* Background noise/texture */}
            <div className={cn(
              "absolute top-0 left-0 w-full h-2",
              correct ? "bg-cyber-neonGreen" : "bg-cyber-neonRed"
            )} />

            <div className="flex items-center gap-4 mb-2">
              {correct ? (
                <Activity className="w-12 h-12 text-cyber-neonGreen" />
              ) : (
                <Skull className="w-12 h-12 text-cyber-neonRed" />
              )}
              <div>
                <h3 className={cn("text-3xl font-black uppercase tracking-tighter", correct ? "text-cyber-neonGreen" : "text-cyber-neonRed")}>
                  {correct ? "Succès" : (timeOut ? "TEMPS ÉCOULÉ" : "Échec Critique")}
                </h3>
                <p className="font-mono text-sm text-cyber-muted uppercase">
                  {correct ? "Code compilé avec succès." : insult}
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-cyber-gray pt-6">
              <div className="font-mono text-lg text-white font-bold">
                Analyse :
              </div>
              <p className="text-cyber-text leading-relaxed">
                {question.explanation}
              </p>
            </div>

            <div className="pt-8 flex justify-end">
              <Button onClick={nextQuestion} variant={correct ? 'primary' : 'danger'}>
                CONTINUER_EXECUTION()
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderGameOver = () => {
    if (!session) return null;
    
    // Calculate Rank based on percentage
    // const maxScore = session.questions.reduce((acc, q) => acc + TIERS_CONFIG[q.tier as keyof typeof TIERS_CONFIG].multiplier, 0);
    // Real score calculation needs to track max possible score of *played* questions, 
    // but for this prototype we approximate ratio based on questions answered.
    // A better ratio is score / (questions_seen * avg_points)
    
    // Let's use a simple accuracy ratio on answered questions for the rank title
    // const answeredCount = session.currentIndex; // Questions actually faced
    const maxPossibleSoFar = session.history.reduce((acc, h) => {
        const q = session.questions.find(q => q.id === h.questionId);
        return acc + (q ? TIERS_CONFIG[q.tier as keyof typeof TIERS_CONFIG].multiplier : 0);
    }, 0);

    const ratio = maxPossibleSoFar > 0 ? session.score / maxPossibleSoFar : 0;

    // Calculate absolute progression based on max Tier reached
    // Logic:
    // Tier 1 Fail -> Rank 0-2
    // Tier 1 Pass -> Rank 3-4 (Junior)
    // Tier 2 Pass -> Rank 5-6 (Mid)
    // Tier 3 Pass -> Rank 7-8 (Senior/Lead)
    // Tier 4 Pass -> Rank 9 (God)
    
    const maxTierReached = session.history.reduce((max, h) => {
        const q = session.questions.find(q => q.id === h.questionId);
        if (q && h.correct) return Math.max(max, q.tier);
        return max;
    }, 0);

    // Did we FAIL the session (lives = 0) or FINISH it?
    const isGameClear = session.lives > 0;

    let rankIndex = 0;
    let style = "text-cyber-muted";

    if (maxTierReached === 4 && isGameClear) {
        // God Tier (Beat Tier 4)
        rankIndex = 9;
    } else if (maxTierReached === 4) {
        // Failed IN Tier 4 (So passed Tier 3)
        rankIndex = 8; 
    } else if (maxTierReached === 3) {
        // Failed IN Tier 3 (So passed Tier 2)
        rankIndex = isGameClear ? 7 : 6;
    } else if (maxTierReached === 2) {
        // Failed IN Tier 2 (So passed Tier 1)
        rankIndex = isGameClear ? 5 : 4; 
    } else {
        // Failed IN Tier 1 (Never answered a Tier 2 question correctly)
        // Map ratio 0-100% to ranks 0-3
        if (ratio > 0.8) rankIndex = 3; // Junior en sursis (Good accuracy but died)
        else if (ratio > 0.5) rankIndex = 2; // Stagiaire
        else if (ratio > 0.2) rankIndex = 1; // Touriste
        else rankIndex = 0; // Abandonne
    }

    const rankTitle = RANKS[rankIndex as keyof typeof RANKS];

    // Color mapping
    if (rankIndex >= 8) style = "text-purple-400"; // God Tier
    else if (rankIndex >= 6) style = "text-cyber-neonBlue"; // Senior/Lead
    else if (rankIndex >= 4) style = "text-cyber-neonGreen"; // Mid/Junior
    else if (rankIndex >= 2) style = "text-yellow-500"; // Low Tier
    else style = "text-cyber-neonRed"; // Fail Tier

    let message = INSULTS[Math.floor(Math.random() * INSULTS.length)];
    if (session.lives > 0 && ratio > 0.4) {
       message = PRAISE[Math.floor(Math.random() * PRAISE.length)];
    }
    
    // Force brutal message for low ranks even if lives remain (e.g. rage quit or accidental finish)
    if (rankIndex < 2) {
        message = "Ne touche plus jamais à un IDE. C'est pour le bien de l'humanité.";
    }

    return (
      <div className="max-w-2xl w-full mx-auto text-center space-y-12 p-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring' }}
        >
          <Trophy className={cn("w-24 h-24 mx-auto mb-6", style)} />
          <h2 className="text-5xl font-black text-white mb-2">SESSION TERMINÉE</h2>
          <div className="font-mono text-cyber-muted">SCORE: <span className="text-white">{session.score}</span> / {maxPossibleSoFar}</div>
          <div className="font-mono text-xs text-cyber-muted mt-1">PRÉCISION: {Math.round(ratio * 100)}%</div>
        </motion.div>

        <div className="border border-cyber-gray bg-cyber-gray/10 p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyber-black px-4 font-mono text-xs text-cyber-muted uppercase">
                Classification Détectée
            </div>
            <div className={cn("text-3xl md:text-4xl font-bold uppercase mb-4 glitched-text", style)}>
                {rankTitle}
            </div>
            <p className="font-mono text-lg text-white">
                "{message}"
            </p>
        </div>

        <div className="flex justify-center gap-4">
            <Button onClick={() => setGameState('MENU')} variant="outline">
                <Terminal className="w-4 h-4" /> MENU_PRINCIPAL
            </Button>
            <Button onClick={() => startSession(session.trackId)} variant="primary">
                <RefreshCw className="w-4 h-4" /> RETRY_PROCESS()
            </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-text selection:bg-cyber-neonGreen selection:text-cyber-black flex flex-col">
      {/* Background Grid FX */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 10, 0.8) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />
      <div className="relative z-10 flex-1 flex flex-col">
        {gameState === 'MENU' && (
            <div className="flex-1 flex items-center">
                {renderMenu()}
            </div>
        )}
        {gameState === 'PLAYING' && renderGame()}
        {(gameState === 'FEEDBACK' || gameState === 'PLAYING') && gameState === 'FEEDBACK' && renderFeedback()}
        {gameState === 'GAME_OVER' && (
             <div className="flex-1 flex items-center">
                {renderGameOver()}
            </div>
        )}
      </div>
    </div>
  );
}
