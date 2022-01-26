/*=========================================================================================
  File Name: moduleExecutiveDashboardActions.js
  Description: Executive Dashboard Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from 'axios';
const marketplace = 'Amazon.com';
const sellerId = 'A2AYEFBRNOKNF9';
const accessToken = localStorage.getItem('accessToken')

export default {
  fetchSalesFinanceData() {
    const parameters = {
      marketplace,
      sellerId,
    }

    return axios({
        method: 'post',
        url: 'https://iapitest.eva.guru/data/sales-finances',
        data: parameters,
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
  },
  fetchSalesExpenseData(_, params) {
    const parameters = {
      ...params,
      marketplace,
      sellerId,
    }

    return axios({
      method: 'post',
      url: 'https://iapitest.eva.guru/data/sales-expense',
      data: parameters,
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  },
  filterExpensesWithDate(_, params) {
    const parameters = {
      ...params,
      marketplace,
      sellerId,
    }

    return axios({
      method: 'post',
      url: 'https://iapitest.eva.guru/data/sales-expense-by-request-date',
      data: parameters,
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  },
}
