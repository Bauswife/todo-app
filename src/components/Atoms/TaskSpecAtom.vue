<template>
    <div class="row">
        <svg class="row__icon"
            :style="{fill: iconColor}"   
        >
            <use :href="icon"/>
        </svg>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        selectedIconColor: {
            type: String,
            default: "cornflowerblue"
        },
        hasChanged: Boolean
    },
    data: () => {
        return {
            defaultIconColor: '#aaa'
        }
    },
    computed: {
        iconColor() {
            if (this.hasChanged) {
                return this.selectedIconColor;
            }
            return this.defaultIconColor;
        }
    }
    
}
</script>
<style scoped>
    .row {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
    }
    .row__icon {
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
</style>