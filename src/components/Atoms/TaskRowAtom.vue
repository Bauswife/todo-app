<template>
    <div class="row">
        <div class="row__specs">
            <p class="row__specs__title" :style="{color: titleColor, textDecoration: titleDecoration}">{{task.title}}</p>
            <p class="row__specs__time-spec" :style="{color: getColor}">{{timeSpec}}</p>
        </div>
        <svg class="row__checkbox" @click="emitAction()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 125" version="1.1" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g :fill="color"><path d="M8,15.9972248 C8,11.5804795 11.5825036,8 15.9972248,8 L84.0027752,8 C88.4195205,8 92,11.5825036 92,15.9972248 L92,84.0027752 C92,88.4195205 88.4174964,92 84.0027752,92 L15.9972248,92 C11.5804795,92 8,88.4174964 8,84.0027752 L8,15.9972248 L8,15.9972248 Z M46.1421356,54.627417 L37.6568542,46.1421356 L32,51.7989899 L46.1421356,65.9411255 L50.3847763,61.6984848 L70.4264069,41.6568542 L64.7695526,36 L46.1421356,54.627417 L46.1421356,54.627417 L46.1421356,54.627417 L46.1421356,54.627417 Z"/></g></g></svg>
    </div>
</template>

<script>
export default {
    props: {
        task: Object,
        type: String,
        color: String
    },
    computed: {
        timeSpec() {
            const month = this.task.date.toLocaleString('default', { month: 'long' });
            const day = this.task.date.getDate();
            var hour = this.task.date.getHours();
            hour = hour.toString().padStart(2, "0");
            var minutes = this.task.date.getMinutes();
            minutes = minutes.toString().padStart(2, "0");
            switch(this.type) {
                case "late":
                    return "" + hour + ":" + minutes + " · " + month + " " + day;
                case "today":
                    return "" + hour + ":" + minutes;
                case "done":
                    return "" + hour + ":" + minutes;
                default:
                    return "";
            }
        },
        getColor() {
            switch(this.type) {
                case "late":
                    return "#f66";
                case "today":
                    return "#aaa";
                case "done":
                    return "#ccc";
                default:
                    return "#aaa";
            }
        },
        titleColor() {
            if (this.type == "done") {
                return this.color;
            }
            return "black";
        },
        titleDecoration() {
            if (this.type == "done") {
                return "line-through";
            }
            return "none";
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
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .row__checkbox {
        cursor: pointer;
        height: 20px;
        width: 20px;
    }
    .row__specs {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .row__specs__title {
        margin-bottom: 0px;
    }
    .row__specs__time-spec {
        margin-top: 0px;
        font-size: 12px;
        color: var(--grey);
    }
</style>
