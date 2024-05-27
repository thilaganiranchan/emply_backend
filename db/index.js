import mongoose from "mongoose";
// import { DB_NAME } from '../utils/constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://user123:wusNLwsnlxfTdkjE@cluster0.o5axeq0.mongodb.net/employee_detail?ret ryWrites=true&w=majority', 
        { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`\n MongoDB Connected!! `);
    } catch (error) {
        console.log("MONGODB Connection Failed", error);
    }
}


export default connectDB;