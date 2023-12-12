import koa from 'koa';
import Logger from 'koa-logger';
import Router from "koa-router";

import api from './api';

const app = new koa();
const router = new Router();

app.use(Logger());

router.use('/api', api.routes());
router.get('/', async ctx => {
    ctx.body = {
        message: 'Server Active'
    };
});

app.use(router.routes());

export default app;