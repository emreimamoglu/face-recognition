const Clarifai = require("clarifai");

export const classifyImage = (formUrl) => {
  let app = new Clarifai.App({ apiKey: "ae211d8777dd4a66a87f3a7a005619f8" });
  console.log("İnside classify : ",formUrl);
  app.models
    .predict(
      { id: "23aa4f9c9767a2fd61e63c55a73790ad" },
      formUrl
    )
    .then(
      function (response) {
        console.log(response);
      },
      function (err) {}
    );
};
