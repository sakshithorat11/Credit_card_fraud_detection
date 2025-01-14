import numpy as np
import pandas as pd
import streamlit as st
import joblib

# Load the pre-trained model
model = joblib.load("credit_card_model.pkl")

# Streamlit app
st.title("Credit Card Fraud Detection Model")
st.write("Enter the following features to check if the transaction is legitimate or fraudulent:")

# Create input fields for the user to enter feature values (comma-separated)
input_df = st.text_input('Input All features (V1 to V28, Amount, Time)')

# Process input when the user submits
submit = st.button("Submit")

if submit:
    if input_df:
        try:
            # Split the input into a list of feature values and convert them into a numpy array
            input_df_lst = input_df.split(',')
            features = np.array(input_df_lst, dtype=np.float64)

            # Reshape the features array to match the model's expected input shape (1, 31)
            features = features.reshape(1, -1)

            # Make prediction using the loaded model
            prediction = model.predict(features)

            # Display result
            if prediction[0] == 0:
                st.write("Legitimate transaction")
            else:
                st.write("Fraudulent transaction")
        except Exception as e:
            st.error(f"Error with the input: {e}")
    else:
        st.error("Please enter all 31 features.")
