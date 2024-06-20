# Firebase Database
- Document:  **[https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)**.
- Cần cài đặt phân quyền trong mục Rules trước để dễ dàng sửa đồi
```json
{
  "rules": {
    ".read": true,
    ".write": true,
  }
}
```

- Nếu chỉ sử dụng Realtime Database, chỉ cần cài đặt firebase-app và firebase-database. Config cũng chỉ cần databaseURL là quá đủ

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realtime Database</title>
    <style>
        table {
            border-collapse: collapse;
            counter-reset: row_number 0;
        }

        tbody tr {
            counter-increment: row_number 1;
        }

        tbody tr td:first-child::before {
            content: counter(row_number);
        }

        th,
        td {
            padding: 0 0.5rem;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="text" placeholder="username" id="ip_username"><br />
        <input type="text" placeholder="email" id="ip_email"> <br />
        <button onclick="add_user(); reset_form()">Add User</button>
        <button onclick="update_user(); reset_form()">Update User</button>
        <button onclick="replace_user(); reset_form()">Replace User</button><br /><br />

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="tbody_list"></tbody>
        </table>
    </div>

    <script>
        let ip_username = document.getElementById("ip_username");
        let ip_email = document.getElementById("ip_email");
        let tbody_list = document.getElementById("tbody_list");
        let uid = null;

        let create_row = (key, value) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td data-id="${key}"></td><td>${value.username}</td><td>${value.email}</td>
                            <td><button onClick=get_user("${key}")>Sửa</button>
                                <button onClick=delete_user("${key}")>Xóa</button></td>`;
            return tr;
        }

        let add_row_table = (key, value) => {
            let tr = create_row(key, value);
            tbody_list.appendChild(tr);
        }

        let redraw_table = (listUser) => {
            tbody_list.innerHTML = "";
            Object.entries(listUser).forEach(([key, value], index) => {
                add_row_table(key, value)
            });
        }

        const reset_form = () => {
            ip_username.value = "";
            ip_email.value = "";
            uid = null;
        }
    </script>

    <!-- Link setup firebase: https://firebase.google.com/docs/web/setup -->
    <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-database.js"></script>
    <script>
        //Nếu chỉ dùng Database Realtime, chỉ cần config: databaseURL
        firebase.initializeApp({
            databaseURL: "https://duycode-com-default-rtdb.asia-southeast1.firebasedatabase.app/",
        });
        //0. Giả sử ban đầu, database trống trơn, "null" đó.
        const usersRef = firebase.database().ref('/users');

        // 1. CREAD: Add new User
        let add_user = () => {
            let user = {
                username: ip_username.value,
                email: ip_email.value,
            }
            //push(): là chỉ định 1 đường dẫn con bên trong "/users" dạng "users/SDFWVX234ds"
            //Khi set, đường dẫn "users/SDFWVX234ds" sẽ tự động được tạo trên database
            usersRef.push().set(user)
                .then(res => console.log("Add User Success !!!", res))
                .catch(err => console.error(err))
        }

        // 2. READ: "get": chỉ đọc database 1 lần duy nhất
        let get_user = (userId) => {
            usersRef.child(userId).get()
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        ip_username.value = snapshot.val().username;
                        ip_email.value = snapshot.val().email;
                        uid = snapshot.key;
                    } else {
                        console.log("No data available");
                    }
                })
                .catch(err => console.error(err))
        }

        // 3. UPDATE
        let update_user = () => {
            let list_update = {};
            // Có thể update nhiều trường 1 lúc, với key là uid. Trường hợp này chỉ update 1 field :D
            list_update[uid] = {
                username: ip_username.value,
                email: ip_email.value,
            }
            usersRef.update(list_update)
                .then((res) => { console.log("Update User Success !!!", res); })
                .catch(err => { console.error(err) })
        }

        // 4. REPLACE
        let replace_user = () => {
            let user = {
                username: ip_username.value,
                email: ip_email.value,
            }
            usersRef.child(uid).set(user)
                .then((res) => { console.log("Update User Success !!!", res); })
                .catch(err => { console.error(err) })
        }

        // 5. DELETE: Có thể dùng remove, hoặc "set(null)", hoặc update với "[key]: null"
        let delete_user = (uid) => {
            usersRef.child(uid).remove();
            // firebase.database().ref('users/' + uid).set(null)
            // usersRef.update({[uid]: null})
        }


        // 6.1. READ LIST: "on": Đọc dữ liệu và lắng nghe database liên tục
        //Như vậy 6 và 7 không nên sử dụng cùng nhau
        usersRef.on('value', (snapshot) => {
            let listUser = snapshot.val() || {};
            //redraw_table(listUser);
        });

        //6.2. READ LIST: "once": Chỉ đọc database 1 lần duy nhất
        usersRef.once('value')
            .then((snapshot) => {
                let listUser = snapshot.val() || {};
                //redraw_table(listUser);
            })
            .catch(err => { console.error(err) })


        //7. Event: Có thể lắng nghe các sự kiện của children khi thêm sửa xóa
        // Khi khởi chạy, dù thằng cha có nhiều thằng con từ trước
        // nhưng thằng "child_added" lại cứ hiểu là mới nhận về. thế mới đau
        usersRef.on('child_added', (data) => {
            add_row_table(data.key, data.val());
        });

        usersRef.on('child_changed', (data) => {
            let new_tr = create_row(data.key, data.val());
            let td = document.querySelector(`td[data-id="${data.key}"]`);
            td.closest('tr').outerHTML = new_tr.outerHTML;
        });

        usersRef.on('child_removed', (data) => {
            let td = document.querySelector(`td[data-id="${data.key}"]`);
            td.closest('tr').remove();
        });
    </script>
</body>

</html>
```