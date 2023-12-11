import http from 'http';
import app from './app';

import api from './api';

app.use(api.routes());

const server = http.createServer(app.callback());

server.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});