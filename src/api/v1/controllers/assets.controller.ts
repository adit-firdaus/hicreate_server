class AssetController {
    static async getAssets(ctx) 
    {
        ctx.body = ctx;
    }

    static async getAsset(ctx) 
    {
        ctx.body = 'getAsset';
    }

    static async createAsset(ctx) 
    {
        ctx.body = 'createAsset';
    }

    static async deleteAsset(ctx) 
    {
        ctx.body = 'deleteAsset';
    }
}

export default AssetController;