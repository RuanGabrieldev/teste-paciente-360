import Pessoa from "../entity/Pessoa";

export default interface ProfissionalRepository {
	getProfissional(id: number) : Promise<Pessoa>;
	getProfissionais(body: any) : Promise<Pessoa[]>;
	createProfissional(pessoa: Pessoa) : Promise<Pessoa[]>;
	deleteProfissional(id: number) : Promise<Pessoa[]>;
	updateProfissional(id: number, data: Pessoa) : Promise<Pessoa>;
}