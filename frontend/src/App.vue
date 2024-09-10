<template>
    <n-layout has-sider style="height: 100%">
        <n-layout-sider
            bordered
            :width="256"
            show-trigger
            :collapsed="sideBarCollapsed"
            collapse-mode="width"
            :collapsed-width="64"
            @collapse="sideBarCollapsed = true"
            @expand="sideBarCollapsed = false"
        >
            <n-menu
                :options="menuOptions"
                v-model:value="activeKey"
                :icon-size="16"
                :collapsed="sideBarCollapsed"
                :collapsed-width="64"
                :collapsed-icon-size="24"
            />
        </n-layout-sider>
        <n-layout>
            <n-layout-header> Header Placeholder </n-layout-header>
            <n-layout-content>
                <router-view />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import { HomeTwo, Info } from "@icon-park/vue-next"
import {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NMenu,
    MenuOption,
} from "naive-ui"
import { h, ref } from "vue"
import { RouterLink, useRoute } from "vue-router"

const activeKey = ref(useRoute().name?.toString())
const sideBarCollapsed = ref(true)

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: "app", params: { lang: "zh-CN" } } },
                { default: () => "Timeline" }
            ),
        key: "app",
        icon: () => h(HomeTwo),
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: "about", params: { lang: "zh-CN" } } },
                { default: () => "Product" }
            ),
        key: "about",
        icon: () => h(Info),
    },
]
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

#app {
    font-family: "Space Grotesk", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1f1f1f;
}

html,
body,
#app {
    height: 100%;
    margin: 0;
}
</style>
