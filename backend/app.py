from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load all trained models
models = {
    "Logistic Regression": joblib.load("logistic_regression.pkl"),
    "Decision Tree": joblib.load("decision_tree.pkl"),
    "Random Forest": joblib.load("random_forest.pkl"),
    "Support Vector Machine": joblib.load("svm.pkl")
}

@app.route("/")
def home():
    return "Credit Card Fraud Detection API is running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        model_name = data["model"]  # Model selected from dropdown
        features = np.array(data["features"]).reshape(1, -1)

        if model_name not in models:
            return jsonify({"error": "Invalid model selected"}), 400

        prediction = models[model_name].predict(features)
        result = "Fraud Transaction" if prediction[0] == 1 else "Legitimate Transaction"

        return jsonify({"model": model_name, "prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)