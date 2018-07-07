const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// add url-route:
var homeads = require('./home/ad');
router.get('/api/homead', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = homeads;
});

router.get('/api', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3100);
console.log('app started at port 3100...');