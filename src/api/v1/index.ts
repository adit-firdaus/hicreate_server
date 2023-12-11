import Router from "koa-router";

const router = new Router({
  prefix: '/v1'
});

router.get('/', async ctx => {
  ctx.body = 'v1';
});

export default router;