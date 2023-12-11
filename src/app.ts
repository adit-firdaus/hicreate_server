import koa from 'koa';
import KoaLogger from 'koa-logger';

import api from './api';

const app = new koa();

app.use(KoaLogger());

app.use(api.routes());

export default app;