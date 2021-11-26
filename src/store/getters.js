import helpers from './storeHelpers'

let getters = {
    getLists: state => {
      return state.lists;
    },
    getListByID: (state) => (id) => {
      return helpers.getListHelper(state, id);
    },
    getTasks: (state) => (id) => {
      return helpers.getListHelper(state, id).tasks.filter(task => !task.completed)
    },
    getCompletedTasks: (state) => (id) => {
      return helpers.getListHelper(state, id).tasks.filter(task => task.completed)
    }
  }

export default getters;