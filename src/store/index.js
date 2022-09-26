import {createStore} from 'vuex'

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const store = createStore ({
	namespaced: true,
	state,
	actions,
	mutations,
	getters
})