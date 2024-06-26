
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { getEmployees } from './routes/getEmployees.js'
import { createEmployee } from './routes/createEmployee.js'
import { deleteEmployee } from './routes/deleteEmployee.js'
import { getEmployeeById } from './routes/getEmployeeById.js'
import { searchEmployee } from './routes/searchEmployee.js'
import { updateEmployee } from './routes/updateEmployee.js'


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    "mongodb+srv://user123:wusNLwsnlxfTdkjE@cluster0.o5axeq0.mongodb.net/employee_detail?retryWrites=true&w=majority",
    {
      
      useNewUrlParser: true,
      useUnifiedTopology: true
      
    }
  );
  
// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running at port: ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log(`MongoDB Connection Failed`, err);
// })


// middlewares
app.use('/employee', getEmployees);
app.use('/employee', getEmployeeById);
app.use('/employee', deleteEmployee);
app.use('/employee', updateEmployee);
app.use('/employee', createEmployee);
app.use('/searchemployee', searchEmployee)


app.listen(8000, () => {
    console.log("running on port 8000");
  });