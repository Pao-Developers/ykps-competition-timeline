<template>
    <n-card :title="title" hoverable class="timeline-node">
        {{ description }}
    </n-card>
</template>

<script lang="ts" setup>
import { NCard } from "naive-ui"
import { defineProps } from "vue"

defineProps({
    title: String,
    description: String,
})
</script>

<style>
.timeline-node {
    width: 100%;
    max-width: 100%;
}
</style>
