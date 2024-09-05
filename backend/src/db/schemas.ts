import mongoose, { Schema } from "mongoose";

const urlRegex =
    /^(?:(http|https|ftp):\/\/)?((|[\w-]+\.)+[a-z0-9]+)(?:(\/[^/?#]+)*)?(\?[^#]+)?(#.+)?$/i;

const tags = ["Null"];

const nodeSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, lowercase: true, match: urlRegex },
    timestamp: { type: Date, required: true, default: Date.now },
    duration: { type: Number },
    fatherEvent: { type: Schema.Types.ObjectId, ref: "events" },
    isPrimapy: { type: Boolean, default: false },
});

const eventSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    tags: { type: [String], enum: tags },
    primaryChildNodes: { type: [Schema.Types.ObjectId], ref: "nodes" },
    trivialChildNodes: { type: [Schema.Types.ObjectId], ref: "nodes" },
});

const Node = mongoose.model("nodes", nodeSchema);
const Event = mongoose.model("events", eventSchema);

export { Node, Event };
