import { useState } from "react";
import { predictPromotion } from "../services/api";

const initialForm = {
  performance_score: "",
  kpi_achievement_percent: "",
  tasks_completed: "",
  manager_rating: "",
  projects_completed: "",
  peer_feedback_score: "",
  department: "",
  salary: "",
  job_satisfaction_score: "",
  overtime_hours: "",
  skill_assessment_score: "",
  age: "",
  years_in_current_role: "",
  employment_type: "",
  gender: "",
  education_level: "",
};

const numericFields = [
  { name: "performance_score", label: "Performance Score", placeholder: "Ex: 0 - 100" },
  { name: "kpi_achievement_percent", label: "KPI Achievement (%)", placeholder: "Ex: 90" },
  { name: "tasks_completed", label: "Tasks Completed", placeholder: "Ex: 60" },
  { name: "manager_rating", label: "Manager Rating", placeholder: "Ex: 0 - 5" },
  { name: "projects_completed", label: "Projects Completed", placeholder: "Ex: 12" },
  { name: "peer_feedback_score", label: "Peer Feedback Score", placeholder: "Ex: 0 - 5" },
  { name: "salary", label: "Salary", placeholder: "Ex: 86000" },
  { name: "job_satisfaction_score", label: "Job Satisfaction Score", placeholder: "Ex: 0 - 100" },
  { name: "overtime_hours", label: "Overtime Hours", placeholder: "Ex: 12" },
  { name: "skill_assessment_score", label: "Skill Assessment Score", placeholder: "Ex: 0 - 100" },
  { name: "age", label: "Age", placeholder: "Ex: 31" },
  { name: "years_in_current_role", label: "Years in Current Role", placeholder: "Ex: 3" },
];

const selectFields = [
  {
    name: "department",
    label: "Department",
    options: ["Engineering", "Finance", "HR", "Marketing", "Operations", "Sales", "Support"],
  },
  {
    name: "employment_type",
    label: "Employment Type",
    options: ["Full-Time", "Part-Time", "Contract"],
  },
  {
    name: "gender",
    label: "Gender",
    options: ["Female", "Male"],
  },
  {
    name: "education_level",
    label: "Education Level",
    options: ["Bachelor", "Master", "PhD"],
  },
];

const inputClassName =
  "w-full rounded-xl border border-orange-200 bg-orange-50/30 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200";

const getErrorMessage = (err) => {
  const detail = err?.response?.data?.detail;

  if (typeof detail === "string" && detail.trim()) {
    return detail;
  }

  if (Array.isArray(detail) && detail.length > 0) {
    const first = detail[0];
    if (typeof first === "string") {
      return first;
    }
    if (first && typeof first === "object") {
      return first.msg || "Invalid request data. Please check all fields.";
    }
  }

  if (typeof detail === "object" && detail !== null) {
    return "Invalid request data. Please check all fields.";
  }

  return err?.message || "Something went wrong";
};

function PredictionForm({ onResult }) {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        performance_score: Number(formData.performance_score),
        kpi_achievement_percent: Number(formData.kpi_achievement_percent),
        tasks_completed: Number(formData.tasks_completed),
        manager_rating: Number(formData.manager_rating),
        projects_completed: Number(formData.projects_completed),
        peer_feedback_score: Number(formData.peer_feedback_score),
        department: formData.department,
        salary: Number(formData.salary),
        job_satisfaction_score: Number(formData.job_satisfaction_score),
        overtime_hours: Number(formData.overtime_hours),
        skill_assessment_score: Number(formData.skill_assessment_score),
        age: Number(formData.age),
        years_in_current_role: Number(formData.years_in_current_role),
        employment_type: formData.employment_type,
        gender: formData.gender,
        education_level: formData.education_level,
      };

      const result = await predictPromotion(payload);
      onResult(result);
    } catch (err) {
      setError(getErrorMessage(err));
      onResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {numericFields.map((field) => (
          <label key={field.name} className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
              {field.label}
            </span>
            <input
              type="number"
              step="any"
              required
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className={inputClassName}
            />
          </label>
        ))}

        {selectFields.map((field) => (
          <label key={field.name} className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
              {field.label}
            </span>
            <select
              name={field.name}
              required
              value={formData[field.name]}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Predicting..." : "Predict Promotion"}
        </button>

        {/* <p className="text-xs text-slate-500">
          All numerical fields are sent as numbers to the API.
        </p> */}
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}

export default PredictionForm;