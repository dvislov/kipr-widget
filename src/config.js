export default ({
  host: 'http://stg.realty.kipr.ru',

  searchPathRent: '/rent/search/results',
  searchPathRentLong: '/long-term-rentals/search/results',
  searchPathSale: '/sale/search/results',

  searchPathExternal: '/rent/search/results',

  getParamPrefix: 'rent_search_form',
  getParamPrefixSale: 'sale_search_form',

  getParams: {
    duration: {
      name: 'availability_category_type',
      title: 'Вариант аренды',
      values: [
        { title: 'Аренда', value: '' },
        { title: 'Год и более', value: '' },
        { title: 'Продажа', value: '' }
      ]
    },

    bedrooms: {
      name: 'bedrooms',
      title: 'Спальни',
      values: [
        { title: '1', value: 1 },
        { title: '2', value: 2 },
        { title: '3', value: 3 },
        { title: '4', value: 4 },
        { title: '5', value: 5 },
        { title: '6', value: 6 }
      ]
    },

    beds: {
      name: 'sleeps_max',
      title: 'Спальных мест',
      values: [
        { title: '1', value: 1 },
        { title: '2', value: 2 },
        { title: '3', value: 3 },
        { title: '4', value: 4 },
        { title: '5', value: 5 },
        { title: '6', value: 6 },
        { title: '7', value: 7 },
        { title: '8', value: 8 },
        { title: '9', value: 9 },
        { title: '10', value: 10 },
        { title: '11', value: 11 },
        { title: '12', value: 12 },
        { title: '13', value: 13 },
        { title: '14', value: 14 },
        { title: '15', value: 15 }
      ]
    },

    checkInDate: {
      name: 'check_in_date',
      title: 'Дата заезда'
    },

    realtyType: {
      name: 'variant_id',
      title: 'Тип недвижимости',
      values: [
        { title: 'Апартаменты', value: 1292 },
        { title: 'Бунгало', value: 1283 },
        { title: 'Вилла', value: 1285 },
        { title: 'Мезонет', value: 1299 },
        { title: 'Смежный дом', value: 1286 }
      ]
    },

    region: {
      name: 'region_geo_id',
      title: 'Регион',
      values: [
        { title: 'Все варианты', value: '' },
        { title: 'Айа-Напа', value: 280 },
        { title: 'Ларнака', value: 281 },
        { title: 'Лимассол', value: 282 },
        { title: 'Никосия', value: 288 },
        { title: 'Паралимни', value: 286 },
        { title: 'Пафос', value: 283 },
        { title: 'Полис', value: 284 },
        { title: 'Протарас', value: 285 },
        { title: 'Троодос', value: 287 }
      ]
    },

    daysCount: {
      name: 'days_count',
      title: 'Дней отдыха',
      values: [
        { title: '3 дня', value: 3 },
        { title: '4 дня', value: 4 },
        { title: '5 дней', value: 5 },
        { title: '6 дней', value: 6 },
        { title: '7 дней', value: 7 },
        { title: '8 дней', value: 8 },
        { title: '9 дней', value: 9 },
        { title: '10 дней', value: 10 },
        { title: '11 дней', value: 11 },
        { title: '12 дней', value: 12 },
        { title: '13 дней', value: 13 },
        { title: '14 дней', value: 14 },
        { title: '15 дней', value: 15 },
        { title: '16 дней', value: 16 },
        { title: '17 дней', value: 17 },
        { title: '18 дней', value: 18 },
        { title: '19 дней', value: 19 },
        { title: '20 дней', value: 20 },
        { title: '21 день', value: 21 },
        { title: '22 дня', value: 22 },
        { title: '23 дня', value: 23 },
        { title: '24 дня', value: 24 },
        { title: '25 дней', value: 25 },
        { title: '26 дней', value: 26 },
        { title: '27 дней', value: 27 },
        { title: '28 дней', value: 28 },
        { title: '29 дней', value: 29 },
        { title: '30 дней', value: 30 },
        { title: '1 месяц', value: 30 },
        { title: '1,5 месяца', value: 45 },
        { title: '2 месяца', value: 60 },
        { title: '2,5 месяца', value: 75 },
        { title: '3 месяца', value: 90 }
      ]
    }
  }
});
