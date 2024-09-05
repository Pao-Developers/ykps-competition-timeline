<script setup lang="ts">
import TimelineView from "./views/TimelineView.vue"
</script>

<template>
    <div class="app-container">
        <div class="side-panel-container">
            <nav>
                <router-link to="/">Timeline</router-link> |
                <router-link to="/product">About</router-link>
            </nav>
        </div>
        <div class="main-panel-container">
            <TimelineView />
        </div>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Space Grotesk, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1e1e1e;
}

.app-container {
    display: flex;
    padding: 40px;
}

.base-panel-container {
    padding: 20px;
    background: #f1f1f1;
    border-radius: 30px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.main-panel-container {
    @extend .base-panel-container;
    flex-grow: 1;
    margin-left: 228px; /* 确保 main-panel-container 在 side-panel-container 右侧 */
}

.side-panel-container {
    @extend .base-panel-container;
    position: fixed; /* 使用 fixed 以确保它相对于视口定位 */
    top: 40px;
    bottom: 40px;
    left: 40px;
    width: 168px;
    max-height: calc(100% - 80px);
    overflow: auto;
}
</style>
