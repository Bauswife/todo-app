<template>
    <div class="body" @click="emitAction()">
        <div class="body__outer-box">
            <svg class="body__outer-box__icon" :style="{fill: color}">
                <use :href="imgSrc"/>
            </svg>
            <div class="body__outer-box__inner-box">
                <p class="body__outer-box__inner-box__task-spec">{{taskSpec}} {{specString}}</p>
                <p class="body__outer-box__inner-box__title">{{title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: String,
        title: String,
        color: String,
        taskSpec: Number
    },
    computed: {
        specString() {
            var output = "task";
            if (this.taskSpec != 1) {
                output += "s";
            }
            return output;
        }
    },
    methods: {
        emitAction() {
            this.$emit('action');
        }
    }
}
</script>

<style scoped>
    .body {
        cursor: pointer;
        width: 100px;
        height: 100px;
        padding: 15px;
        border-radius: 5px;
        background-color: var(--default-background);
        box-shadow: 0px 0px 10px #e5e5e5;
        margin: 7px;
        display: inline-block;
        font-family: var(--default-font);
    }
    .body__outer-box {
        display: flex;
        flex-direction: column;
        height: inherit;
    }
    .body__outer-box__icon {
        width: 30px;
        height: 30px;
    }
    .body__outer-box__inner-box {
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1;
    }
    .body__outer-box__inner-box__title {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .body__outer-box__inner-box__task-spec {
        font-size: 10px;
        margin: 0px;
        color: var(--grey);
    }
</style>