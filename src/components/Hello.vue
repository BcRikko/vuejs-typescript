<template>
  <div class="hello">
    <h1>{{ propsMessage }}</h1>
    <input type="text" v-model="input">
    <h2>{{ input }}</h2>
    <button @click="onClick">onClick</button>
    <ul>
      <li v-for="item in filteredList" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'hello',
  props: {
    propsMessage: String,
    clickEvent: String
  }
})
export default class Hello extends Vue {
  // local state
  msg = 'Welcome to Your Vue.js App'
  input = 'a'
  list:string[] = ['apple', 'apricot', 'avocado', 'banana', 'bilberry', 'blackberry', 'blackcurrant', 'blueberry', 'boysenberry']

  // props
  propsMessage: string
  clickEvent: string

  // mounted
  mounted () {
    console.log('mounted')
  }

  // computed
  get filteredList () {
    return this.list.filter(a => a.indexOf(this.input) > -1)
  }

  // methods
  onClick () {
    window.alert('clicked ' + this.propsMessage)
    this.$emit(this.clickEvent, this.input)
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
