<template>
    <div class="content">
        <div class="content__list">
            <HomeHeaderAtom @click="showListCreatorModal = true"/>
            <TeaserAtom v-for="(item, index) in lists" :key="index"
                :imgSrc="item.icon"
                :title="item.title"
                :color="item.color"
                :taskSpec="item.tasks.length"
                @action="goToView(item.id)"
            />
        </div>
        <ModalShell v-if="showListCreatorModal">
            <ListCreationView 
                :icons="icons"
                :colors="colors"
                @create="data => createList(data)"
                @cancel="showListCreatorModal=false"
            />
        </ModalShell>
        <ModalShell v-if="showTaskCreatorModal">
            <TaskCreationView 
                :lists="lists"
                @create="data => createTask(data)"
                @cancel="showTaskCreatorModal = false"
            />
        </ModalShell>
        <PlusButtonAtom class="content__plus-button" v-if="showTaskButton" @click="showTaskCreatorModal=true"/>
        
    </div>
</template>

<script>
import TeaserAtom from '../Atoms/TeaserAtom.vue';
import ModalShell from '../Atoms/ModalShellAtom.vue';
import ListCreationView from './ListCreationView.vue';
import TaskCreationView from './TaskCreationView.vue';
import colorCodes from '../../data/colors.js';
import iconIDs from '../../data/icons.js';
import PlusButtonAtom from '../Atoms/PlusButtonAtom.vue';
import HomeHeaderAtom from '../Atoms/HomeHeaderAtom.vue';

export default {
    components: { TeaserAtom, ModalShell, ListCreationView, TaskCreationView, PlusButtonAtom, HomeHeaderAtom },
    data: () => {
        return {
            showListCreatorModal: false,
            showTaskCreatorModal: false,
            colors: colorCodes,
            icons: iconIDs
        }
    },
    computed: {
        showModal() {
            return this.showListCreatorModal || this.showTaskCreatorModal;
        },
        showTaskButton() {
            return (!this.showModal) && (this.lists.length > 0);
        },
        lists() {
            return this.$store.getters.getLists;
        },
    },
    methods: {
        createList(data) {
            this.showListCreatorModal = false;
            this.$store.dispatch('addList', data)
        },
        createTask(data) {
            this.showTaskCreatorModal = false;
            this.$store.dispatch('addTask', data)
        },
        goToView(listID) {
            this.$router.push({
                name: 'viewer', 
                params: {
                    id: listID
                }
            });
        }
    }
}
</script>

<style scoped>
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        font-family: var(--default-font);
    }
    .content__list {
        width: 290px;
    }
    .content__plus-button {
        position: fixed;
        right: 20px;
        bottom: 20px;
    }
</style>