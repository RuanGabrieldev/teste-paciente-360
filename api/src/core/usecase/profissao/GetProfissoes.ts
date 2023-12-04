import ProfissaoRepository from "../../repository/ProfissaoRepository";

export default class GetProfissoes {
	profissaoRepository: ProfissaoRepository;

	constructor (profissaoRepository: ProfissaoRepository) {
		this.profissaoRepository = profissaoRepository;
	}
	
	execute(params: any) {
		return this.profissaoRepository.getProfissoes(params);
	}
}