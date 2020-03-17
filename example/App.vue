<template>
    <div class="container">
        <patch class="my-patch">
            <img src="https://via.placeholder.com/50x80" alt="">
        </patch>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Patch from '~/index.js';

    Vue.use(Patch);
    export default {};
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    body {
        -webkit-overflow-scrolling:touch;
    }

    .container {
        width: 100%;
        height: 1000px;
        max-width: 750px;
        margin: 0 auto;
        background: linear-gradient(#ffaa3c,#e62828);

        .my-patch {
            width: 50px;

            img {
                display: block;
            }
        }
    }
</style>
