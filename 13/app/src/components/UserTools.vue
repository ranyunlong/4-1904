<template>
    <div class="user-tools">
        <Button @click="$emit('edit')" type="success" size="small">编辑</Button>
        <Button  @click="$emit('del')" type="error" size="small">删除</Button>
    </div>
</template>

<script>
    export default {
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
.user-tools {
    display: flex;
    justify-content: space-between;
}
</style>