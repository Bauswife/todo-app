<template>
    <div id="container" v-on:keyup.enter="enter()">
        <CancelHeaderAtom 
            :text="'New List'" 
            @cancel="emitCancel()"
        />
        <TextFieldAtom 
            :placeholder="'Choose title...'" :rows="1" 
            @input="data => title = data"
        />
        <IconSelectorAtom 
            :colors="colors" :colorIndex="color" :icons="icons" :iconIndex="icon"
            @iconInput="data => icon = data"
            @colorInput="data => color = data"
        />
        <CreateButtonAtom
            :isDisabled="incompleteForm" :text="'Create'"
            @action="emitCreate()"
        />
    </div>
</template>

<script>
import CancelHeaderAtom from '../Atoms/CancelHeaderAtom.vue';
import CreateButtonAtom from '../Atoms/CreateButtonAtom.vue';
import IconSelectorAtom from '../Atoms/IconSelectorAtom.vue';
import TextFieldAtom from '../Atoms/TextFieldAtom.vue';
export default {
    components: { CreateButtonAtom, CancelHeaderAtom, IconSelectorAtom, TextFieldAtom },
    props: {
        colors: Array,
        icons: Array
    },
    data: () => {
        return {
            title: "",
            color: 0,
            icon: 0
        }
    },
    computed: {
        incompleteForm() {
            return (this.title == "");
        }
    },

    methods: {
        emitCreate() {
            this.$emit('create', { title: this.title, color: this.colors[this.color], icon: this.icons[this.icon] });
        },
        emitCancel() {
            this.$emit('cancel');
        },
        enter() {
            if (!this.incompleteForm) {
                this.emitCreate();
            }
        }
    }
}
</script>

<style scoped>
    #container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
