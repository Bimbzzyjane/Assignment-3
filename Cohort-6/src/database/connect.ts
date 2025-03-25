import mongoose, { Mongoose } from "mongoose";

const connect = async () => {
    const uri = 'mongodb://localhost:27017/cohort-6';
    await mongoose.connect(uri);
    console.log('Connected');
}
export default connect;
