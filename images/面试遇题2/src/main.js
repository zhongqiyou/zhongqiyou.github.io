// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { DropdownMenu, DropdownItem , Button ,Card ,List ,PullRefresh,Cell} from 'vant'


Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(Button)
  .use(Card)
  .use(List)
  .use(PullRefresh)
  .use(Cell);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App>'
})
</App>