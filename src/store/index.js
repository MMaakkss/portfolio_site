import {createStore} from 'vuex'

export const store = createStore({
	state() {
		return {
			routes: []
		}
	},
	getters: {
		activeRoutes(state) {
			return state.routes
		}
	},
	mutations: {
		updateRoutes(state, routes) {
			state.routes = routes
		}
	},
	actions: {
		getRoutes(ctx, newRoute) {
			let routes = this.state.routes;
			routes.unshift(newRoute)
			routes = [...new Set(routes)]
			ctx.commit('updateRoutes', routes)
		},

		deleteRoute(ctx, route) {
			let routes = [...this.state.routes]
			let newRoutes = []
			delete routes[route]
			for (let i = 0; i < routes.length; i++) {
				if (routes[i] !== undefined) {
					newRoutes.push(routes[i])
				}
			}
			ctx.commit('updateRoutes', newRoutes)
		}
	}
})