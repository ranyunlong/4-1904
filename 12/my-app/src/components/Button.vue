<template>
    <button :class="['btn', 'btn-' + type]">
        <Icon type="like" />    
        <slot/>
    </button>
</template>

<script>
    export default {
        props: {
            type: String,
            color: String
        }
    }
</script>

<style lang="less" scoped>
@import '../style/var.less';
.border(@w: 1px, @s: solid) {
    border-width: @w;
    border-style: @s;
}

.box {
    border-radius: 50%;
}

.btn {
    .box();
   .border(5px);
    outline: none;
}

.btn-fn(@color; @font: @font-white) {
    background-color: @color;
    border-color: @color;
    color: @font;
    &:hover {
        // darken 颜色加深10%
        background-color: darken(@color, 10%);
        border-color: darken(@color, 10%);
        
        // lighten 颜色变浅10%
        // background-color: lighten(@primary, 10%);
        // border-color: lighten(@primary, 10%);
    }
}

.btn-primary {
    .btn-fn(@primary)
}

.btn-error {
    .btn-fn(@error)
}

.btn-warning {
    .btn-fn(@warning, blue)
}
</style>