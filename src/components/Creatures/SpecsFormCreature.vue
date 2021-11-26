<template>
    <div class="specs">
        <TaskSpecAtom 
            :icon="'#bell'" :hasChanged="date != ''"
        >
            <input class="specs__input" type="datetime-local" v-model="date" 
                @input="dateInput()"
            />
        </TaskSpecAtom>
        <TaskSpecAtom 
            :icon="'#paper'" :hasChanged="note != ''"
        >
            <input class="specs__input" id="note-input" v-model="note" placeholder="Add note" 
                @input="noteInput()"
            />
        </TaskSpecAtom>
        <TaskSpecAtom 
            :icon="calcIcon" :selectedIconColor="calcIconColor" :hasChanged="listIndex != -1"
        >
            <ListDropdownAtom :lists="lists" :textColor="calcIconColor" 
                @listInput="data => listInput(data)"
            />
        </TaskSpecAtom>
    </div>
</template>

<script>
import ListDropdownAtom from '../Atoms/ListDropdownAtom.vue'
import TaskSpecAtom from '../Atoms/TaskSpecAtom.vue'
export default {
    components: { TaskSpecAtom, ListDropdownAtom },
    data: () => {
        return {
            date: "",
            note: "",
            listIndex: -1
        }
    },
    props: {
        lists: Array
    },
    methods: {
        dateInput() {
            this.$emit('dateInput', this.date)
        },
        noteInput() {
            this.$emit('noteInput', this.note)
        },
        listInput(data) {
            this.listIndex = data;
            this.$emit('listInput', data);
        },
    },
    computed: {
        calcIcon() {
            if (this.noneSelected) {
                return '#tag';
            }
            return this.lists[this.listIndex].icon;
        },
        calcIconColor() {
            if (this.noneSelected) {
                return '#aaa';
            }
            return this.lists[this.listIndex].color;
        },
        noneSelected() {
            return (this.lists.length == 0 || this.listIndex == -1);
        }
    }
}
</script>

<style scoped>
    .specs {
        border-top: 1px solid var(--grey);
    }
    .specs__input {
        border: none;
        flex-grow: 1;
        outline: none;
        font-family: var(--default-font);
    }
</style>