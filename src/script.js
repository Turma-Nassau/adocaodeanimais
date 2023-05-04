const btnAdicionar = document.getElementById('btn-adicionar');

const tabelaAnimais = document.getElementById('tabela-animais');

btnAdicionar.addEventListener('click', function() {
  const especie = document.getElementById('especie').value;
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

  const novaLinha = tabelaAnimais.insertRow();

  const celulaEspecie = novaLinha.insertCell();
  celulaEspecie.innerHTML = especie;

  const celulaNome = novaLinha.insertCell();
  celulaNome.innerHTML = nome;

  const celulaIdade = novaLinha.insertCell();
  celulaIdade.innerHTML = idade;
});

