<template>
    <div id="app">
        <button v-on:click="toggle='thing-viewer'; getThings()">View all things</button>
        <button v-on:click="toggle='thing-creator'">Create a thing</button>
        <ThingViewer v-show="toggle==='thing-viewer'" :things="things"/>
        <ThingCreator v-show="toggle==='thing-creator'" />
    </div>
</template>

<script>
    import ThingViewer from './components/ThingViewer.vue'
    import ThingCreator from './components/ThingCreator.vue'
    import axios from "axios"

    export default {
        name: 'App',
        components: {
            ThingViewer,
            ThingCreator
        },
        data: function () {
            return {
                toggle: "thing-viewer",
                things: null
            }
        },
        methods: {
            getThings: function () {
                axios
                    .get('http://localhost:3000/things')
                    .then(response => (this.things = response.data))
            }
        },
        mounted: function () {
            this.getThings();
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
