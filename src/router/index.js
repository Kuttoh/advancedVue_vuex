import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '../components/ContactList'
import ContactDetail from '../components/ContactDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contacts',
      name: 'list',
      component: ContactList
    },

    {
      path: '/contacts/:id',
      name: 'detail',
      component: ContactDetail

    }
  ]
})
