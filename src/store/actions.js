import helpers from './storeHelpers'

let actions = {
    addList(context, payload) {
        let listInfo = {
            id: context.state.currentID++,
            currentTaskID: 0,
            title: payload.title,
            color: payload.color,
            icon: payload.icon,
            tasks: []
        }
        context.commit('addList', listInfo)
    },
    addTask(context, payload) {
        let list = helpers.getListHelper(context.state, payload.list);
        let taskInfo = {
            id: list.currentTaskID++,
            title: payload.title, 
            date: new Date(payload.date), 
            note: payload.note,
            list: payload.list,
            completed: false
        }
        context.commit('addTask', taskInfo)
    },
    completeTask({ commit }, payload) {
        commit('completeTask', payload)
    },
    uncompleteTask({ commit }, payload) {
        commit('uncompleteTask', payload)
    },
}

export default actions;