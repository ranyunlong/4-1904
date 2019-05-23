<template>
  <div id="app">
    <!-- <div class="box active">
      <input />
    </div> -->
    <Button type="warning"/>
  </div>
</template>

<script>
// 只要不是全局组件 都需要先导入，然后注册 然后才能使用
// import Button from './components/Button.vue'

export default {};
</script>


<style lang="less" >
// 在使用less 之前必须现按照 less 和less-loader
// 1. 样式派生
@import './style/var.less';

#app {
  width: 100vw;
  height: 100vh;
  background: #fff;
  // .box {
  //   width: 100px;
  //   height: 100px;
  //   background: @primary;
  //   // 加&是用来连接box的样式 <div class="box active"></div>
  //   // &.active {
  //   //   background: #ccc;
  //   // }
  //   &:hover {
  //     background: @warning;
  //   }
  //   // 没有&就是包含选择器
  //   input {
  //     border: 1px solid #000;
  //   }
  // }
}


</style>
