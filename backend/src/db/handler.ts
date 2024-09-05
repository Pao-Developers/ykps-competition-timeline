import mongoose from "mongoose";
import { mongodbUrl } from "../config.json";
import { importByCsv } from "./importByCsv";

export class DBHandler {
    private static _instance: DBHandler;

    private constructor() {
        this.connectToDatabase();
        importByCsv();
    }

    public static getInstance() {
        if (!this._instance) {
            this._instance = new DBHandler();
        }
        return this._instance;
    }

    public async getNodeById(id: string): Promise<JSON | null> {
        return mongoose.model("nodes").findById(id);
    }

    public async getEventById(id: string): Promise<JSON | null> {
        return mongoose.model("events").findById(id);
    }

    private async connectToDatabase() {
        try {
            await mongoose.connect(mongodbUrl);
            console.log(`Connected to MongoDB at ${mongodbUrl}`);
        } catch (err) {
            throw err;
        }
    }
}
