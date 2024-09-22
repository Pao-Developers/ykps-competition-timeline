<template>
    <n-flex vertical class="timeline-container" ref="timelineContainer">
        <TimelineNode
            class="timeline-node"
            v-for="node in nodes"
            :key="node.id"
            :title="node.title"
            :description="node.description"
        />
    </n-flex>
</template>

<script lang="ts" setup>
import TimelineNode from "@/components/TimelineNode.vue"
import { onMounted, ref } from "vue"
import { NFlex } from "naive-ui"
import axios from "axios"

interface ITimelineNode {
    id: number
    title: string
    description: string
}

const nodes = ref<ITimelineNode[]>([])
const timelineContainer = ref<HTMLElement | null>(null)

onMounted(async () => {
    try {
        const response = await axios.get("/testNodeData.json")
        nodes.value = response.data
    } catch (error) {
        console.error("Error fetching timeline data:", error)
    }
})
</script>

<style scoped>
.timeline-container {
    position: relative;
    left: 60px;
    width: 100%;
    max-width: calc(100% - 60px);
}

/* Dots */
.timeline-node::before {
    content: "";
    position: absolute;
    left: -35px;
    top: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: #b4b4b4;
    border-radius: 50%;
}

/* The line */
.timeline-container::before {
    content: "";
    position: absolute;
    left: -35px;
    top: var(--line-top, 0);
    width: 2px;
    height: var(--line-height, 100%);
    background-color: #eeeeee;
    border-radius: 1px;
}
</style>
