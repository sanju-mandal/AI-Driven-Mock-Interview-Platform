const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generate = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const { prompt, feedbackPrompt } = req.body;

    const promptText = prompt || feedbackPrompt;

    if (!promptText) return res.status(400).json({ error: "Invalid request" });

    const result = await model.generateContent(promptText);
    const response = await result.response;
    const text = response.text();
    const parsed = JSON.parse(text.replace(/```json|```/g, ""));

    return res.json(prompt ? { questions: parsed } : { feedback: parsed });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch questions" });
  }
};
