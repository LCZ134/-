<template>
  <div>
    <slot name="my-header">头部默认值</slot>
    <slot :data="arr">
      <ul>
        <li v-for="item in arr" :key="item">{{item}}</li>
      </ul>
    </slot> 
    <slot name="my-footer">尾部默认值</slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arr:[123,23]
    }
  }
}
</script>