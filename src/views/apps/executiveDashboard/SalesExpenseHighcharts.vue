<template>
  <div>
    <vx-card :title="'Expenses & Refunds'">
      <template slot="actions">
        
      </template>

      <div slot="no-body">
          <highcharts
            v-if="isChartDataReady"
            :options="chartOptions"
            ref="salesExpenseChart"
          />
      </div>
    </vx-card>
  </div>  
</template>

<script>
export default {
  name: 'SalesExpenseHighcharts',
  props: {
    salesExpenseData: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.chartOptions.series[0].data = this.salesExpenseData;

    this.$nextTick(() => {
      this.isChartDataReady = true;
    })
  },
  data () {
    return {
      isChartDataReady: false,
      chartOptions: {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f} $</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '$'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Amount',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Other',
                y: 7.05
            }]
        }]
      },
    }
  },
}
</script>
