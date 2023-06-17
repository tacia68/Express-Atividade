import { Prof, Tecnologias } from "./helpersTypes";

// Função que recebe um array de objetos do tipo Prof e retorna uma lista HTML com os nomes e salas dos professores
export function listProfs(profs: Prof[]) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`); // Mapeia cada objeto Prof para uma string no formato "<li>nome-sala</li>"
    return `<ul>${list.join("")}</ul>`; // Retorna uma lista HTML com os elementos do array concatenados
}

// Função que recebe um array de objetos do tipo Tecnologias e retorna uma lista HTML apenas com as tecnologias alimentadas pelo Node.js
export function tecnologiasNode(tecnologias: Tecnologias[]) {
    let list: Array<string> = [];
    tecnologias.forEach((element) => {
        if (element.poweredByNodejs) { // Verifica se a tecnologia é alimentada pelo Node.js
            list.push(`<li>${element.name}-${element.type}</li>`); // Adiciona a tecnologia à lista no formato "<li>name-type</li>"
        }
    });
    return `<ul>${list.join("")}</ul>`; // Retorna uma lista HTML com as tecnologias concatenadas
}
