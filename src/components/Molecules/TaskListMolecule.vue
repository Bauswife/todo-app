<template>
    <div v-show="taskList.length > 0">
        <h5 class="list-header">{{header}}</h5>
        <div v-for="(item, index) in taskList" :key="index">
            <TaskRowAtom :task="item"
                :type="taskType"
                :color="taskColor"
                @action="emitAction(item)"
            />
        </div>
    </div>
</template>

<script>
import TaskRowAtom from '../Atoms/TaskRowAtom.vue'

export default {
    components: { TaskRowAtom },
    props: {
        taskList: Array,
        header: String,
        taskType: String,
        taskColor: String
    },
    methods: {
        emitAction(item) {
            this.$emit('action', item);
        }
    }
}
</script>

<style scoped>
    .list-header {
        color: var(--grey);
    }
</style>