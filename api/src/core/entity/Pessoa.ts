import Profissao from "./Profissao";

export default class Pessoa {
	id!: number | undefined | null;
	nome: string;           
    dataNascimento!: Date;
    cpf!: string;                
    telefone!: string | null;    
    observacoes!: string | null;
    profissao!: Profissao | null;           

	constructor (nome: string , dataNascimento: Date, cpf: string, telefone: string | null, observacoes: string | null, profissao: {id: number|null, nome: string} | null, id:number | null = null ) {
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.cpf = cpf;
		this.telefone = telefone;
		this.observacoes = observacoes;
        this.profissao =  profissao;
        this.id = id;
	}

	
}