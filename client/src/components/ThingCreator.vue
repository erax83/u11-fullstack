<template>
    <div class="thing-creator">
        <h1>Thing Creator</h1>
        <label for="thing-name">Character Name: </label>
        <input type="text" id="thing-name" v-model="name" placeholder="Enter a thing name" /> <br /><br />
        <button v-on:click="postThing">Create Thing</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ThingCreator',
        data: function () {
            return {
                name: null
            }
        },
        methods: {
            postThing: function () {
                axios
                    .post('http://localhost:3000/things', {
                        name: this.name
                    });
            }
        }
    }
</script>

<style scoped>

</style>