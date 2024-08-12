async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const userCards = document.getElementById('user-cards');
        document.getElementById('loading').style.display = 'none';
        users.forEach(user => {
            const userCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                            <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
                            <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
                        </div>
                    </div>
                </div>
            `;
            userCards.innerHTML += userCard;
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Llamar a la función para cargar los usuarios al cargar la página
window.onload = fetchUsers;