import express from "express";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Kelvin" }
];

const findStudent = (id) => {
  return students.find(s => s.id === Number(id));
};

// Home
app.get("/", (req, res) => {
  res.render("index", { students });
});

// Add page
app.get("/create", (req, res) => {
  res.render("add");
});

// Add student
app.post("/create", (req, res) => {
  const newStudent = {
    id: Date.now(),
    name: req.body.name
  };

  students.push(newStudent);
  res.redirect("/");
});

// Edit page
app.get("/update/:id", (req, res) => {
  const student = findStudent(req.params.id);

  if (!student) return res.send("Student not found");

  res.render("edit", { student });
});

// Update student
app.post("/update/:id", (req, res) => {
  const student = findStudent(req.params.id);

  if (!student) return res.send("Student not found");

  student.name = req.body.name;
  res.redirect("/");
});

// Delete student
app.get("/remove/:id", (req, res) => {
  students = students.filter(s => s.id !== Number(req.params.id));
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});