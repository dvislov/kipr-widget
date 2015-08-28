export default ({
  host: 'http://kipr.ru',
  searchPath: '/arenda/search/results',
  searchPathExternal: '/arenda/search',

  getParamPrefix: 'rent',

  getParams: {
    duration: {
      name: 'availability_category_type',
      title: 'Длительность проживания',
      values: [
        {
          title: 'Для отдыха, €/нед.',
          name: 'short'
        },
        {
          title: 'От года и более, €/мес.',
          name: 'long'
        }
      ]
    }
  }
});
