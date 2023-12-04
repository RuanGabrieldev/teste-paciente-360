import Profissao from "../entity/Profissao";

export default interface ProfissaoRepository {
	getProfissao(id: number) : Promise<Profissao>;
	getProfissoes(body: any) : Promise<Profissao[]>;
	createProfissao(profissao: Profissao) : Promise<void>;
	deleteProfissao(id: number) : Promise<void>;
	updateProfissao(id: number, data: Profissao) : Promise<Profissao>;
}