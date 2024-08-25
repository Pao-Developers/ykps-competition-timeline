import express from "express";

// The server will be hosted under the /api path
// "/" is for the vue app

export const api = express();

api.get("/api", (req, res) => {
    res.statusCode = 200;
});

api.get;
