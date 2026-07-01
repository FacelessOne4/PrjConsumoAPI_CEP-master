document.getElementById("dogForm").addEventListener("submit", function (event) {
 
    event.preventDefault();
 
    const dog = document.getElementById("dog").value.trim().toLowerCase(); // !
 
    if (dog === "") {

        alert("Digite uma raça.");

        return;

    }
 
    fetch(`https://dog.ceo/api/breed/${dog}/images`)

        .then(response => response.json()) // !

        .then(data => {
 
            if (data.status === "error") { 

                document.getElementById("resultado").innerHTML = "Raça não encontrada.";

                return;

            }
 
            let html = "";
 
            data.message.forEach(imagem => { // !

                html += `<img src="${imagem}" width="200">`;

            });
 
            document.getElementById("resultado").innerHTML = html; // !

        })

        .catch(error => {

            console.error("Erro ao buscar a raça:", error);

            document.getElementById("resultado").innerHTML = "Erro ao buscar a raça.";

        });
 
});
 
