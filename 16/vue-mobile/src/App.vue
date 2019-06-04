<template>
  <div id="app">
    <transition
        :enter-active-class="enter"
        :leave-active-class="leave"
    >
        <router-view />
    </transition>
  </div>
</template>

<script>
import './assets/styles/style.css'
export default {
    data() {
        return {
            enter: 'animated slideInLeft',
            leave: 'animated slideOutRight'
        }
    },
    watch: {
        $route(to, from) {
            // console.log(to, from)
            const len1 = to.path.split('/').filter(item => item !== '').length
            const len2 = from.path.split('/').filter(item => item !== '').length
            if (len1 > len2) {
                this.enter = 'page slideInLeft'
                this.leave = 'page slideOutRight'
            } else if (len1 < len2) {
                this.enter = 'page slideInRight'
                this.leave = 'page slideOutLeft'
            }
        }
    }
}
</script>

<style>
body {
    margin: 0;
}

.page {
    animation-duration: .5s;
}

#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
