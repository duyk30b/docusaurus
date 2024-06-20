# Firebase Cloud Firestore
- Document:  **[https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)**.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Firestore</title>
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
    <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-firestore.js"></script>
    <script>
        //Nếu chỉ dùng Database Realtime, chỉ cần config: databaseURL
        firebase.initializeApp({
            apiKey: 'AIzaSyADcAyM-3Fb7ZJdJf86yLKFUnZmxx-QHmU',
            authDomain: 'duycode-77e9a.web.app',
            projectId: 'duycode-com'
        });
        const _db = firebase.firestore();

        // 1. CREAD: Add new User
        let add_user = () => {
            let user = {
                username: ip_username.value,
                email: ip_email.value,
            }
            // Dùng add => tự động tạo document mới và đặt auto ID
            _db.collection("Users").add(user)
                .then((docRef) => {
                    console.log("Document written with: ", docRef);
                })
                .catch(err => { console.error(err) })
        }

        // 2. READ: "doc(userId).get()": chỉ đọc 1 document
        let get_user = (userId) => {
            _db.collection("Users").doc(userId).get()
                .then((querySnapshot) => {
                    if (querySnapshot.exists) {
                        ip_username.value = querySnapshot.data().username;
                        ip_email.value = querySnapshot.data().email;
                        uid = userId;
                    }
                    else console.log("No data available");
                })
                .catch(err => { console.error(err) })
        }

        // 3. UPDATE
        let update_user = () => {
            let content = {
                username: ip_username.value,
                email: ip_email.value,
            }
            _db.collection("Users").doc(uid).update(content)
                .then((res) => {
                    console.log("Document successfully update!", res);
                })
                .catch(err => { console.error(err) })
        }

        // 4. REPLACE 
        let replace_user = () => {
            // Dùng set => tạo mới hoặc replace chính xác vị trí đó
            let content = {
                username: ip_username.value,
                email: ip_email.value,
            }
            _db.collection("Users").doc(uid).set(content)
                .then(res => console.log("Document successfully replace!", res))
                .catch(err => console.error(err))
        }

        //5. DELETE: Có thể dùng remove, hoặc "set(null)", hoặc update với "[key]: null"
        let delete_user = (uid) => {
            _db.collection("Users").doc(uid).delete()
                .then(res => console.log("Document successfully delete!", res))
                .catch(err => console.error(err))
            // Chuyện của delete
            // /users/J8mSwldSMsL2gAWDRZWi/id123/0UsnLdNdqdmJbMLkXUMf

        }


        // 6. READ: "get": Chỉ đọc database 1 lần duy nhất
        // Như vậy 6 và 7 không nên sử dụng cùng nhau
        _db.collection("Users").get()
            .then((querySnapshot) => {
                const listUser = {}
                querySnapshot.forEach((doc) => {
                    listUser[doc.id] = doc.data();
                });
                // redraw_table(listUser);
            })
            .catch(err => { console.error(err) })


        // 7. Event: Có thể lắng nghe các sự kiện của children khi thêm sửa xóa
        // Khi khởi chạy, dù thằng cha có nhiều thằng con từ trước
        // nhưng thằng "docChanges()" lại cứ hiểu là mới nhận về. thế mới đau

        _db.collection("Users").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    add_row_table(change.doc.id, change.doc.data());
                }
                if (change.type === "modified") {
                    let new_tr = create_row(change.doc.id, change.doc.data());
                    let td = document.querySelector(`td[data-id="${change.doc.id}"]`);
                    td.closest('tr').outerHTML = new_tr.outerHTML;
                }
                if (change.type === "removed") {
                    let td = document.querySelector(`td[data-id="${change.doc.id}"]`);
                    td.closest('tr').remove();
                }
            });
        });

    </script>
</body>

</html>
```