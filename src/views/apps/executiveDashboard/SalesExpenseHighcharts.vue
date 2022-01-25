<template>
  <div>
    <vx-card :title="'Expenses & Refunds'">
      <template slot="actions">
        
      </template>

      <div slot="no-body">
        <div class="vx-col w-full mb-base px-7">
          <highcharts
            v-if="isChartDataReady"
            :options="chartOptions"
            ref="salesExpenseChart"
          />
        </div>

        <!-- <div class="vx-col md:w-1/3 mb-base px-4" style="display:inline-block">
          <div class="flex justify-between py-3 px-5">
            <span class="flex items-center">
              Total Expenses:
            </span>

            <span>
              ${{ totalExpenses.toFixed(2) }}
            </span>
          </div>

          <div>
            <ul class="mb-1">
                <li v-for="item in existedExpenses" :key="item.index" class="flex justify-between py-2 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"
                style="heigh:15px !important">
                  <template v-if="item.y">
                    <span class="flex items-center" style="font-size:.8rem">
                      <span class="inline-block h-3 w-3 rounded-full mr-2" ></span>

                      <span class="font-semibold">{{ item.name }}</span>
                    </span>

                    <span>$ {{ item.y }}</span>
                  </template>
                </li>
            </ul>
          </div>
        </div> -->
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
            pointFormat: '{series.name} $ <b>{point.y} </b>'
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
        legend: {
          enabled: true,
          layout: 'vertical',
          align: 'right',
          width: 400,
          verticalAlign: 'middle',
          useHTML: true,
          labelFormatter: function() {
              return '<div style="width:300px;justify-content:space-between;display:flex"><div style="text-align: left;margin:0 5px;display:inline-block">'
              + this.name +
              '</div><div class="spacer"></div><div style="; text-align:right;display:inline-block">$'
              + this.y +
              '</div></div>';
          }
        },
        series: [{
            name: ' ',
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
  computed: {
    totalExpenses() {
      const values = this.chartOptions.series[0].data.map(item => item.y);
      const result = values.reduce(function (total, amount) {
        return total + amount
      }, 0)

      return result;
    },
    existedExpenses() {
      const result = this.chartOptions.series[0].data.filter(item => item.y > 0);

      return result;
    },
  },
}
</script>
