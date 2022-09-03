let tbody = document.getElementById('tbody')
let table = document.getElementById('table');

async function traer(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/users")
    const datos = await res.json()
        //console.log(datos)

        datos.forEach(e => {
            let id = e.id
            let nombre = e.name
            let username = e.username
            let email = e.email
            let ciudad = e.address.city

            tbody.innerHTML += `<tr>
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${ciudad}</td>
        </tr>`;
        table.appendChild(tbody);
        
    });

    
}
traer()

