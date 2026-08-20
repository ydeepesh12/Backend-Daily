const express = require("express");

const app = express();

const PORT = 3000;

const students = [
    { rollNo: 1, name: "Deepesh", section: "D" },
    { rollNo: 2, name: "Aryan", section: "D" },
    { rollNo: 3, name: "Ashish", section: "D" },
    { rollNo: 4, name: "Aditya", section: "D" },
    { rollNo: 5, name: "Yuvraj", section: "D" },
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:rollNo", (req, res) => {

    const id = req.params.rollNo;

    const student = students.find(
        (student) => student.rollNo === Number(id)
    );

    if (student == undefined) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        student
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});