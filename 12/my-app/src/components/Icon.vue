<template>
    <i :class="['iconfont', 'icon-' + type]"></i>
</template>

<script>
    import '../assets/fonts/iconfont.css';
    export default {
        props: {
            type: String
        }
    }
</script>
