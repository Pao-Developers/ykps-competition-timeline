import { api } from "./api/api";

// The server will be hosted under the /api path
// "/" is for the vue app

const port = 3000;

api.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
