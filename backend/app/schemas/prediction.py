from pydantic import BaseModel, Field, ConfigDict


class PredictionRequest(BaseModel):
    performance_score: float = Field(..., ge=0, le=100)
    kpi_achievement_percent: float = Field(..., ge=0, le=100)
    tasks_completed: float = Field(..., ge=0)
    manager_rating: float = Field(..., ge=1, le=5)
    projects_completed: int = Field(..., ge=0)
    peer_feedback_score: float = Field(..., ge=0, le=100)

    department: str

    salary: float = Field(..., ge=0)
    job_satisfaction_score: float = Field(..., ge=0, le=100)
    overtime_hours: float = Field(..., ge=0)
    skill_assessment_score: float = Field(..., ge=0, le=100)

    age: int = Field(..., ge=18, le=70)
    years_in_current_role: int = Field(..., ge=0, le=40)

    employment_type: str
    gender: str
    education_level: str

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "performance_score": 82,
                "kpi_achievement_percent": 88,
                "tasks_completed": 120,
                "manager_rating": 4,
                "projects_completed": 6,
                "peer_feedback_score": 79,
                "department": "Sales",
                "salary": 85000,
                "job_satisfaction_score": 84,
                "overtime_hours": 12,
                "skill_assessment_score": 77,
                "age": 32,
                "years_in_current_role": 3,
                "employment_type": "Full-time",
                "gender": "Male",
                "education_level": "Bachelor"
            }
        }
    )


class PredictionResponse(BaseModel):
    prediction: int
    probability: float
    score: float
    recommendation: str