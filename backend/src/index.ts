import { api } from "./api";
import { apiPort as port } from "./config.json";

// The server will be hosted under the /api path
// "/" is for the vue app

try {
    api.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
} catch (err) {
    console.error(
        `Failed to start server on port http://localhost:${port} : ${err}`
    );
    process.exit(1);
}
