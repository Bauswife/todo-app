<template>
    <div class="header">
        <div class="header__icon-circle" @click="emitBack()">
            <svg class="header__icon-circle__icon" :style="{fill: iconColor}">
                <use :href="icon"/>
            </svg>
        </div>
        <h1>{{title}}</h1>
        <h3>{{nOfTasks}} tasks</h3>
    </div>
</template>

<script>
export default {
    props: {
        iconColor: String,
        icon: String,
        title: String,
        nOfTasks: Number
    },
    methods: {
        emitBack() {
            this.$emit('back');
        }
    }
}
</script>

<style scoped>
    .header {
        padding: 30px;
        display: flex;
        flex-direction: column;
    }
    h1 {
        margin-bottom: 0px;
    }
    h3 {
        font-weight: lighter;
        margin-top: 0px;
    }
    .header__icon-circle {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        background-color: var(--default-background);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .header__icon-circle__icon {
        margin-top: 5px;
        height: 50px;
        width: 50px;
        align-self: center;
    }
</style>