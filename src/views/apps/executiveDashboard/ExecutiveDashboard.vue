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
        <sales-finance-highcharts v-if="salesFinanceChartDataReady" :sales-finance-data="salesFinanceData"/>
      </div>

      <div class="vx-col w-full mb-base" style="border:1px solid red">
        <sales-expense-highcharts :sales-expence-highcharts="salesExpenseData"/>
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
        this.salesExpenseData = data.Data;
      });
  },
  methods: {
    ...mapActions('executiveDashboard', ['fetchSalesFinanceData', 'fetchSalesExpenseData'])

  },
}
</script>

<style lang="scss">

</style>
