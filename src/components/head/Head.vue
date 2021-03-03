<template>
  <div class="wraper">
    {{ title }}
  </div>
</template>

<script>
export default {
    name : 'Head',
    props : {
      title : {
        type : String,
        default : '猫眼电影'
      }
    }
}
</script>

<style lang="scss" scoped>
  .wraper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: red;
    color: #fff;
    font-size: .48rem;
    height: 1.333rem;
    line-height: 1.333rem;
    text-align: center;
  }
</style>