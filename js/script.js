const form = document.querySelector("#form");
const lista = document.querySelector("#lista");

let incrementID = 1

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.querySelector("#item").value;
  const listaItem = document.createElement("li");
  const divItem = document.createElement('div')
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const aItem = document.createElement("a")
  const remove = document.createElement("img");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox_" + incrementID
  incrementID++
  label.innerText = item;
  remove.src = "assets/icons/lixeira.svg";
  remove.alt = "Remover"
  divItem.className = "item"
  listaItem.append(divItem)
  divItem.appendChild(checkbox);
  label.htmlFor = checkbox.id
  divItem.appendChild(label);
  divItem.appendChild(aItem)
  aItem.appendChild(remove);
  lista.appendChild(listaItem);
  aItem.appendChild(remove);
  aItem.addEventListener("click", (e) => {
    e.preventDefault();
    listaItem.remove();
  });
  lista.appendChild(listaItem);
});

