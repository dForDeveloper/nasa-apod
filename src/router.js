import Vue from 'vue'
import Router from 'vue-router'
import AstronomyPicture from './components/AstronomyPicture'
import AstronomyContainer from './components/AstronomyContainer'
import NotFound from './components/NotFound'
import moment from 'moment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: moment().format('/YYYY/MM/DD')
    },
    {
      path: `${moment().format('/YYYY/MM')}/:day`,
      name: 'today',
      component: AstronomyPicture,
      props: true
    },
    {
      path: moment().format('/YYYY/MM'),
      name: 'month',
      component: AstronomyContainer,
      props: true
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
