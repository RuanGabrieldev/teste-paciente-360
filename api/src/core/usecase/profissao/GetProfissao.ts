import ProfissaoRepository from "../../repository/ProfissaoRepository";

export default class GetProfissao {
	profissaoRepository: ProfissaoRepository;

	constructor (profissaoRepository: ProfissaoRepository) {
		this.profissaoRepository = profissaoRepository;
	}
	
	execute(id: number) {
		return this.profissaoRepository.getProfissao(id);
	}
}