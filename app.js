const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const authRoutes = require("./backend/routes/authRoutes");
const aiRoutes = require("./backend/routes/aiRoutes");
const protectedRoutes = require("./backend/routes/protectedRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "frontend/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/interview", (req, res) => res.render("interview"));

app.use("/api", authRoutes);
app.use("/api", aiRoutes);
app.use("/api", protectedRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
