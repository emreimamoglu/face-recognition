const Clarifai = require("clarifai");

export const classifyImage = async (formUrl) => {
  let app = new Clarifai.App({ apiKey: "ae211d8777dd4a66a87f3a7a005619f8" });
  const res1 = await app.models.predict(
    { id: "cfbb105cb8f54907bb8d553d68d9fe20" },
    formUrl
  );
  const res2 = await res1.outputs[0].data.concepts[0].name;
  const res3 = await res2;
  return res3;
};
