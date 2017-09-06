<template>
  <div class="panel">
    <my-button
      :label="label"
      :onClickEvent="onClickEvent">
    </my-button>
    <p>{{ counter }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { IState } from '../../store/state'
import MyButton from '@/components/atoms/MyButton.vue'

@Component({
  name: 'panel',
  props: {
    id: {
      type: String,
      required: true,
      validator: (val: string) => {
        return ['yes', 'no'].indexOf(val) > -1
      }
    },
    label: {
      type: String,
      required: true
    },
    onClickEvent: {
      type: String,
      required: true
    }
  },
  components: {
    MyButton
  }
})
export default class Panel extends Vue {
  // props
  id: string
  label: string
  onClickEvent: string

  // computed
  get counter () {
    const state: IState = this.$store.state
    return state[this.id].count
  }
}
</script>
