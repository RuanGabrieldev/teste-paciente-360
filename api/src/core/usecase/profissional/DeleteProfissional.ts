import ProfissionalRepository from "../../repository/ProfissionalRepository";

export default class DeleteProfissional {
	profissionalRepository: ProfissionalRepository;

	constructor (profissionalRepository: ProfissionalRepository) {
		this.profissionalRepository = profissionalRepository;
	}
	
	execute(id: string) {
		return this.profissionalRepository.deleteProfissional(Number.parseInt(id));
	}
}