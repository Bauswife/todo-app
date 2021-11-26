<template>
  <div class="modal">
    <div class="modal__body">
      <slot class="modal__body__slot"/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    },
    methods: {
        emitAction() {
            this.$emit('action');
        }
    }
};
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(125, 125, 125, 0.5);
    display: flex;
    justify-content: center;
  }
  .modal__body {
    padding: 30px;
    background-color: var(--default-background);
    align-self: center;
    border-radius: 30px;
    position: fixed;
    top: 20px;
    right: 20px;
    left: 20px;
    bottom: 20px;
  }
  .modal__body__slot {
    word-wrap: normal;
    background-color: var(--default-background);
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
  }
</style>
