import pandas as pd


def encode_with_mapping(value: str, classes: list[str], field_name: str) -> int:
    if value not in classes:
        raise ValueError(
            f"Invalid value for '{field_name}'. Allowed values: {classes}"
        )
    return classes.index(value)


def prepare_input(payload: dict, artifacts: dict) -> pd.DataFrame:
    processed = {
        "performance_score": payload["performance_score"],
        "kpi_achievement_percent": payload["kpi_achievement_percent"],
        "tasks_completed": payload["tasks_completed"],
        "manager_rating": payload["manager_rating"],
        "projects_completed": payload["projects_completed"],
        "peer_feedback_score": payload["peer_feedback_score"],
        "department": encode_with_mapping(
            payload["department"],
            artifacts["department_classes"],
            "department"
        ),
        "salary": payload["salary"],
        "job_satisfaction_score": payload["job_satisfaction_score"],
        "overtime_hours": payload["overtime_hours"],
        "skill_assessment_score": payload["skill_assessment_score"],
        "age": payload["age"],
        "years_in_current_role": payload["years_in_current_role"],
        "employment_type": encode_with_mapping(
            payload["employment_type"],
            artifacts["employment_type_classes"],
            "employment_type"
        ),
        "gender": encode_with_mapping(
            payload["gender"],
            artifacts["gender_classes"],
            "gender"
        ),
        "education_level": encode_with_mapping(
            payload["education_level"],
            artifacts["education_level_classes"],
            "education_level"
        ),
    }

    df = pd.DataFrame([processed])
    return df[artifacts["selected_features"]]