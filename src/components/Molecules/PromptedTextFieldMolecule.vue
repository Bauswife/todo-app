<template>
    <div>
        <p id="prompt">{{prompt}}</p>
        <TextFieldAtom :rows="rows" @input="data => emitInput(data)"/>
    </div>
</template>

<script>
import TextFieldAtom from '../Atoms/TextFieldAtom.vue'

export default {
    components: { TextFieldAtom },
    props: {
        rows: Number,
        prompt: String
    },
    methods: {
        emitInput(data) {
            this.$emit('input', data)
        }
    }
}
</script>

<style scoped>
    #prompt {
        font-size: 12px;
        color: var(--grey);
        margin-bottom: 0px;
    }
</style>