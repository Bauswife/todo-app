<template>
    <textarea autofocus class="data-input" v-model="data" :rows="rows" @input="emitInput()" :placeholder="placeholder"/>
</template>

<script>

export default {
    props: {
        rows: Number,
        placeholder: String
    },
    data: () => {
        return {
            data: ""
        }
    },
    methods: {
        emitInput() {
            this.$emit('input', this.data);
        }
    }
}
</script>

<style scoped>
    .data-input {
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        font-size: 20px;
        caret-color: var(--blue);
        font-family: var(--default-font);
    }
</style>