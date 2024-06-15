# Vue Router

## 1. Basic
```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Vue - Router</title>
	<style>
		p {
			font-family: monospace;
			white-space: pre-wrap;
		}
	</style>
</head>

<body>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> -
			<router-link to="/user/1/details">User</router-link> -
			<router-link to="/about">About</router-link> -
			<router-link to="/xxx">xxx</router-link>
		</nav>
		<router-view></router-view>
	</div>

	<script src="https://unpkg.com/vue@3.2.41/dist/vue.global.js"></script>
	<script src="https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js"></script>

	<script>
		const Home = { template: '<h2>Home Page</h2><p>{{JSON.stringify($route, null, 4)}}</p>' }
		const About = { template: '<h2>About Page</h2><p>{{JSON.stringify($route, null, 4)}}</p>' }
		const NotFound = { template: '<h2>NotFound Page</h2><p>{{JSON.stringify($route, null, 4)}}</p>' }
		
		const User = { template: '<h2>User Page</h2><router-view></router-view>' }
		const UserDetails = { template: '<h3>User Details</h3><p>{{JSON.stringify($route, null, 4)}}</p>' }

		const router = VueRouter.createRouter({
			history: VueRouter.createWebHistory(),
			routes: [
				{ path: '/', component: Home },
				{
					path: '/user/:id',
					component: User,
					children: [
						{
							path: 'details',
							component: UserDetails,
						},
					]
				},
				{ path: '/about', component: About },
				{ path: '/layzy-component', component: () => import('./views/UserDetails') },
				{ path: '/:pathMatch(.*)', component: NotFound },
			],
		})

		const app = Vue.createApp({})
		app.use(router)
		app.mount("#app")
	</script>
</body>

</html>
```
