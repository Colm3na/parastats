<template>
  <div class="countdown-widget container" v-if="!loading">
    <div class="row text-center">
      <div class="col-md-4 mb-4">
        <div class="box h-100">
          <h1>{{ daysLeftToReachThousandValidators.toFixed(0) }}</h1>
          <h4>days</h4>
          <p>estimated to reach 1000 validators<br />on kusama chain</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box h-100">
          <h1>{{ currentNumberOfValidators }}</h1>
          <h4>validators</h4>
          <p>currently active<br />on kusama chain</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box h-100">
          <h1>{{ thousandValitorsEstimatedDate.format('DD') }}</h1>
          <h4>{{ thousandValitorsEstimatedDate.format('MMM') }}</h4>
          <p>estimated to reach 1000 validators<br />on kusama chain</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiPromise, WsProvider } from '@polkadot/api'
import moment from 'moment'
import commonMixin from '@/mixins/commonMixin.js'
import { config } from '@/config.js'
export default {
  mixins: [commonMixin],
  data() {
    return {
      currentNumberOfValidators: 0,
      daysLeftToReachThousandValidators: 0,
      activeEra: 0,
      loading: true,
    }
  },
  computed: {
    thousandValitorsEstimatedDate() {
      return moment().add(this.daysLeftToReachThousandValidators, 'days')
    },
  },
  async created() {
    await this.getChainData()
  },
  methods: {
    async getChainData() {
      const erasPerDay = 4
      const wsProvider = new WsProvider(config.nodeWs)
      const api = await ApiPromise.create({ provider: wsProvider })
      const [{ block }, validatorAddresses, activeEra] = await Promise.all([
        api.rpc.chain.getBlock(),
        api.query.session.validators(),
        api.derive.staking.waitingInfo(),
        api.query.staking.activeEra(),
      ])
      this.blockHeight = parseInt(block.header.number.toString())
      this.currentNumberOfValidators = validatorAddresses.length
      this.daysLeftToReachThousandValidators =
        (1000 - this.currentNumberOfValidators) / erasPerDay
      this.activeEra = activeEra
      this.loading = false
    },
  },
}
</script>
