import Vue from 'vue';
import '@holistic-web/toolbox-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
import Router from 'vue-router';
import Clipboard from 'v-clipboard';
import App from './App.vue';
import JsonBrowser from './JsonBrowser.vue';

Vue.use(Router);
Vue.use(Clipboard);
Vue.config.productionTip = false;

const router = new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: JsonBrowser, name: 'json-formatter' },
		{ path: '*', redirect: '/' }
	]
});

new Vue({
	render: h => h(App),
	router
}).$mount('#app');
