import Vue from 'vue';
import Highcharts from 'highcharts';
import Gantt from 'highcharts/modules/gantt';
import DraggablePoint from 'highcharts/modules/draggable-points';
import HighchartsVue from 'highcharts-vue';
import initNoData from 'highcharts/modules/no-data-to-display';
import initStock from 'highcharts/modules/stock';

Gantt(Highcharts);
DraggablePoint(Highcharts);
initNoData(Highcharts);

initStock(Highcharts);

Vue.use(HighchartsVue);
