import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true 
    },
    author : {
        type : String ,
        required : true 
    },
    publishedYear : {
        type : Number ,
        required : true
    },
    genre : {
        type : String ,
        required : true
    }
},{timestamps : true});

const Book = mongoose.model("Book",bookSchema);
export default Book ;