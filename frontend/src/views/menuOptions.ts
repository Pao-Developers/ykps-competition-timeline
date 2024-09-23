import { HomeTwo, Info, Search } from "@icon-park/vue-next"
import { MenuOption } from "naive-ui"
import { h } from "vue"
import { RouterLink } from "vue-router"

export const menuOptions: MenuOption[] = [
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
                { to: { name: "search" } },
                { default: () => "Search" }
            ),

        key: "search",
        icon: () =>
            h(Search, {
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
