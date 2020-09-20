<template>
    <div class="thing-viewer">
        <h1>Thing Viewer</h1>
        <p v-for="(thing, index) in things" v-bind:key="index">{{thing.name}} is something!</p>
    </div>
</template>

<script>
    export default {
        name: 'ThingViewer',
        props: {
            things: Array
        }
    }
</script>

<style scoped>

</style>