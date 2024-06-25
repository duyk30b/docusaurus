# VueJS - Pinia

```html
<pre>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vuex for Vue</title>
</head>

<body>
    <div id="app">
        <input type="number" v-model.number="amount">
        <button v-on:click="increment">Increment</button>
        <button v-on:click="decrement">Decrement</button>
        <p>{{ store.countFix(3) }}</p>
    </div>

    <script src="https://unpkg.com/vue@3.2.41/dist/vue.global.js"></script>
    <script src="https://unpkg.com/vue-demi@0.13.11/lib/index.iife.js"></script>
    <script src="https://unpkg.com/pinia@2.0.23/dist/pinia.iife.js"></script>

    <script>
        const useCounterStore = Pinia.defineStore('counter', {
            state: () => ({ count: 0 }),
            actions: {
                increment(x) {
                    this.count += x
                },
                decrement(x) {
                    this.count -= x
                }
            },
            getters: {
                countFix: (state) => (custom) => state.count.toFixed(custom)
            }
        })

        const RootComponent = {
            setup() {
                const store = useCounterStore()
                return {
                    amount: 1,
                    store,
                }
            },
            methods: {
                increment() {
                    // this.store.increment(this.amount)
                    // this.store.count += this.amount
                    this.store.$patch({ count: this.store.count + this.amount })
                },
                decrement() {
                    this.store.decrement(this.amount)
                }
            },
        }

        const pinia = Pinia.createPinia()
        const app = Vue.createApp(RootComponent)
        app.use(pinia)
        app.mount("#app")

    </script>
</body>

</html>
</pre>
```