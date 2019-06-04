<template>
    <div class="screen">
        <slot/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.screen {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #000;
    box-sizing: border-box;
}
</style>