import helpers from './storeHelpers'

let mutations = {
    addList(state, payload) {
        state.lists.push(payload);
    },
    addTask(state, payload) {
        let list = helpers.getListHelper(state, payload.list);
        list.tasks.push(payload)
    },
    completeTask(state, payload) {
        let task = helpers.getTaskHelper(state, payload.listID, payload.taskID);
        task.completed = true;
    },
    uncompleteTask(state, payload) {
        let task = helpers.getTaskHelper(state, payload.listID, payload.taskID);
        task.completed = false;
    }
}

export default mutations;