import TimelineNode from '../components/TimelineNode.vue'; import TimelineView
from '@/views/TimelineView.vue';
<template>
    <div class="timeline">
        <TimelineNode
            v-for="node in nodes"
            :key="node.id"
            :title="node.title"
            :description="node.description"
        />
    </div>
</template>

<script lang="ts" setup>
import TimelineNode from "@/components/TimelineNode.vue"
import { ref } from "vue"
import axios from "axios"

const nodes = ref([
    { id: 1, title: "First Node", description: "This is the first node" },
    { id: 2, title: "Second Node", description: "This is the second node" },
    { id: 3, title: "Third Node", description: "This is the third node" },
])

axios.get("http://localhost:3000/timeline").then((response) => {
    nodes.value = response.data
})
</script>

<style></style>
