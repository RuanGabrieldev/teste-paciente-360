"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissionalPostgres = void 0;
const Pessoa_1 = __importDefault(require("../../core/entity/Pessoa"));
const client_1 = require("@prisma/client");
class ProfissionalPostgres {
    constructor() {
        this.prisma = new client_1.PrismaClient({});
    }
    getProfissional(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.prisma.pessoa.findFirst({
                where: {
                    id
                },
                include: {
                    Profissao: true
                },
            }).then(item => new Pessoa_1.default(item.nome, item.data_nascimento, item.cpf, item.telefone, item.observacoes, item.Profissao, item.id)).catch(() => { throw ("Parâmetros de busca não cadastrado"); });
            return resultado;
        });
    }
    getProfissionais(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.prisma.pessoa.findMany({
                take: (params === null || params === void 0 ? void 0 : params.limit) ? Number(params.limit) : 9,
                skip: (params === null || params === void 0 ? void 0 : params.offset) ? Number(params.offset) : 0,
                orderBy: {
                    nome: 'asc',
                },
                include: {
                    Profissao: true
                },
            });
            return resultado.map(item => new Pessoa_1.default(item.nome, item.data_nascimento, item.cpf, item.telefone, item.observacoes, item.Profissao, item.id));
        });
    }
    createProfissional(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                cpf: dados.cpf,
                data_nascimento: dados.dataNascimento,
                nome: dados.nome,
                profissaoId: dados.profissao.id
            };
            if (dados.telefone) {
                data.telefone = dados.telefone;
            }
            if (dados.observacoes) {
                data.observacoes = dados.observacoes;
            }
            yield this.prisma.pessoa.upsert({
                where: {
                    cpf: dados.cpf
                },
                create: data,
                update: data
            }).catch((ex) => { console.log(ex); });
            return yield this.getProfissionais({});
        });
    }
    deleteProfissional(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.pessoa.delete({
                where: {
                    id
                }
            }).catch((ex) => { throw (ex); });
            return yield this.getProfissionais({});
        });
    }
    updateProfissional(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.pessoa.update({
                where: {
                    id
                },
                data: {
                    cpf: dados.cpf,
                    data_nascimento: dados.dataNascimento,
                    nome: dados.nome,
                    observacoes: dados.observacoes,
                    telefone: dados.telefone
                },
            }).catch(() => { throw ("Parâmetros de entrada não inválidos"); });
            return this.getProfissional(id);
        });
    }
}
exports.ProfissionalPostgres = ProfissionalPostgres;
