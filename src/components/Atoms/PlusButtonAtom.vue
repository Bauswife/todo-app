<template>
    <button class="button" @click="emitClick()">
        <div class="button__plus">
            &#65291;
        </div>
    </button>
</template>

<script>
export default {
    methods: {
        emitClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
    .button {
        cursor: pointer;
        background-color: cornflowerblue;
        color: white;
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 30px;
        padding: 0px;
    }
    .button__plus {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        width: inherit;
        font-size: 30px;
    }
    .button:hover {
        background-color: var(--light-blue);
    }
    .button:active {
        background-color: var(--dark-blue);
    } 
</style>