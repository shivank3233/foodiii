import mongoose from "mongoose";

export const  connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://shivankPandey:Pandey123@cluster0.e5wbopr.mongodb.net//food-del');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.