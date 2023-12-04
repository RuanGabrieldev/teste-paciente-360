import ProfissionalRepository from "../../core/repository/ProfissionalRepository";
import Pessoa from "../../core/entity/Pessoa";
import { PrismaClient } from "@prisma/client";

export class ProfissionalPostgres implements ProfissionalRepository {
    
    prisma = new PrismaClient({})

   
    async getProfissional(id: number): Promise<Pessoa> {
        const resultado = await this.prisma.pessoa.findFirst({
            where: {
                id
            },
            include: {
                Profissao: true
              },
        }).then(item => new Pessoa(item!.nome, item!.data_nascimento, item!.cpf, item!.telefone, item!.observacoes, item!.Profissao, item!.id) ).catch(() => { throw ("Parâmetros de busca não cadastrado") });

        return resultado;

    }
    async getProfissionais(params: any): Promise<Pessoa[]> {
        const resultado = await this.prisma.pessoa.findMany({
            take: params?.limit ? Number(params.limit) : 9,
            skip: params?.offset ? Number(params.offset) : 0, 
            orderBy: {
              nome: 'asc',
            },
            include: {
                Profissao: true
              },
            
          });

         return resultado.map(item => new Pessoa(item.nome, item.data_nascimento, item.cpf, item.telefone, item.observacoes, item.Profissao, item.id)) 
    }
    async createProfissional(dados: Pessoa): Promise<Pessoa[]> {

        let data: any = {
            cpf: dados.cpf,
            data_nascimento: dados.dataNascimento,
            nome: dados.nome,
            profissaoId: dados.profissao!.id
        }

        if(dados.telefone){
            data.telefone = dados.telefone
        }

        if(dados.observacoes){
            data.observacoes = dados.observacoes
        }

        await this.prisma.pessoa.upsert({
            where:{
                cpf: dados.cpf!
            },
            create: data,
            update: data
        }).catch((ex) => { console.log(ex) });

        return await this.getProfissionais({});

    }

    async deleteProfissional(id: number): Promise<Pessoa[]> {
         await this.prisma.pessoa.delete({
            where: {
                id
            }
        }).catch((ex) => { throw (ex) });

        return await this.getProfissionais({});
    }
    async updateProfissional(id: number, dados: Pessoa): Promise<Pessoa> {
        await this.prisma.pessoa.update({
            where:{
                id
            },
            data: {
                cpf: dados.cpf,
                data_nascimento: dados.dataNascimento,
                nome: dados.nome,
                observacoes: dados.observacoes,
                telefone: dados.telefone
            },
        }).catch(() => { throw ("Parâmetros de entrada não inválidos") });

        return this.getProfissional(id);
    }
   
}   