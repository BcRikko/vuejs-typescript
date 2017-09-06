<template>
  <div class="my-button">
    <button class="button" @click="onClick">{{ label }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'my-button',
  props: {
    label: {
      type: String,
      required: true
    },
    onClickEvent: {
      type: String,
      required: true
    }
  }
})
class MyButton extends Vue {
  // props
  label: string
  onClickEvent: string

  onClick () {
    this.$store.dispatch(this.onClickEvent)
  }
}
Vue.component('my-button', MyButton)

export default MyButton
</script>
