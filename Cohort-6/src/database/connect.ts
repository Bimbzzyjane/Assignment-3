import config from "config";
import mongoose from "mongoose";

const connect = async () => {
    const uri = config.get("dbURI") as string; // Replace with your MongoDB connection string
    try{
    await mongoose.connect(uri)
    console.log('Connected');
} catch (error) {
    console.log(error)
    process.exit(1)
}
}
export default connect;