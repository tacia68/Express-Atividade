import { Request, Response } from "express";

// Handler para a rota principal
const principal = (req: Request, res: Response) => {
    res.render("layouts/main"); // Renderiza o template "layouts/main"
};

// Handler para a rota sobre
const sobre = (req: Request, res: Response) => {
    res.send("Página sobre"); // Envia a resposta "Página sobre"
};

// Handler para a rota hb1
const hb1 = (req: Request, res: Response) => {
    res.render("app/hb1", {
        mensagem: "Hello Handlebars", // Renderiza o template "app/hb1" e passa a variável "mensagem"
    });
};

// Handler para a rota hb2
const hb2 = (req: Request, res: Response) => {
    res.render("app/hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Node",
    }); // Renderiza o template "app/hb2" e passa as variáveis "poweredByNodejs", "name" e "type"
};

// Handler para a rota hb3
const hb3 = (req: Request, res: Response) => {
    const professores = [
        { nome: "Maria Melo", sala: 1 },
        { nome: "Souza Campos", sala: 2 },
        { nome: "Lene Souza", sala: 3 },
        { nome: "Maria Pereira", sala: 4 },
    ];
    res.render("app/hb3", { professores }); // Renderiza o template "app/hb3" e passa a variável "professores"
};

// Handler para a rota hb4
const hb4 = (req: Request, res: Response) => {
    const listaTecnologias = [
        { name: "Express", type: "Framework", poweredByNodejs: true },
        { name: "Laravel", type: "Framework", poweredByNodejs: false },
        { name: "React", type: "Library", poweredByNodejs: true },
        { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
        { name: "Django", type: "Framework", poweredByNodejs: false },
        { name: "Docker", type: "Virtualization", poweredByNodejs: false },
        { name: "Sequelize", type: "ORM tool", poweredByNodejs: true },
        { name: "Vue.js", type: "Frontend Framework", poweredByNodejs: true },
        { name: "Angular", type: "Frontend Framework", poweredByNodejs: false },
        { name: "MongoDB", type: "Database", poweredByNodejs: true },
        { name: "MySQL", type: "Database", poweredByNodejs: false },
    ];
    res.render("app/hb4", { listaTecnologias }); // Renderiza o template "app/hb4" e passa a variável "listaTecnologias"
};


// Handler para a rota hb4profs
const hb4profs = (req: Request, res: Response) => {
    const professores = [
        { nome: "Maria", sala: 1000 },
        { nome: "Selene", sala: 1001 },
        { nome: "Souza", sala: 1002 },
        { nome: "Campos", sala: 1003 },
        { nome: "Eduarda", sala: 1004 },
        { nome: "Felipe", sala: 1005 },
        { nome: "Gisele", sala: 1006 },
        { nome: "Hugo", sala: 1007 },
    ];
    res.render("app/hbprofs", { professores }); // Renderiza o template "app/hbprofs" e passa a variável "professores"
};


export default { principal, sobre, hb1, hb2, hb3, hb4, hb4profs };
