import { useState } from "react";
import PredictionForm from "./components/PredictionForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="relative overflow-hidden rounded-[2rem] border border-orange-200/70 bg-white/85 p-6 shadow-[0_20px_80px_rgba(251,146,60,0.22)] backdrop-blur-md sm:p-10">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-amber-200/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-rose-200/60 blur-3xl" />

        <div className="relative z-10">
          <p className="mb-3 inline-flex rounded-full border border-orange-300 bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
            HR Analytics Dashboard
          </p>
          <h1 className="font-[Fraunces] text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Employee Promotion Scoring System
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Enter employee details to estimate promotion probability, score potential,
            and receive a recommendation.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-100 bg-white/95 p-4 shadow-lg shadow-orange-100/40 sm:p-6">
            <PredictionForm onResult={setResult} />
          </div>

          <ResultCard result={result} />
        </div>
      </section>
    </main>
  );
}

export default App;