<template>
    <div class="header">
        <h1 class="header__title">Lists</h1>
        <button class="header__add-list" 
            @click="emitClick()"
        >
            Add List &#65291;
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        emitClick() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .header__title {
        flex-grow: 1;
    }
    .header__add-list {
        height: 26px;
        border-radius: 13px;
        border: none;
        color: white;
        cursor: pointer;
        background-color: var(--blue);
        display: flex;
        align-items: center;
    }
    .header__add-list:hover {
        background-color: var(--light-blue);
    }
    .header__add-list:active {
        background-color: var(--dark-blue);
    } 
    .header__add-list:disabled {
        background-color: var(--grey);
    }
</style>