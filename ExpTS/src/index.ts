import express, { Request, Response } from "express";
import validateEnv from "./utils/validate";
import dotenv from "dotenv";
import { logMiddleware } from './utils/logger';
import router from "./router/router";
import { engine } from "express-handlebars";
import path from 'path';


const sassMiddleware = require('node-sass-middleware');


dotenv.config();
validateEnv();
const publicPath = `${process.cwd()}/public`;

const app = express();
const PORT = process.env.PORT || 3333;

// Configuração do engine de templates Handlebars
app.engine(
  "handlebars",
  engine({
      helpers: require(`${__dirname}/views/helpers/helpers.ts`), // Carrega os helpers personalizados para o Handlebars
      defaultLayout: "layout", // Define o layout padrão para as views
      extname: ".handlebars", // Define a extensão dos arquivos de template
  }),
);

app.set("view engine", "handlebars"); // Define o engine de templates como Handlebars
app.set("views", `${__dirname}/views`); // Define o diretório de views

app.use('/css', express.static(path.join(publicPath, 'css'))); // Define o middleware para servir arquivos CSS
app.use('/js', express.static(path.join(publicPath, 'js'))); // Define o middleware para servir arquivos JS
app.use('/img', express.static(`${publicPath}/public/img`)); // Define o middleware para servir arquivos de imagem
app.use(router); // Define as rotas definidas no router

app.use(
  sassMiddleware({
    src: path.join(__dirname, '../public/scss'), // Define o diretório de origem dos arquivos SASS
    dest: path.join(__dirname, '../public/'), // Define o diretório de destino dos arquivos CSS compilados
    debug: true, // Habilita o modo de depuração do SASS
    outputStyle: 'compressed', // Define o estilo de saída dos arquivos CSS compilados
  })
);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`); // Inicia o servidor Express e exibe uma mensagem de confirmação
});
