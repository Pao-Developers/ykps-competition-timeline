import express from "express";
import { DBHandler } from "../db";

// The server will be hosted under the /api path
// "/" is for the vue app

export const api = express();

api.get("/", (req, res) => {
    res.status(200).send("Open competition database API.");
});

api.get("/api", (req, res) => {
    res.status(200).send("Open competition database API.");
});

api.get("/api/node", (req, res) => {
    const nodeId = req.query.id;
    const data = DBHandler.getInstance().getNodeById(nodeId as string);
    if (data === null) {
        res.status(404).send("Invalid node ID.");
    } else {
        res.status(200).json(data);
    }
});

api.get("/api/event", (req, res) => {
    const eventID = req.query.id;
    const data = DBHandler.getInstance().getEventById(eventID as string);
    if (data === null) {
        res.status(404).send("Invalid event ID.");
    } else {
        res.status(200).json(data);
    }
});

//
// api.post()
