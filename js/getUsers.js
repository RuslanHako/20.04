// Функция для получения списка пользователей
function getUsers() {
    // Отправляем AJAX-запрос на сервер для получения списка пользователей
    fetch('getUsers.php')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('all-users');
            userList.innerHTML = '';
            // Добавляем каждого пользователя в список пользователей
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.username;
                listItem.onclick = () => {
                    // При выборе пользователя обновляем ID выбранного пользователя и загружаем его сообщения
                    selectedUserId = user.id;
                    loadMessages(selectedUserId);
                    // Убираем стиль выбранного у всех пользователей
                    document.querySelectorAll('#all-users li').forEach(item => {
                        item.classList.remove('selected');
                    });
                    // Добавляем стиль выбранного пользователю
                    listItem.classList.add('selected');
                };
                userList.appendChild(listItem);
            });
        });
}
