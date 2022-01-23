<!-- =========================================================================================
    File Name: EvaProjectExecutiveDashboard.vue
    Description: EvaProject - ExecutiveDashboard
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
      <div class="vx-col w-full md:w-2/3 mb-base">
        <vx-card :title="$t('ExecutiveDashboard')">
            <!-- SLOT = ACTIONS -->
            <template slot="actions">
                <change-time-duration-dropdown />
            </template>

            <div slot="no-body">
                <!-- highchart gonna come to here -->
            </div>

        </vx-card>
      </div>
</template>

<script>
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'EvaProjectExecutiveDashboard',
  components: {
    ChangeTimeDurationDropdown,
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  created () {
  },
  methods: {
    ...mapActions('executiveDashboard', ['fetch1stTableData', 'fetch2ndTableData'])

  },
}
</script>

<style lang="scss">

</style>
