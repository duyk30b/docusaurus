# Debounce và Throttle

```html
<!DOCTYPE html>
<html lang="en">

<body>
    <button id="btn-debounce">Button Debounce</button>
    <script>
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    func(...args);
                    timeout = null;
                }, delay);
            };
        };

        const senDataDebounce = debounce((data) => {
            console.log('Send data debounce:', data);
        }, 1000);

        document.getElementById('btn-debounce').onclick = () => {
            senDataDebounce(new Date())
        }
    </script>

    <button id="btn-throttle">Button Throttle</button>
    <script>
        const throttle = (func, delay) => {
            let lastCall = 0;

            return function (...args) {
                const now = new Date().getTime();

                if (now - lastCall >= delay) {
                    lastCall = now;
                    return func(...args);
                }
            };
        }

        const senDataThrottle = throttle((data) => {
            console.log('Send data throttle:', data);
        }, 1000);

        document.getElementById('btn-throttle').onclick = () => {
            senDataThrottle(new Date())
        }
    </script>
</body>

</html>
```