function addPlayer() {
  const playerSection = document.getElementById("players");
  const confirmação = confirm("Confirma a escalação?");
  if (confirmação) {
    const ul = document.createElement("ul");
    const nameP = document.createElement("p");
    nameP.innerText = "Nome do Jogador: ";
    nameP.id = "namePlayerTitles";
    const nameLi = document.createElement("li");
    const nameInput = document.getElementById("name");
    const nameValue = nameInput.value;
    nameLi.innerText = nameValue;
    ul.append(nameP, nameLi);

    const numP = document.createElement("p");
    numP.innerText = "Numero: ";
    numP.id = "numPlayerTitles";
    const numLi = document.createElement("li");
    const numInput = document.getElementById("numero");
    const numValue = numInput.value;
    numLi.innerText = numValue;
    ul.append(numP, numLi);

    const positionP = document.createElement("p");
    positionP.innerText = "Posição: ";
    positionP.id = "positionPlayerTitles";
    const positionLi = document.createElement("li");
    const positionInput = document.getElementById("posicao");
    const positionValue = positionInput.value;
    positionLi.innerText = positionValue;
    ul.append(positionP, positionLi);
    ul.appendChild(document.createElement("br"));
    playerSection.appendChild(ul);
  } else {
    alert("Jogador não escalado");
  }
  document.getElementById("posicao").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("name").value = "";
}

function removePlayer() {
  const confirmacao = confirm("Confirma a remoção do jogador?");
  if (confirmacao) {
    const playerSection = document.getElementById("players");
    const numInputRemove = document.getElementById("numeroRemove");
    const numValueRemove = numInputRemove.value;
    const liElementList = document.getElementsByTagName("li");
    for (let i = 0; i < liElementList.length; i++) {
      const li = liElementList[i];
      if (li.innerText.includes(numValueRemove)) {
        playerSection.removeChild(li.parentElement);
        break;
      }
    }
    document.getElementById("numeroRemove").value = "";
  } else {
    alert("O jogador não foi removido!");
  }
}
