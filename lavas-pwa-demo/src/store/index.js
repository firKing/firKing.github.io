/**
 * @file store index
 * @author wangjinpeng03(wangjinpeng03@baidu.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import appShell from './modules/app-shell';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        appShell
    }
});
