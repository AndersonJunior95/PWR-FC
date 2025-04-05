 function atualizarValores(alterado) {
    let V = parseFloat(document.getElementById("tensao").value);
    let I = parseFloat(document.getElementById("corrente").value);
    let R = parseFloat(document.getElementById("resistencia").value);

    if (alterado === "V" && I > 0) {
        R = V / I;
        document.getElementById("resistencia").value = R.toFixed(2);
    } 
    else if (alterado === "I" && R > 0) {
        V = I * R;
        document.getElementById("tensao").value = V.toFixed(2);
    } 
    else if (alterado === "R" && I > 0) {
        V = I * R;
        document.getElementById("tensao").value = V.toFixed(2);
    }

    // Atualiza os valores exibidos
    document.getElementById("valorV").textContent = V.toFixed(2);
    document.getElementById("valorI").textContent = I.toFixed(2);
    document.getElementById("valorR").textContent = R.toFixed(2);

    // Atualiza a equação exibida
    document.getElementById("equacao").innerHTML = `<strong>V = ${V.toFixed(2)}V<br>R = ${R.toFixed(2)}Ω<br>I = ${I.toFixed(2)}A</strong>`;

    // Atualiza o tamanho das barras
    document.getElementById("barraV").style.width = `${(V / 50) * 100}%`;
    document.getElementById("barraI").style.width = `${(I / 10) * 100}%`;
    document.getElementById("barraR").style.width = `${(R / 100) * 100}%`;

    // Define cores dinâmicas
    document.getElementById("barraV").style.backgroundColor = definirCor(V, 50);
    document.getElementById("barraI").style.backgroundColor = definirCor(I, 10);
    document.getElementById("barraR").style.backgroundColor = definirCor(R, 100);
}

// Função para definir cores com base nos valores
function definirCor(valor, maximo) {
    let percentual = valor / maximo;

    if (percentual <= 0.25) return "blue";   // Azul (baixo)
    if (percentual <= 0.5) return "green";   // Verde (médio)
    if (percentual <= 0.75) return "orange"; // Laranja (alto)
    return "red";                            // Vermelho (muito alto)
}
