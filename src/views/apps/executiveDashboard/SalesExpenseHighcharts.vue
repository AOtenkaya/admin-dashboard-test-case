<template>
  <div>
    <vx-card :title="'Expenses & Refunds'">
      <!-- SLOT = ACTIONS -->
      <template slot="actions">
          aaa
      </template>

      <div slot="no-body">
          <!-- CHART -->
          <highcharts
            v-if="isChartDataReady"
            :options="chartOptions"
            ref="salesExpenseChart"
          />

          <!-- CHART DATA -->
          <!-- <ul class="mb-1">
              <li v-for="customerData in customersData.analyticsData" :key="customerData.customerType" class="flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0">
                  <span class="flex items-center">
                      <span class="inline-block h-3 w-3 rounded-full mr-2" :class="`bg-${customerData.color}`"></span>
                      <span class="font-semibold">{{ customerData.customerType }}</span>
                  </span>
                  <span>{{ customerData.counts }}</span>
              </li>
          </ul> -->
      </div>
    </vx-card>
  </div>  
</template>

<script>
export default {
  name: 'SalesExpenseHighcharts',
  props: {
    salesExpenseData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.chartOptions.xAxis.categories = this.salesFinanceData.salesFinanceDates;
    this.chartOptions.series.find(item => item.name === 'Total Sales').data = this.salesFinanceData.totalSales;
    this.chartOptions.series.find(item => item.name === 'Reimbursement').data = this.salesFinanceData.reimbursement;
    this.chartOptions.series.find(item => item.name === 'Total Refund').data = this.salesFinanceData.refund;
    this.chartOptions.series.find(item => item.name === 'Total Expense').data = this.salesFinanceData.totalExpenses;
    this.chartOptions.series.find(item => item.name === 'Quantity').data = this.salesFinanceData.itemQuantity;

    console.log('this.chartOptions', this.chartOptions)
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
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
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
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
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

<style>

</style>