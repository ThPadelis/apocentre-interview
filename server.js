const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const logger = require("koa-logger");
const helmet = require("koa-helmet");
const environment = require("./utils/environment");

const app = new Koa();
const router = new Router();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

// Routes
// Routes for addresses
router.use("/addresses", require("./api/routes/address"));

// Fallback route
app.use(async (ctx, next) => {
  await next();
  ctx.status = 404;
  ctx.body = { message: "Route not exists" };
});

app.listen(environment.port, () => {
  console.log(
    `Server is up and running on ${environment.host}:${environment.port}`
  );
});
