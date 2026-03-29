function ResultCard({ result }) {
  if (!result || typeof result !== "object") return null;

  const toText = (value) => {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }

    if (value === null || value === undefined) {
      return "N/A";
    }

    return JSON.stringify(value);
  };

  const isPromoted = Number(result.prediction) === 1;

  return (
    <section className="mt-7 animate-[fadeIn_0.4s_ease-out] rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-100 shadow-xl shadow-slate-300/60 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h2 className="font-[Fraunces] text-2xl">Prediction Result</h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            isPromoted ? "bg-emerald-300 text-emerald-900" : "bg-amber-300 text-amber-900"
          }`}
        >
          {isPromoted ? "Promoted" : "Not Promoted"}
        </span>
      </div>

      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <p className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2">
          <span className="font-semibold text-slate-300">Probability:</span> {toText(result.probability)}
        </p>
        <p className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2">
          <span className="font-semibold text-slate-300">Promotion Score:</span> {toText(result.score)} / 10
        </p>
      </div>

      <p className="mt-4 rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-sm leading-relaxed text-slate-200">
        <span className="font-semibold text-slate-300">Recommendation:</span> {toText(result.recommendation)}
      </p>
    </section>
  );
}

export default ResultCard;