import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './components/Views/HomeView.vue';
import ListViewer from './components/Views/ListView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/view/:id', name: 'viewer', component: ListViewer }
  ],
});
