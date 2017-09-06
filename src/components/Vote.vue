<template>
  <div class="vote">
    <h2>{{ title }}</h2>
    <panel
      id="yes"
      label="yes"
      :onClickEvent="type.COUNTUP_YES">
    </panel>
    <panel
      id="no"
      label="no"
      :onClickEvent="type.COUNTUP_NO">
    </panel>
    <p>result: {{ result }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Panel from '@/components/molecules/Panel.vue'
import { mapGetters } from 'vuex'
import * as types from '../store/mutation-types'

@Component({
  name: 'vote',
  components: {
    Panel
  },
  computed: {
    ...mapGetters({
      result: 'getResult'
    })
  }
})
export default class Vote extends Vue {
  title = 'Do you like TypeScript?'
  result: string
  type = types
}
</script>
