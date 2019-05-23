<template>
    <div :class="['input', theme]">
        <input />
        {{theme}}
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this)
        }
    }
</script>

<style lang="less" scoped>
    @primary: #ff88bb;
    @dark: #3c3c3c;
    @default-size: 10px;
    @border-width: 1px;
    .input {
        border-width: @border-width;
        border-style: solid;
        &.primary {
            border-color: @primary;
        }
        &.dark {
            border-color: @dark;
        }
    }
</style>