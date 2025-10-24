const portfolio = document.querySelector("#portafolio");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let resultado = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
    portfolio.innerHTML += `
        <div class="col">
            <div class="card shadow-sm h-100">
                <img src="${trabajo.photo}" class="card-img-top" alt="${trabajo.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${trabajo.title}</h5>
                    <p class="card-text text-dark">${trabajo.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary disabled">${trabajo.category}</button>
                        </div>
                        <small class="text-body-secondary">Reciente</small>
                    </div>
                </div>
            </div>
        </div>`;
});
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}


datos("https://api.myjson.online/v1/records/216dc459-99d0-4904-a828-77fe8e6ffbc0");