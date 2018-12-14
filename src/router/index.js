import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const index = new VueRouter({ routes, linkActiveClass: 'active' })

router.beforeEach((to, from, next) => {

})

export default index
