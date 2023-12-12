import Router from "koa-router";

import v1 from './v1';

const router = new Router();

router.use("/v1", v1.routes());

router.get('/', async ctx => {
  ctx.body = 'api';
});

export default router;