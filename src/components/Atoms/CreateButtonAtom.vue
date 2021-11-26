<template>
    <button class="create-button" @click="emitAction()" :disabled="isDisabled">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,  
            required: true
        },  
        isDisabled: {
            type: Boolean,
            required: true
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
    .create-button {
        cursor: pointer;
        padding: 10px;
        margin: 0px;
        width: 100%;
        border: none;
        background-color: var(--blue);
        color: white;
    }
    .create-button:hover {
        background-color: var(--light-blue);
    }
    .create-button:active {
        background-color: var(--dark-blue);
    } 
    .create-button:disabled {
        cursor: default;
        background-color: var(--light-grey);
    }
</style>