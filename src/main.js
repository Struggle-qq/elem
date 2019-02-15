import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';


Vue.use(VueRouter);  //使用router路由


Vue.use(VueResource);  //全局注册vueR

let app = Vue.extend(App); //使用router路由

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({     //路径  配置路由词典
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'seller': {
		component: seller
	}
});

router.start(app, '#app'); //调用路由
router.go('/goods');      //打开页面自动跳指定页面
