import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../components/feed.vue'
import SearchFeed from '../components/searchFeed.vue'
import CardView from '../views/cardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Feed
    },
    {
      path: '/:type/:name',
      name: 'card',
      component: CardView
    },
    {
      path: '/search/:query',
      name: 'searchFeed',
      component: SearchFeed
    }
  ]
})

export default router
