import mongoose, { mongo } from "mongoose";
import { mongodbUrl } from "../config.json";

export class DBHandler {
    private static _instance: DBHandler;

    private constructor() {
        mongoose.connect(mongodbUrl);
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
}
