# vue-draggable-patch

VueDraggablePatch适用于vue.js `2.x` 版本。解决移动端可拖动挂角贴片touch拖拽、自动吸附的交互。

## 安装

```shell
npm install vue-draggable-patch -S
```

## 使用

`patch`组件接收自定义的slot作为贴片内容渲染，默认距离底部定位`100px`，可通过传入`buttom`props覆盖默认值。

```html
<template>
    <div class="main">
        <patch :bottom="100" class="demo">
            <img src="https://via.placeholder.com/50" alt="">
        </patch>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueDraggablePatch from 'vue-draggable-patch';

    Vue.use(VueDraggablePatch);

    /**
     * or
     * Vue.component(Patch.name, Patch);
     */
    
    export default {};
</script>

<style>
    .demo img {
        display: block;
    }
</style>
```

## API

| key | 描述 | 类型 |
| ----- | ----- | ----- |
| bottom | 贴片距底部的初始距离 | Number |

## 语法规范

VueDraggablePatch通过`umd`兼容模式打包，支持`amd`、`commonsjs`、`commonsjs2`、`window`全局变量等方式引入。

## 版本

+ `1.0.1`: bug fix, 贴片滑动过程阻止默认事件
+ `1.0.0`: 基本交互完成
