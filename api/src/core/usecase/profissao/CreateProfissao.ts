import Pessoa from "../../entity/Pessoa";
import Profissao from "../../entity/Profissao";
import ProfissaoRepository from "../../repository/ProfissaoRepository";

export default class CreateProfissao {
	profissaoRepository: ProfissaoRepository;

	constructor (profissaoRepository: ProfissaoRepository) {
		this.profissaoRepository = profissaoRepository;
	}
	
	execute(body: Profissao): Promise<void>{
		return this.profissaoRepository.createProfissao(body);
	}
}