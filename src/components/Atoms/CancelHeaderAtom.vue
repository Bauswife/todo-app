<template>
    <div class="header">
        <h3 class="header__white-x">&#10005;</h3>
        <h3 class="header__text">{{text}}</h3>
        <h3 class="header__black-x" @click="emitCancel()">&#10005;</h3>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    },
    methods: {
        emitCancel() {
            this.$emit('cancel');
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
    }
    .header__white-x {
        cursor: default;
        color: var(--default-background);
        margin-top: 0px;
    }
    .header__black-x {
        cursor: pointer;
        margin-top: 0px;
    }
    .header__text {
        margin-top: 0px;
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }
</style>