from pathlib import Path
import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent
MODELS_DIR = BASE_DIR / "models"


pipeline = joblib.load(MODELS_DIR / "model_pipeline.pkl")

artifacts = joblib.load(MODELS_DIR / "artifacts.pkl")

threshold = artifacts["threshold"]


def predict_employee(payload: dict) -> dict:
    df = pd.DataFrame([payload])

    
    prob = float(pipeline.predict_proba(df)[0][1])
    pred = int(prob >= threshold)
    score = round(prob * 10, 2)

 
    if score >= 7:
        recommendation = "High promotion potential"
    elif score >= 4:
        recommendation = "Moderate promotion potential"
    else:
        recommendation = "Low promotion potential"

    return {
        "prediction": pred,
        "probability": round(prob, 4),
        "score": score,
        "recommendation": recommendation,
    }


# from pathlib import Path
# import joblib
# import pandas as pd

# BASE_DIR = Path(__file__).resolve().parent.parent
# MODELS_DIR = BASE_DIR / "models"

# pipeline = joblib.load(MODELS_DIR / "model_pipeline.pkl")


# def predict_employee(payload: dict) -> dict:
#     df = pd.DataFrame([payload])

#     prob = float(pipeline.predict_proba(df)[0][1])
#     threshold = 0.5
#     pred = int(prob >= threshold)
#     score = round(prob * 10, 2)

#     if prob >= 0.7:
#         recommendation = "High promotion potential"
#     elif prob >= threshold:
#         recommendation = "Moderate promotion potential"
#     else:
#         recommendation = "Low promotion potential"

#     return {
#         "prediction": pred,
#         "probability": round(prob, 4),
#         "score": score,
#         "recommendation": recommendation,
#     }