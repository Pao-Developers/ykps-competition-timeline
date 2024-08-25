import mongoose from "mongoose";
import { mongodbUrl } from "../config.json";

mongoose
    .connect(mongodbUrl)
    .then(() => {
        console.log(`Connected to MongoDB at ${mongodbUrl}`);
    })
    .catch((err) => {
        console.error(`Failed to connect to MongoDB at ${mongodbUrl}: ${err}`);
        process.exit(1);
    });

export * from "./schemas";
