import Router from "koa-router";

import assetRouter from "./routes/assets.route";

const router = new Router();

router.use("/assets", assetRouter.routes());

export default router;