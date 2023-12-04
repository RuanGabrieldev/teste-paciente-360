import ProfissionalRepository from "../../repository/ProfissionalRepository";

export default class GetProfissionais {
	profissionalRepository: ProfissionalRepository;

	constructor (profissionalRepository: ProfissionalRepository) {
		this.profissionalRepository = profissionalRepository;
	}
	
	execute(params: any) {
		return this.profissionalRepository.getProfissionais(params);
	}
}