<template>
    <div
        ref="cube"
        :style="`position: fixed; bottom: ${patchBottom}px; right: ${patchRight}px;`"
        @touchstart="cubeStart($event)"
        @touchmove="cubeMove($event)"
        @touchend="cubeEnd($event)">
        <slot></slot>        
    </div>
</template>

<script>
    export default {
        name: 'patch',
        data () {
            return {
                right: 0,
                cubeWid: 0,
                cubeH: 0,
                startCoord: {},
                timer: null,
                initialBottom: 0
            };
        },
        props: {
            bottom: {
                type: Number,
                default: 100
            }
        },
        computed: {
            patchRight () {
                let winWid = window.innerWidth;
                if (this.right > winWid - this.cubeWid) {
                    return winWid - this.cubeWid;
                } else {
                    return this.right < 0 ? 0 : this.right;
                }
            },
            patchBottom () {
                let winH = window.innerHeight;
                if (this.initialBottom > winH - this.cubeH) {
                    return winH - this.cubeH;
                } else {
                    return this.initialBottom < 0 ? 0 : this.initialBottom;
                }
            }
        },
        mounted () {
            this.initialBottom = this.bottom;
            this.$nextTick(() => {
                this.cubeWid = this.$refs.cube.clientWidth;
                this.cubeH = this.$refs.cube.clientHeight;
            });
        },
        methods: {
            cubeStart (e) {
                if (this.timer) clearInterval(this.timer);
                this.startCoord = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                };
            },
            cubeMove (e) {
                let curCoord = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                };

                this.initialBottom -= curCoord.y - this.startCoord.y;
                this.right -= curCoord.x - this.startCoord.x;
                this.startCoord = curCoord;
            },
            cubeEnd (e) {
                this.initialBottom = this.patchBottom;
                this.right = this.patchRight;

                if (this.right + this.cubeWid / 2 < window.innerWidth / 2) {
                    this.backToSide('left');
                } else {
                    this.backToSide('right');
                }
            },
            backToSide (dir) {
                this.timer = setInterval(() => {
                    if (this.right <= 0 || this.right >= window.innerWidth - this.cubeWid) {
                        clearInterval(this.timer);
                        this.right = this.right <= 0 ? 0 : window.innerWidth - this.cubeWid;
                        return false;
                    }
                    this.right = dir === 'left' ? this.right - 20 : this.right + 20;
                }, 10);
            }
        }
    };
</script>
