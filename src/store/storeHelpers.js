let helpers = {
    getListHelper(state, id) {
        return state.lists.find(list => list.id == id);
    },
    getTaskHelper(state, listID, taskID) {
        return this.getListHelper(state, listID).tasks.find(task => task.id == taskID);
    }
}

export default helpers;