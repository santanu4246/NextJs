
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connectes to database");
        return
    }
    try {

        const db = await mongoose.connect(process.env.MONGO_URL || '', { autoIndex: false, })
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Sucessfully");

    } catch (error) {
        console.log("Database Connected failed", error);
        process.exit(1)

    }
}

export default dbConnect