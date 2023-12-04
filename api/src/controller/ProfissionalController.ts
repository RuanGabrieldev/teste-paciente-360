import Pessoa from "../core/entity/Pessoa";
import CreateProfissional from "../core/usecase/profissional/CreateProfissional";
import DeleteProfissional from "../core/usecase/profissional/DeleteProfissional";
import GetProfissionais from "../core/usecase/profissional/GetProfissionais";
import GetProfissional from "../core/usecase/profissional/GetProfissional";

import { ProfissionalPostgres } from "../infra/repository/ProfissionalPostgres";
import CreatePessoaDTO from "./dto/CreatePessoaDTO";

export default class ProfissionalController {
	static async get (req: any) {
		const repository = new ProfissionalPostgres();
		const usecase = new GetProfissionais(repository);
		const profissionais = await usecase.execute(req.params);
		return profissionais;
	}

    static async getById (req: any, body: any) {
		const repository = new ProfissionalPostgres();
		const usecase = new GetProfissional(repository);
		const profissional = await usecase.execute(req.params.id);
		return profissional;
	}

    // static async update (req: any, body: any) {
	// 	const repository = new ProfissionalPostgres();
	// 	const usecase = new GetProfissionais(repository);
	// 	const profissional = await usecase.execute(req.params);
	// 	return profissional;
	// }

    static async create (params: any, body: any) {
	
		const data: Pessoa = CreatePessoaDTO.validate(body);
		const repository = new ProfissionalPostgres();
		const usecase = new CreateProfissional(repository);
		const profissionais = await usecase.execute(data);
		return profissionais;
	}

    static async delete (params: any, body: any) {
		const repository = new ProfissionalPostgres();
		const usecase = new DeleteProfissional(repository);
		console.log(params)
		const profissionais = await usecase.execute(params.id);
		return profissionais;
	}
}