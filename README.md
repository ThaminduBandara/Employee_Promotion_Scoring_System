# Employee Promotion Scoring System

## Project Overview

The **Employee Promotion Scoring System** is a full-stack machine learning application that predicts employee promotion probability and provides HR analytics insights. The system uses a trained ML model to analyze employee data and generate promotion recommendations based on various performance metrics and employee attributes.

### Key Features:
- **Promotion Prediction**: ML-powered scoring system that estimates promotion probability for employees
- **HR Analytics Dashboard**: Interactive web interface for HR professionals to input employee data and view predictions
- **RESTful API**: FastAPI backend with efficient prediction endpoints
- **Real-time Results**: Instant feedback on promotion likelihood and recommendations

### Technology Stack:
- **Backend**: FastAPI, Scikit-learn, Pandas, NumPy
- **Frontend**: React, Vite, Tailwind CSS
- **ML Framework**: Scikit-learn for model predictions

---

## Project Structure

```
Employee_Promotion_Scoring_System/
├── backend/                 # FastAPI backend application
│   ├── app/
│   │   ├── main.py         # FastAPI application entry point
│   │   ├── models/         # ML model files
│   │   ├── schemas/        # Pydantic data models
│   │   ├── services/       # Business logic (predictor)
│   │   └── utils/          # Utility functions (preprocessing)
│   └── requirements.txt     # Python dependencies
│
├── frontend/               # React Vite frontend application
│   ├── src/
│   │   ├── App.jsx        # Main App component
│   │   ├── components/    # Reusable React components
│   │   |   ├── PredictionForm.jsx
│   │   |   └── ResultCard.jsx
│   │   ├── services/      # API integration
│   │   └── assets/        # Static assets
│   ├── package.json       # Node.js dependencies
│   └── vite.config.js     # Vite configuration
│
└── README.md              # Project documentation
```

---

## Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **npm** (for frontend package management)
- **Virtual Environment** (recommended for Python)

---

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

---

## Running the Application

### Start the Backend Server

From the `backend` directory with virtual environment activated:
```bash
uvicorn app.main:app --reload
```

The API will be available at: `http://localhost:8000`
- API Documentation: `http://localhost:8000/docs` (Swagger UI)

### Start the Frontend Development Server

From the `frontend` directory:
```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

---

## API Endpoints

### POST `/predict`
Predicts employee promotion probability based on input data.

**Request Body:**
```json
{
  "employee_data": {
    // Employee attributes for prediction
  }
}
```

**Response:**
```json
{
  "promotion_probability": 0.85,
  "promotion_score": 7.5,
  "recommendation": "High potential for promotion"
}
```

---

## Usage

1. Open the frontend in your browser: `http://localhost:5173`
2. Enter employee details in the **PredictionForm**
3. View the promotion prediction and recommendations in the **ResultCard**

---

## Development

### Backend
- Framework: FastAPI
- Database: Not currently used (stateless predictions)
- Model: Serialized ML model (Scikit-learn)

### Frontend
- Build Tool: Vite
- Styling: Tailwind CSS
- State Management: React Hooks

---

## Contributing

Feel free to submit issues or pull requests to improve the project.

---

## License

This project is part of a Machine Learning course assignment.
