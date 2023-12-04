import GetProfissao from "../core/usecase/profissao/GetProfissao";
import CreateProfissao from "../core/usecase/profissao/CreateProfissao";
import Getprofissao from "../core/usecase/profissao/CreateProfissao";
import { ProfissaoPostgres } from "../infra/repository/ProfissaoPostgres";
import CreateProfissaoDTO from "./dto/CreateProfissaoDTO";
import Profissao from "../core/entity/Profissao";
import GetProfissoes from "../core/usecase/profissao/GetProfissoes";

export default class ProfissaoController {
	static async get (req: any) {
		const repository = new ProfissaoPostgres();
		const usecase = new GetProfissoes(repository);
		const profissao = await usecase.execute(req.params);
		return profissao;
	}

    static async getById (req: any, body: any) {
		const repository = new ProfissaoPostgres();
		const usecase = new Getprofissao(repository);
		const profissao = await usecase.execute(req.params.id);
		return profissao;
	}

    // static async update (req: any, body: any) {
	// 	const repository = new ProfissaoPostgres();
	// 	const usecase = new GetProfissao(repository);
	// 	const profissao = await usecase.execute(req.params);
	// 	return profissao;
	// }

    static async create (params: any, body: any) {
	
		const data: Profissao = CreateProfissaoDTO.validate(body);
		const repository = new ProfissaoPostgres();
		const usecase = new CreateProfissao(repository);
		const profissao = await usecase.execute(data);
		return profissao;
	}

    static async delete (params: any, body: any) {
		const repository = new ProfissaoPostgres();
		const usecase = new GetProfissao(repository);
		const profissao = await usecase.execute(params);
		return profissao;
	}
}