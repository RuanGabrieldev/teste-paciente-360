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
exports.ProfissaoPostgres = void 0;
const Profissao_1 = __importDefault(require("../../core/entity/Profissao"));
const client_1 = require("@prisma/client");
class ProfissaoPostgres {
    constructor() {
        this.prisma = new client_1.PrismaClient({});
    }
    getProfissao(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.prisma.profissao.findFirst({
                where: {
                    id
                },
            }).then(item => new Profissao_1.default(item.nome)).catch(() => { throw ("Parâmetros de busca não cadastrado"); });
            return resultado;
        });
    }
    getProfissoes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.prisma.profissao.findMany({
                take: (params === null || params === void 0 ? void 0 : params.limit) ? Number(params.limit) : 9,
                skip: (params === null || params === void 0 ? void 0 : params.offset) ? Number(params.offset) : 0,
                orderBy: {
                    nome: 'asc',
                },
            });
            return resultado.map(item => new Profissao_1.default(item.nome, item.id));
        });
    }
    createProfissao(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.profissao.create({
                data: {
                    nome: dados.nome,
                },
            }).catch(() => { throw ("Parâmetros de entrada não inválidos"); });
        });
    }
    deleteProfissao(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.profissao.delete({
                where: {
                    id
                },
            }).catch(() => { throw ("Parâmetros de busca não cadastrado"); });
        });
    }
    updateProfissao(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.profissao.update({
                where: {
                    id
                },
                data: {
                    nome: dados.nome,
                },
            }).catch(() => { throw ("Parâmetros de entrada  inválidos"); });
            return this.getProfissao(id);
        });
    }
}
exports.ProfissaoPostgres = ProfissaoPostgres;
