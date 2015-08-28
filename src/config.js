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
        { title: 'Для отдыха, €/нед.', value: 'short' },
        { title: 'От года и более, €/мес.', value: 'long' }
      ]
    },

    priceFrom: {
      name: 'price_from',
      title: 'Цена, от',
      values: [
        { title: 'Не важно', value: 3000 },
        { title: '400', value: 40000 },
        { title: '500', value: 50000 },
        { title: '600', value: 60000 },
        { title: '800', value: 80000 },
        { title: '1\'000', value: 100000 },
        { title: '1\'200', value: 120000 },
        { title: '1\'300', value: 130000 },
        { title: '1\'400', value: 140000 },
        { title: '1\'600', value: 160000 },
        { title: '1\'800', value: 180000 },
        { title: '2\'000', value: 200000 },
        { title: '2\'500', value: 250000 },
        { title: '3\'000', value: 300000 },
        { title: '5\'000', value: 500000 },
        { title: '10\'000', value: 1000000 },
        { title: '15\'000', value: 1500000 },
      ]
    },

    priceTo: {
      name: 'price_to',
      title: 'Цена, до',
      values: [
        { title: 'Не важно', value: 3000 },
        { title: '400', value: 40000 },
        { title: '500', value: 50000 },
        { title: '600', value: 60000 },
        { title: '800', value: 80000 },
        { title: '1\'000', value: 100000 },
        { title: '1\'200', value: 120000 },
        { title: '1\'300', value: 130000 },
        { title: '1\'400', value: 140000 },
        { title: '1\'600', value: 160000 },
        { title: '1\'800', value: 180000 },
        { title: '2\'000', value: 200000 },
        { title: '2\'500', value: 250000 },
        { title: '3\'000', value: 300000 },
        { title: '5\'000', value: 500000 },
        { title: '10\'000', value: 1000000 },
        { title: '15\'000', value: 1500000 }
      ]
    },

    bedrooms: {
      name: 'beds',
      title: 'Спален',
      values: [
        { title: '1', value: 1 },
        { title: '2', value: 2 },
        { title: '2 и более', value: '>=2' },
        { title: '3', value: 3 },
        { title: '3 и более', value: '>=3' },
        { title: '4', value: 4 },
        { title: '5 и более', value: '>=5' }
      ]
    },

    realtyType: {
      name: 'group_variant_id',
      title: 'Тип недвижимости',
      values: [
        { title: 'Дома', value: 1280 },
        { title: 'Апартаменты', value: 1291 }
      ]
    },

    region: {
      name: 'geo_id',
      title: 'Регион',
      values: [
        { title: 'Лимассол', value: 6 },
        { title: 'Пафос', value: 7 },
        { title: 'Ларнака', value: 5 },
        { title: 'Айа-Напа', value: 4 },
        { title: 'Протарас', value: 9 },
        { title: 'Фамагуста', value: 10 },
        { title: 'Полис', value: 8 },
        { title: 'Троодос', value: 11 },
        { title: 'Никосия', value: 12 }
      ]
    },

    swimmingPool: {
      name: 'pool_variant_id',
      title: 'С бассейном'
    },

    nextToBeach: {
      name: 'to_beach',
      title: 'Пешком до пляжа'
    }
  }
});
