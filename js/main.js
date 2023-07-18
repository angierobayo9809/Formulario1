let items = localStorage.getItem('categoriasList');
items = items ? items.split(',') : [];
showItems();

function AddCategoria() {
    let categoria = document.getElementById('categoria').value;
    if (categoria) {
        items.push(categoria);
        showItems();
    }
}

function showItems() {
    let divDinamico = document.getElementById('dinamico');
    let dibujarTabla ='';
    if (items.length > 0){
        dibujarTabla = '<div class="tituloDinamico"><h3>Listado Categoría</h3></div>';
        divDinamico.innerHTML = dibujarTabla;
    }

    for (let i = 0; i < items.length; i++){
        dibujarTabla += `<div class="rowDinamico">${items[i]}</div>`;
        dibujarTabla += `<div class="rowDelete"><a href="#" class="btn btn-danger" onclick="deleteItem(${i})">X</a></div>`;
    }
    localStorage.setItem('categoriasList', items);
    divDinamico.innerHTML = dibujarTabla;
}

function deleteItem(item){
    console.log(item);
    items.splice(item,1);
    console.log(items);
    showItems();
    
}