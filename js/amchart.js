var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 2,
  "valueAxes": [{
    "id": "v1",
    "title": "Stock Price",
    "position": "left",
    "autoGridCount": false,
    "labelFunction": function(value) {
      return "$" + Math.round(value);
    }
  }, {
    "id": "v2",
    "title": "Number of News Articles",
    "gridAlpha": 0,
    "position": "right",
    "autoGridCount": false
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v2",
    "lineColor": "#62cf73",
    "fillColors": "#62cf73",
    "fillAlphas": 1,
    "type": "column",
    "title": "Positive News Articles",
    "valueField": "positive",
    "clustered": false,
    "columnWidth": 0.5,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
  }, {
    "id": "g4",
    "valueAxis": "v2",
    "lineColor": "#ff4d4d",
    "fillColors": "#ff4d4d",
    "fillAlphas": 1,
    "type": "column",
    "title": "Negative News Articles",
    "valueField": "negative",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
  }, {
    "id": "g1",
    "valueAxis": "v1",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#20acd4",
    "type": "line",
    "title": "Stock Price",
    "useLineColorForBulletBorder": true,
    "valueField": "price",
    "legendValueText": "$[[(value)]]",
    "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]</b>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "legend": {
    "useGraphSettings": true,
    "position": "top"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
   "enabled": true
  },
  "dataProvider": [{
    "date": "2016-04-04",
    "price": 55.43,
    "positive": 5,
    "negative": 8
  }, {
    "date": "2016-04-05",
    "price": 54.56,
    "positive": 4,
    "negative": 6
  }, {
    "date": "2016-04-06",
    "price": 55.12,
    "positive": 5,
    "negative": 2
  }, {
    "date": "2016-04-07",
    "price": 54.46,
    "positive": 8,
    "negative": 9
  }, {
    "date": "2016-04-08",
    "price": 54.42,
    "positive": 9,
    "negative": 6
  }, {
    "date": "2016-04-11",
    "price": 54.31,
    "positive": 3,
    "negative": 5
  }, {
    "date": "2016-04-12",
    "price": 54.65,
    "positive": 5,
    "negative": 7
  }, {
    "date": "2016-04-13",
    "price": 55.35,
    "positive": 7,
    "negative": 6
  }, {
    "date": "2016-04-14",
    "price": 55.36,
    "positive": 9,
    "negative": 5
  }, {
    "date": "2016-04-15",
    "price": 55.65,
    "positive": 5,
    "negative": 8
  }, {
    "date": "2016-04-18",
    "price": 56.46,
    "positive": 4,
    "negative": 8
  }, {
    "date": "2016-04-19",
    "price": 56.39,
    "positive": 3,
    "negative": 4
  }, {
    "date": "2016-04-20",
    "price": 55.59,
    "positive": 5,
    "negative": 7
  }, {
    "date": "2016-04-21",
    "price": 55.78,
    "positive": 5,
    "negative": 8
  }, {
    "date": "2016-04-22",
    "price": 51.78,
    "positive": 4,
    "negative": 7
  }, {
    "date": "2016-04-25",
    "price": 52.11,
    "positive": 4,
    "negative": 8
  }, {
    "date": "2016-04-26",
    "price": 51.44,
    "positive": 3,
    "negative": 4
  }, {
    "date": "2016-04-27",
    "price": 50.94,
    "positive": 5,
    "negative": 7
  }, {
    "date": "2016-04-28",
    "price": 49.90,
    "positive": 5,
    "negative": 8
  }, {
    "date": "2016-04-29",
    "price": 49.87,
    "positive": 4,
    "negative": 7
  }, {
    "date": "2016-05-02",
    "price": 50.61,
    "positive": 5,
    "negative": 7
  }, {
    "date": "2016-05-03",
    "price": 49.78,
    "positive": 5,
    "negative": 8
  }, {
    "date": "2016-05-04",
    "price": 49.87,
    "positive": 4,
    "negative": 7
  }]
});
