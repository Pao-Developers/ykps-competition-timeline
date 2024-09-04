<template>
    <h1>
        {{ title }}
    </h1>
    <p>
        {{ description }}
    </p>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String,
    description: String,
})
</script>
