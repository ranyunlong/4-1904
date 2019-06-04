<template>
    <Screen class="home">
        <Header>首页</Header>
        <div class="news-item">
            <div class="news-item-header">
                <img class="upic" src="../assets/img/upic.png" />
                <div class="info"></div>
                <img class="arrow-down" src="../assets/img/arrow-down.png" />
            </div>
        </div>
        <div class="photos" @click="$router.push('/news')">
            <div class="pic"></div>
            <div class="pic"></div>
            <div class="pic"></div>
        </div>
    </Screen>
</template>

<script>
    import Screen from '../components/Screen.vue'
    import Header from '../components/Header.vue'
    export default {
        components: {
            Screen,
            Header
        }
    }
</script>

<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header {
        height: 100px;
        background: #ff88bb;
    }
    
    .news-item-header {
        display: flex;
        padding: 20px 20px;
        height: 100px;
        box-sizing: border-box;
        align-items: center;
        .upic {
            width: 66px;
            height: 66px;
        }

        .info {
            flex: 1;
        }

        .arrow-down {
            width: 22px;
            height: 14px;
            align-self: flex-start;
        }
    }

    .photos {
        display: flex;
        justify-content: space-around;
    }

    .photos .pic {
        width: 30.55556vw;
        height: 30.55556vw;
        border: 1px solid #000;
        box-sizing: border-box;
    }
}
</style>