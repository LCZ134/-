<template>
  <div class="header">
    <button @click="changth(list)">123</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: '456'
    }
  },
  methods: {
    changth(val) {
      this.$emit('aaa', val)
    }
  }
}
</script>
