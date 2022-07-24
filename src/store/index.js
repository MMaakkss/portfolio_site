import {createStore} from 'vuex'
import axios from 'axios'

export const store = createStore({
	state() {
		return {
			routes: [],
			projectList: [],
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
		},
		setProjectList(state, list) {
			state.projectList = list
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
		},

		getRepos(ctx, name) {
			return new Promise( () => {
				axios.get( `https://api.github.com/users/${name}/repos` )
					.then( res => {
						if ( res.status == 200 ) {
							const data = res.data
							let list = []

							for (let i = 0; i < data.length; i++) {
								let date = new Date(data[i].created_at)

								let dateDay = date.getDate()
								let dateMonth = date.getMonth()
								let dateYear = date.getFullYear()

								if (dateDay < 10) {
									dateDay = '0' + dateDay
								}
								if (dateMonth < 10) {
									dateMonth = '0' + dateMonth
								}

								let created = dateDay + '.' + dateMonth + '.' + dateYear

								list[i] = {
									url: data[i].html_url,
									created: created,
									description: data[i].description,
									name: data[i].name,
									homepage: data[i].homepage,
									img: '/src/assets/examp.jpeg',
									mainTechnology: data[i].language.toLowerCase(),
									stack: [data[i].language.toLowerCase()],
								}
							}

							ctx.commit('setProjectList', list)
						}
					} )
					.catch( err => console.log(err.message) )
			});
		}
	}
})