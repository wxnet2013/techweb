const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/api/simple', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT');
  ctx.body = 'simple cors';
});


// 非简单请求
router.options('/*', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT');
  ctx.set('Access-Control-Allow-Headers', 'X-Custom-Header,Content-Type');
  ctx.body = '';
});

router.put('/api/not-simple', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT');
  ctx.body = 'not-simple cors';
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);