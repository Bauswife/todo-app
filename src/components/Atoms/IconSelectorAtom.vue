<template>
    <div class="icon-selector">
        <svg 
            v-for="(icon, index) in icons" :key="index" 
            class="icon-selector__icon" 
            :style="{fill: colors[colorIndex], top: iconCircle.y[index], left: iconCircle.x[index]}"
            @click="emitIconInput(index)"
        >
            <use :href="icon"/>
        </svg>            
        <svg 
            v-for="(color, index) in colors" :key="index" 
            class="icon-selector__color" 
            :style="{fill: color, top: colorCircle.y[index], left: colorCircle.x[index]}"
            @click="emitColorInput(index)"
        >
            <use :href="icons[iconIndex]"/>
        </svg>
        <svg class="icon-selector__chosenIcon" 
            :style="{fill: colors[colorIndex], top: circleMidY-10, left: circleMidX-10}"   
        >
            <use :href="icons[iconIndex]"/>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        icons: Array,
        colors: Array,
        colorIndex: Number,
        iconIndex: Number
    },
    data: () => {
        return {
            
            circleMidY: 95
        }
    },
    methods: {
        createCircle(radius, length) {
            const angle = 2*Math.PI/length;
            var positions = {x: [], y: []};
            for (var i = 0; i < length; ++i) {
                positions.x.push(this.circleMidX + radius*Math.cos(i*angle));
                positions.y.push(this.circleMidY + radius*Math.sin(i*angle));
            }
            return positions;
        },
        emitIconInput(index) {
            this.$emit('iconInput', index)
        },
        emitColorInput(index) {
            this.$emit('colorInput', index)
        }
    },
    computed: {
        iconCircle() {
            return this.createCircle(50, this.icons.length);
        },
        colorCircle() {
            return this.createCircle(75, this.colors.length);
        },
        circleMidX() {
            return this.myWidth / 2 - 65;
        },
        myWidth() {
            return window.innerWidth; 
        },
    }
}
</script>

<style scoped>
    .icon-selector {
        position: relative;
        flex-grow: 1;
    }
    .icon-selector__chosenIcon {
        position: absolute;
        width: 50px;
        height: 50px;
    }
    .icon-selector__icon, .icon-selector__color {
        position: absolute;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
</style>