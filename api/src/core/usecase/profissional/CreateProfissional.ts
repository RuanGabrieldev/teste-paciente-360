import Pessoa from "../../entity/Pessoa";
import ProfissionalRepository from "../../repository/ProfissionalRepository";

export default class CreateProfissional {
	profissionalRepository: ProfissionalRepository;

	constructor (profissionalRepository: ProfissionalRepository) {
		this.profissionalRepository = profissionalRepository;
	}
	
	execute(body: Pessoa): Promise<Pessoa[]>{
		return this.profissionalRepository.createProfissional(body);
	}
}