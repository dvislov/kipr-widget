Виджет поиска для kipr.ru
=====================
## Использование
```
npm install
webpack
```
В папке `dist` создастся файл `bundle.js`

На странице использования виджета разместить код:
```
<div id='kiprWidget'></div>
<script src="bundle.js"></script>
```

## Разработка
```
npm install
npm start
open http://localhost:3000
```

### Под капотом:
- [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate)
  * React
  * Webpack
  * [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  * [babel-loader](https://github.com/babel/babel-loader)
  * [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [PostCSS](https://github.com/postcss/postcss)
  * [postcss-autoprefixer](https://github.com/postcss/autoprefixer)
  * [postcss-class-prefix](https://github.com/thompsongl/postcss-class-prefix)
