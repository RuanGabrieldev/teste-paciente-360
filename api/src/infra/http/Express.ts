import express from "express";
import cors from "cors";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ProfissionalController from "../../controller/ProfissionalController";
import ProfissaoController from "../../controller/ProfissaoController";

const app =  express();
app.use(cors());
app.use(express.json());

app.get("/profissional/", ExpressAdapter.create(ProfissionalController.get));
app.post("/profissional/", ExpressAdapter.create(ProfissionalController.create));
app.delete("/profissional/:id", ExpressAdapter.create(ProfissionalController.delete));

app.get("/profissao/", ExpressAdapter.create(ProfissaoController.get));
app.post("/profissao/", ExpressAdapter.create(ProfissaoController.create));
// app.get("/:id", ExpressAdapter.create(ProfissionalController.getById));

app.listen(3000, '0.0.0.0', ()  => console.log(`Listening on port:  3000 `))
