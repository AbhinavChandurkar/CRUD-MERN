const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbconfig = require('./config/db.config');
const studentController = require('./controllers/student.controller');
const Student = require('./model/student.model');
const app = express();

app.use(express.json());
app.use(cors());

//Database Connection 
mongoose.set('strictQuery',true);
mongoose.connect(dbconfig.DB_URL);

app.post('/add',studentController.addStudent);
app.get('/',studentController.getStudent);
app.delete('/student/:id',studentController.deleteStudent);
app.get('/student/:id',studentController.getStudentId);
app.put('/student/:id',studentController.updateStudentData);
app.get('/search/:key', studentController.searchStudentData);

//server initailization
app.listen(8080,()=>{
    console.log("Server running on 8080");
})

