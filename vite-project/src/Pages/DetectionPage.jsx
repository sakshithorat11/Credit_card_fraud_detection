import React, { useState } from "react";

const DetectionPage = () => {
    const [selectedModel, setSelectedModel] = useState("Random Forest");
    const [features, setFeatures] = useState(""); // User input features
    const [result, setResult] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showConclusion, setShowConclusion] = useState(false);

    // Function to handle API call
    const checkTransaction = async () => {
        if (!features) {
            alert("Please enter feature values.");
            return;
        }

        // Convert input string to an array of numbers
        const featureArray = features.split(",").map(num => parseFloat(num.trim()));

        const transactionData = {
            model: selectedModel,
            features: featureArray
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transactionData),
            });

            const data = await response.json();
            setResult(`${data.model}: ${data.prediction}`);
            setShowConclusion(true);
        } catch (error) {
            console.error("Error connecting to backend:", error);
            setResult("Error fetching prediction");
        }
    };

    return (
        <div id="detection-section" className="section">
            <h6>Their are 4 type of Algorithms we use for Detection</h6>
            <div className="resources-container2">
                <div className="resource-box2">

                    <h5>Decision Tree</h5>
                    <p>They are a tree-like model where the dataset is split based on feature values, creating decision
                        nodes that lead to a final classification. In the context of fraud detection, a tree structure allows
                        for straightforward, rule-based decisions to classify transactions as fraudulent or non-fraudulent.
                        They are straightforward to comprehend and interpret, rendering them appropriate for under
                        standing which features play a key role in fraud detection. However, they may be susceptible to
                        over fitting if not adequately pruned.</p>
                </div>
                <div className="resource-box2">
                    <h5>Logistic Regression</h5>
                    <p>It is a popularly used algorithm for binary classification problems which is fraud detection. It
                        models the relationship between the dependent variable (fraud/no fraud) and independent
                        variables (transaction features) using a logistic function to estimate probabilities. The model
                        assigns weights to input features, which helps classify transactions as fraudulent or legitimate
                        based on a threshold probability. It is simple to implement, interpretable, and effective for
                        linearly separable data. </p>
                </div>
                <div className="resource-box2">
                    <h5>Random Forest</h5>
                    <p>It is an ensemble technique that merges several decision trees to enhance prediction accuracy.
                        It builds several decision trees on different sub-samples of the dataset and averages their
                        predictions to mitigate over fitting and improve robustness. In fraud detection, Random Forest
                        excels due to its ability to handle large datasets and provide high accuracy, as it considers multiple
                        perspectives through different trees, reducing the chance of a biased model.</p>
                </div>
                <div className="resource-box2">
                    <h5>Support Vector Machines (SVM):</h5>
                    <p>It robust supervised learning models designed to identify the optimal hyper plane that separates
                        distinct classes. In fraud detection, SVM works by identifying the best boundary that separates
                        fraudulent transactions from legitimate ones, even in high-dimensional feature spaces. It is
                        particularly useful when the data is not linearly separable, as SVM can apply kernel functions to
                        project the data into higher dimensions, allowing for more accurate classifications.</p>
                </div>
            </div>
            <br />
            {!showForm ? (
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
                    onClick={() => setShowForm(true)}
                >
                    Detect Now
                </button>
            ) : (
                <div className="form-container">

                    <h6>Credit Card Fraud Detection</h6>
                    {/* Model Selection Dropdown */}
                    <label>Select Model:</label>
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                    >
                        <option value="Logistic Regression">Logistic Regression</option>
                        <option value="Decision Tree">Decision Tree</option>
                        <option value="Random Forest">Random Forest</option>
                        <option value="Support Vector Machine">Support Vector Machine</option>
                    </select>

                    {/* User Input for Features */}
                    <label>Enter Features (comma-separated):</label>
                    <input
                        type="text"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        placeholder="e.g. -1.35, -0.07, 2.53, 1.37, -0.33, 0.46"
                    />

                    {/* Submit Button */}
                    <button onClick={checkTransaction}>
                        Submit
                    </button>
                    <br />
                    <br />

                    {/* Show Prediction Result */}
                    {result && (
                        <div
                            className="result-box"
                            style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                padding: "10px",
                                border: "2px solid #4CAF50",
                                backgroundColor: "#e8f5e9",
                                borderRadius: "8px",
                                marginTop: "10px"
                            }}
                        >
                            {result}
                        </div>
                    )}



                    {/* Show Conclusion After Submission */}
                    {showConclusion && (
                        <>
                            <h6>Conclusion</h6>
                            <p>The results demonstrate that machine learning models, particularly Random Forest,
                                significantly enhance fraud detection performance. Random Forest achieved an F1 score of
                                91.5% and accuracy as high as 99.3%, showcasing its capability to handle imbalanced datasets
                                effectively through its ensemble learning approach, making it robust and reliable for detecting
                                fraud.</p>
                            <p>Logistic Regression, though simpler in nature, offers interpretability and computational
                                efficiency, making it a practical choice for initial assessments and baseline modeling. Decision
                                Trees provide clear and interpretable rules, enabling easy identification of key features and
                                patterns indicative of fraudulent activity. Support Vector Machines (SVM) excel in handling
                                high-dimensional data and separating complex, non-linear patterns, making them particularly
                                suitable for identifying subtle anomalies in transaction data. </p>
                            <p>The use of SMOTE addressed the challenges posed by the highly imbalanced dataset, ensuring
                                improved model performance for both majority and minority classes. By leveraging advanced
                                evaluation techniques such as 5-fold cross-validation, the models demonstrated robustness and
                                reliability.</p>
                        </>
                    )}
                </div>

            )}
            <br />
        </div>
    );
};

export default DetectionPage;