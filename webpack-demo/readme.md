二、环境配置：webpack4、环境隔离、静态资源加载的 loaders
1、各类工具对比
1. seajs - spm 
```
define((module, exports) => {
  // module.exports
  // exports
});
```
2. broswerify
```
// module.exports
// exports
```
3. webpack 4.x
commonjs static
入口文件 index.js 
import css\png\..
-- css-loader
-- file-loader
-- json
--> index.html

4. gulp
pipe 集合

5. parcel index.html


2、约定优于配置
webpack.config.js
```
{
  entry: {},
  output: {},
  modules: {},
}
```
3、webpack 零配置
安装
```
$ npm i webpack webpack-cli webpack-dev-server -D --registry=https://registry.npm.taobao.org
```

4、babel 配置,处理 js
```
$ npm i babel-core babel-loader babel-preset-env babel-preset-stage-2 -D --registry=https://registry.npm.taobao.org
```

5、eslint 配置：编译阶段检查代码规则
```
npm i eslint eslint-config-airbnb-base eslint-loader eslint-friendly-formatter eslint-plugin-import -D --registry=https://registry.npm.taobao.org
```

6. css 处理
```
$ npm i style-loader css-loader -D --registry=https://registry.npm.taobao.org
```

7. less or scss
```
$ npm i sass-loader node-sass --registry=https://registry.npm.taobao.org
```
http://www.ruanyifeng.com/blog/2012/06/sass.html

8 图片处理
```
$ npm i url-loader file-loader -D --registry=https://registry.npm.taobao.org
```




三、开发和生产环境：配置 react、web-dev-server、hmr、lazyload、代码分割及意义
1、react 配置
2、本地开发服务器
3、hmr
4、lazyload
5、http协议之缓存控制和 gzip
6、代码分割