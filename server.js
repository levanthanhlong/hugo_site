const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { exec } = require("child_process");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Dữ liệu người dùng giả lập
const users = {
  admin: "admin123",
  thanh: "thanh123",
};

const SECRET_KEY = "teammobile";

// Xử lý đăng nhập
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (users[username] === password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

// Xác thực token
app.get("/api/check-auth", (req, res) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ isAuthenticated: false });
      res.json({ isAuthenticated: true });
    });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

//Chạy Hugo server
// exec(
//   "ls content/posts/*.md | entr -r hugo server",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error starting Hugo: ${err.message}`);
//       return;
//     }
//     console.log(`Hugo server output: ${stdout}`);
//   }
// );

// Chạy TinaCMS server
exec("npx tinacms dev", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting TinaCMS: ${err.message}`);
    return;
  }
  console.log(`TinaCMS output: ${stdout}`);
});

app.listen(port, () => {
  console.log(`Hugo running on http://localhost:1313`);
  console.log(`Tina cms admin running on http://localhost:1313/admin`);
});
