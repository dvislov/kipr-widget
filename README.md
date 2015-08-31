Виджет поиска
=====================
![Внешний вид](https://dl.dropboxusercontent.com/u/17798821/github/search-widget.png)
## Использование
```
npm install
webpack
```
В папке `dist` создастся файл `bundle.js`

На странице использования виджета разместить код:
```
<div class="awesome-widget"></div> <!-- Дефолтный скин (синий) -->
или
<div class="awesome-widget awesome-widget--theme-gold"></div> <!-- Дополнительный скин (жёлтый) -->

<script src="bundle.js"></script>
```

Виджет можно использовать на странице неоднократно.
Виджет адаптивный (резиновый) — занимает 100% ширины родителя.
Из коробки только 2 скина. Но можно написать и свои.

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
  * [postcss-loader](https://github.com/postcss/postcss-loader)
  * [postcss-autoprefixer](https://github.com/postcss/autoprefixer)
  * [postcss-class-prefix](https://github.com/thompsongl/postcss-class-prefix)
  * [postcss-import](https://github.com/postcss/postcss-import)
  * [postcss-nested](https://github.com/postcss/postcss-nested)
