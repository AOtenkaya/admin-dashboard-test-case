<!-- =========================================================================================
    File Name: ExecutiveDashboard.vue
    Description: EvaProject - ExecutiveDashboard
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div>
    <div class="vx-col w-full mb-base">
        <sales-finance-highcharts
          v-if="salesFinanceChartDataReady"
          :sales-finance-data="salesFinanceData"
          @filterExpensesByRequestDate="filterExpensesByRequestDate"
        />
      </div>

      <div class="vx-col w-full mb-base">
        <sales-expense-highcharts v-if="salesExpenseChartDataReady" :sales-expense-data="salesExpenseData"/>
      </div>
  </div>
</template>

<script>
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import SalesFinanceHighcharts from './SalesFinanceHighcharts.vue'
import SalesExpenseHighcharts from './SalesExpenseHighcharts.vue'
import { mapActions } from 'vuex';

export default {
  name: 'ExecutiveDashboard',
  components: {
    ChangeTimeDurationDropdown,
    SalesFinanceHighcharts,
    SalesExpenseHighcharts,
  },
  data () {
    return {
      salesFinanceData: {},
      salesExpenseData: {},
      salesFinanceChartDataReady: false,
      salesExpenseChartDataReady: false,
    }
  },
  mounted () {
    this.fetchSalesFinanceData()
      .then(({data}) => {
        const salesFinanceDates = data.Data.item.map(data => data.date);
        const totalSales = data.Data.item.map(data => data.totalSales);
        const reimbursement = data.Data.item.map(data => data.reimbursement);
        const refund = data.Data.item.map(data => data.refund);
        const totalExpenses = data.Data.item.map(data => data.totalExpenses);
        const itemQuantity = data.Data.item.map(data => data.itemQuantity);

        this.salesFinanceData = {
          salesFinanceDates,
          totalSales,
          reimbursement,
          refund,
          totalExpenses,
          itemQuantity,
        };

        this.salesFinanceChartDataReady = true;
      })
    this.fetchSalesExpenseData({ day: 30})
      .then(({data}) => {
        const result = data.Data.item.map(item => {
          item.y = item.amount;
          item.name = item.type;
          return item;
        })

        this.salesExpenseData = result;
      })
      .then(() => {
        this.salesExpenseChartDataReady = true;
      })
  },
  methods: {
    ...mapActions('executiveDashboard', ['fetchSalesFinanceData', 'fetchSalesExpenseData', 'filterExpensesWithDate']),
    filterExpensesByRequestDate(rawDate) {
      this.salesExpenseChartDataReady = false;
      const date = {
        year: parseInt(rawDate.split('/')[0].split('-')[0]),
        month: parseInt(rawDate.split('/')[0].split('-')[1]),
      };

      const params = {
        date,
      };

      this.filterExpensesWithDate(params)
        .then(({data}) => {
          const result = data.Data.item.map(item => {
            item.y = item.amount;
            item.name = item.type;
            return item;
          })

          this.salesExpenseData = result;
        })
        .then(() => {
          this.salesExpenseChartDataReady = true;
        });
    },
  },
}
</script>

<style lang="scss">

</style>
