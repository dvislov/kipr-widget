export default ({
  host: 'http://kipr.ru',
  searchPath: '/arenda/search/results',
  searchPathExternal: '/arenda/search',

  getParams: {
    type: {
      name: 'availability_category_type',
      values: [
        { short: 'Для отдыха, €/нед.' },
        { long: 'От года и более, €/мес.'}
      ]
    }
  }
});
