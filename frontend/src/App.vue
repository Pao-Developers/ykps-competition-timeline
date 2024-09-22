<template>
    <n-layout style="max-height: 100%" has-sider position="absolute">
        <n-layout-sider
            bordered
            :width="256"
            :collapsed="sideBarCollapsed"
            collapse-mode="width"
            :collapsed-width="64"
            @collapse="sideBarCollapsed = true"
            @expand="sideBarCollapsed = false"
        >
            <n-menu
                :options="menuOptions"
                :value="activeKey"
                :icon-size="16"
                :collapsed="sideBarCollapsed"
                :collapsed-width="64"
                :collapsed-icon-size="24"
            />
            <n-button circle class="collapse-button" @click="collapseSideBar">
                <left v-if="!sideBarCollapsed" />
                <right v-if="sideBarCollapsed" />
            </n-button>
        </n-layout-sider>
        <n-layout-content
            content-class="router-view"
            content-style="padding: 10px"
            :native-scrollbar="false"
            bordered
            embedded
        >
            <router-view class="router-view" />
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts">
import { HomeTwo, Info, Left, Right } from "@icon-park/vue-next"
import {
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NMenu,
    MenuOption,
    NButton,
} from "naive-ui"
import { h, watch, ref } from "vue"
import { RouterLink, useRoute } from "vue-router"

const route = useRoute()
const activeKey = ref<string | null>(null)

watch(
    route,
    (newRoute) => {
        activeKey.value = newRoute.name as string
    },
    { immediate: true }
)

const sideBarCollapsed = ref(true)

const collapseSideBar = () => {
    sideBarCollapsed.value = !sideBarCollapsed.value
}

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: "app" } },
                { default: () => "Timeline" }
            ),
        key: "app",
        icon: () =>
            h(HomeTwo, {
                style: {
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }),
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: "about" } },
                { default: () => "Product" }
            ),
        key: "about",
        icon: () =>
            h(Info, {
                style: {
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }),
    },
]
</script>

<style lang="scss">
// Font Space Grotesk
// This seems to be working in Mainland China
// Maybe consider adding a fallback url if needed
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

#app {
    font-family: "Space Grotesk", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1f1f1f;
}

.collapse-button {
    position: fixed;
    bottom: 20px;
    left: 32px;
    transform: translateX(-50%);
}
</style>
