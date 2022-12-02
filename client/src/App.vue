<template>
  <div>
    <!-- Hide header and footer when directed to 404 - Not Found page -->
    <page-header v-if="!isNotFound"></page-header> 
    <router-view></router-view>
    <page-footer v-if="!isNotFound"></page-footer>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import StateList from '@/components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList
  },
  computed: {
    isNotFound() { // If route is "NotFound" page, return so that header and footer can be hidden
      return this.$route.name === "NotFound"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
