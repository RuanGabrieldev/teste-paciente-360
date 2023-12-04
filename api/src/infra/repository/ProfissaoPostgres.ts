import ProfissaoRepository from "../../core/repository/ProfissaoRepository";
import Profissao from "../../core/entity/Profissao";
import { PrismaClient } from "@prisma/client";

export class ProfissaoPostgres implements ProfissaoRepository {
    
    prisma = new PrismaClient({})

   
    async getProfissao(id: number): Promise<Profissao> {
        const resultado = await this.prisma.profissao.findFirst({
            where: {
                id
            },

        }).then(item => new Profissao(item!.nome) ).catch(() => { throw ("Parâmetros de busca não cadastrado") });

        return resultado;

    }
    async getProfissoes(params: any): Promise<Profissao[]> {
        const resultado = await this.prisma.profissao.findMany({
            take: params?.limit ? Number(params.limit) : 9,
            skip: params?.offset ? Number(params.offset) : 0, 
            orderBy: {
              nome: 'asc',
            },
          });

         return resultado.map(item => new Profissao(item.nome, item.id)) 
    }
    async createProfissao(dados: Profissao): Promise<void> {
        await this.prisma.profissao.create({
            data: {
                nome: dados.nome,
            },
        }).catch(() => { throw ("Parâmetros de entrada não inválidos") });
    }

    async deleteProfissao(id: number): Promise<void> {
         await this.prisma.profissao.delete({
            where: {
                id
            },
        }).catch(() => { throw ("Parâmetros de busca não cadastrado") });

    }
    async updateProfissao(id: number, dados: Profissao): Promise<Profissao> {
        await this.prisma.profissao.update({
            where:{
                id
            },
            data: {
                nome: dados.nome,
            },
        }).catch(() => { throw ("Parâmetros de entrada  inválidos") });

        return this.getProfissao(id);
    }
   
}   