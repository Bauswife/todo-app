<template>
    <div class="container" :style="{backgroundColor: list.color}">
        <ListViewHeaderAtom :icon="list.icon" :iconColor="list.color" :title="list.title" :nOfTasks="tasks.length"
            @back="goBack()"
        />
        <div class="container__list">
            <TaskListMolecule :taskList="lateTasks" :header="'Late'" :taskType="'late'" :taskColor="'#aaa'"
                @action="task => complete(task)"
            />
            <TaskListMolecule :taskList="tasksDueToday" :header="'Today'" :taskType="'today'" :taskColor="'#aaa'"
                @action="task => complete(task)"
            />
            <TaskListMolecule :taskList="completedTasks" :header="'Done'" :taskType="'done'" :taskColor="list.color"
                @action="task => uncomplete(task)"
            />
        </div>
    </div>
</template>

<script>
import ListViewHeaderAtom from '../Atoms/ListViewHeaderAtom.vue';
import TaskListMolecule from '../Molecules/TaskListMolecule.vue';
import {mapGetters} from 'vuex';

function compare(a,b) {
  if (a.date < b.date)
     return -1;
  if (a.date > b.date)
    return 1;
  return 0;
}

export default {
    components: { TaskListMolecule, ListViewHeaderAtom },
    computed: {
        list() {
            return this.getListByID(this.$route.params.id);
        },
        tasksDueToday() {
            var output = [];
            var today = this.midnightToday;
            for (var task of this.tasks) {
                if (this.isSameDay(task.date, today)) {
                    output.push(task);
                }
            }
            return output.sort(compare);
        },
        lateTasks() {
            var output = [];
            var today = this.midnightToday;
            for (var task of this.tasks) {
                if (task.date < today) {
                    output.push(task);
                }
            }
            return output.sort(compare);
        },
        midnightToday() {
            return this.removeTime(new Date());
        },
         tasks() {
            return this.getTasks(this.list.id)
        },
        completedTasks() {
            return this.getCompletedTasks(this.list.id)
        }, 
        ...mapGetters({
            getTasks: 'getTasks', 
            getCompletedTasks: 'getCompletedTasks',
            getListByID: 'getListByID'
        })
    },
    methods: {
        isSameDay(day1, day2) {
            return ((day1.getFullYear() == day2.getFullYear()) && (day1.getMonth() == day2.getMonth()) && (day1.getDate() == day2.getDate()));
        },
        removeTime(date) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
            return date;
        },
        complete(task) {
            let payload = {
                listID: this.list.id,
                taskID: task.id
            }
            this.$store.dispatch('completeTask', payload)
        },
        uncomplete(task) {
            let payload = {
                listID: this.list.id,
                taskID: task.id
            }
            this.$store.dispatch('uncompleteTask', payload)
        },
        goBack() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;
        font-family: var(--default-font);
    }
    .container__list {
        background-color: var(--default-background);
        padding: 30px;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        flex-grow: 1;
        color: black;
        display: flex;
        flex-direction: column;
    }
</style>
