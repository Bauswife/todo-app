<template>
    <div id="container" v-on:keyup.enter="enter()">
        <CancelHeaderAtom :text="'New Task'" @cancel="emitCancel()"/>
        <PromptedTextFieldMolecule 
            :prompt="'What are you planning?'" :rows="3" 
            @input="data => title = data"
        />
        <SpecsFormCreature
            :lists="lists"
            :date="date"
            :note="note"
            :listIndex="listIndex"
            @dateInput="data => date = data"
            @noteInput="data => note = data"
            @listInput="data => listIndex = data"
        />
        <CreateButtonAtom
            :isDisabled="isDisabled"
            :text="'Create'"
            @action="emitCreate"
        />
    </div>
</template>

<script>
import CreateButtonAtom from '../Atoms/CreateButtonAtom.vue';
import SpecsFormCreature from '../Creatures/SpecsFormCreature.vue';
import CancelHeaderAtom from '../Atoms/CancelHeaderAtom.vue';
import PromptedTextFieldMolecule from '../Molecules/PromptedTextFieldMolecule.vue';

export default {
  components: { CreateButtonAtom, SpecsFormCreature, CancelHeaderAtom, PromptedTextFieldMolecule },
    props: {
        lists: Array
    },
    data: () => {
        return {
            title: "",
            date: "",
            note: "",
            listIndex: -1
        }
    },
    computed: {
        isDisabled() {
            return (this.listIndex == -1) || (this.title == "") || (this.date == "");
        }
    },
    methods: {
        emitCancel() {
            this.$emit('cancel');
        },
        emitCreate() {
            const data = {title: this.title, date: new Date(this.date), note: this.note, list: this.listIndex};
            this.$emit('create', data);
        },
        enter() {
            if (!this.isDisabled) {
                this.emitCreate();                
            }
        }
    }
}
</script>

<style scoped>
    html, body {
        height: 100%;
    }
    #container {
        background-color: var(--default-background);
        font-family: var(--default-font);
        height: 100%;
    }
</style>
