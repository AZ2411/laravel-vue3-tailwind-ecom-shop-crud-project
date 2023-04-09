<template>
  <sidebar>
    <slot>
      <router-view></router-view>
    </slot>
  </sidebar>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  components: { Sidebar },

}
</script>

<style>

</style>