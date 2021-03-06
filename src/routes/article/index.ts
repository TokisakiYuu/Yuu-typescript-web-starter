/**
 * 文章页
 */

import Koa from "koa";
import Router from "koa-router";

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        ctx.body = "The Article";
        return next();
    })

export default router.routes();