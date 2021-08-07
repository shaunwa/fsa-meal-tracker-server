import express from 'express';
import { routes } from './routes';
const app = express();

app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    await app.listen(8080);
    console.log("Listening on port 8080");
}

start();