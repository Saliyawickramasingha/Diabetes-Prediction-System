from flask import Flask, render_template,request,jsonify
import pickle
import numpy as np

app = Flask(__name__)

with open('model/diabetes_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    values = [
        data["pregnancies"],
        data["glucose"],
        data["bloodpressure"],
        data["skinthickness"],
        data["insulin"],
        data["bmi"],
        data["dpf"],
        data["age"]
    ]

    prediction = model.predict([values])[0]

    result = "Diabetic 🔴" if prediction == 1 else "Not Diabetic 🟢"

    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(debug=True)