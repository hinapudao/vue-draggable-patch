<template>
    <div class="container">
        <patch :bottom="100" class="my-patch">
            <img src="https://via.placeholder.com/50x80" alt="">
        </patch>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Patch from '@/index.js';
    console.log(Patch);
    // Vue.use(Patch);
    Vue.component(Patch.name, Patch);
    export default {};
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        height: 1000px;
        max-width: 750px;
        background: #eee;
        margin: 0 auto;
        background: linear-gradient(#ffaa3c,#e62828);

        .my-patch {
            width: 50px;
            // height: 50px;
            background: #ddd;
            text-align: center;
            border: 1px solid #333;

            img {
                display: block;
            }
        }
    }
</style>
