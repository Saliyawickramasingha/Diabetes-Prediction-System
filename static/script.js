function predictDiabetes() {
  const data = {
    pregnancies: Number(document.getElementById("pregnancies").value),
    glucose: Number(document.getElementById("glucose").value),
    bloodpressure: Number(document.getElementById("bloodpressure").value),
    skinthickness: Number(document.getElementById("skinthickness").value),
    insulin: Number(document.getElementById("insulin").value),
    bmi: Number(document.getElementById("bmi").value),
    dpf: Number(document.getElementById("dpf").value),
    age: Number(document.getElementById("age").value)
  };

  fetch("/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(resData => {
      document.getElementById("result").innerText =
        "Prediction Result: " + resData.prediction;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err;
      console.error(err);
    });
}
