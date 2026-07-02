const adicionarTarefa = () => {
    
    let mensagem;
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const paragrafo = document.getElementById("mensagem");

    if(!tarefa) {
        mensagem = "Não pode adicionar uma tarefa vazia!"
        paragrafo.textContent = mensagem;
        paragrafo.setAttribute("style", "color: red;")
        return;
    }

    mensagem = "Tarefa adicionada com sucesso!";

    paragrafo.textContent = mensagem;

    const listaTarefas = document.getElementById("listaTarefas");
    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;

    listaTarefas.appendChild(novaTarefa);
    
    novaTarefa.setAttribute("onClick", "removerTarefa()");
    novaTarefa.setAttribute("id", "tarefa");

    inputTarefa.value= "";
}

const removerTarefa = () => {
    let mensagem = "Tarefa removida!";

    document.getElementById("mensagem").textContent = mensagem;

    let tarefa = document.getElementById("tarefa");
    let listaTarefas = document.getElementById("listaTarefas");

    listaTarefas.removeChild(tarefa);
}