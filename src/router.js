import Vue from 'vue'
import Router from 'vue-router'
import AstronomyPicture from './components/AstronomyPicture'
import AstronomyContainer from './components/AstronomyContainer'
import moment from 'moment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: moment().format('/YYYY/MM/DD')
    },
    {
      path: '/:year/:month/:day',
      name: 'today',
      component: AstronomyPicture,
      props: true
    },
    {
      path: '/:year/:month/',
      name: 'month',
      component: AstronomyContainer,
      props: true
    }
  ]
})
