import mongoose, { Schema } from "mongoose";

const urlRegex =
    /^(?:(http|https|ftp):\/\/)?((|[\w-]+\.)+[a-z0-9]+)(?:(\/[^/?#]+)*)?(\?[^#]+)?(#.+)?$/i;

const nodeSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, lowercase: true, match: urlRegex },
    timestamp: { type: Date, required: true, default: Date.now },
    duration: { type: Number },
    fatherEvent: { type: Schema.Types.ObjectId, ref: "events" },
    isPrimapy: { type: Boolean, default: false },
});

// const categories = ["Null"];
const tags = ["Null"];

const eventSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    tags: { type: [String], enum: tags },
    // category: { type: String, enum: categories },
    primaryChildNodes: { type: [Schema.Types.ObjectId], ref: "nodes" },
    trivialChildNodes: { type: [Schema.Types.ObjectId], ref: "nodes" },
});

export const Node = mongoose.model("nodes", nodeSchema);
export const Event = mongoose.model("events", eventSchema);
