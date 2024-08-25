import { api } from "./api/api";
import { apiPort as port } from "./config.json";

// The server will be hosted under the /api path
// "/" is for the vue app

api.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
