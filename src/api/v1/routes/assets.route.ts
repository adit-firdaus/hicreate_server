import Router from "koa-router";
import AssetController from "../controllers/assets.controller";

const assetRouter = new Router();

assetRouter.get('/', AssetController.getAssets);
assetRouter.get('/:id', AssetController.getAsset);
assetRouter.post('/', AssetController.createAsset);
assetRouter.delete('/:id', AssetController.deleteAsset);

export default assetRouter;