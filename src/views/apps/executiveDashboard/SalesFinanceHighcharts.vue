<template>
  <div>
    <vx-card :title="'Sales & Finances'">
      <div slot="no-body">
          <!-- CHART -->
          <highcharts
            v-if="isChartDataReady"
            :options="chartOptions"
            ref="salesFinanceChart"
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
  name: 'SalesFinanceHighcharts',
  props: {
    salesFinanceData: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      isChartDataReady: false,
      chartOptions: {
        chart: {
            type: 'column'
        },
        title: {
          text: '',
        },
        xAxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
            ],
            crosshair: true
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
            },
            title: {
                text: 'Amount ($)',
            }
        }, { // Secondary yAxis
            title: {
                text: 'Quantity (Units)',
            },
            labels: {
                format: '{value} Units',
            },
            opposite: true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Total Sales',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Reimbursement',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'Total Refund',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Total Expense',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }, {
            name: 'Quantity',
            yAxis: 1,
            type: 'spline',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
      },
    }
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
}
</script>

<style>

</style>