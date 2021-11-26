<template>
    <select class="dropdown" v-model="selected" :style="{color: textColor}" @change="emitInput()">
        <option disabled :value="-1">
            Category
        </option>
        <option v-for="(item, index) in lists" :key="index" :value="index">
            {{item.title}}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        lists: Array,
        textColor: String,
    },
    data: () => {
        return {
            selected: -1
        }
    },
    methods: {
        emitInput() {
            this.$emit('listInput', this.selected);
        }
    }
}
</script>

<style scoped>
    .dropdown {
        appearance: none;
        border: none;
        outline: none;
    }
</style>