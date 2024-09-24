app.use(cors());
const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('Server is  running  on  port 3000')
})


const students ={
    1:{
        name: "Juan",
        lastName: "Peña",
        email: "juanpenlo@unisabana.edu.co",
        id: "0000303610"
    }
    ,
    2:{
      name: "Nicholas",
      lastName:"Triana",
      email:"nicholastrsu@unisabana.edu.co",
      id: "0000287552"
    }
}
app.get('/user-info/:id', (req, res) => {
    const studentId = req.params.id;

    if (students[studentId]) {
        res.json(students[studentId]);
      } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
      }
    });
app.get('/user-info/:id', (req, res) => {
      const studentId = req.params.id;
  
      if (students[studentId]) {
          res.json(students[studentId]);
        } else {
          res.status(404).json({ message: "Estudiante no encontrado" });
        }
      });
