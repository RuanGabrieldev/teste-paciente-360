import ProfissionalRepository from "../../repository/ProfissionalRepository";

export default class GetProfissional {
	profissionalRepository: ProfissionalRepository;

	constructor (profissionalRepository: ProfissionalRepository) {
		this.profissionalRepository = profissionalRepository;
	}
	
	execute(id: number) {
		return this.profissionalRepository.getProfissional(id);
	}
}