"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Pessoa_1 = __importDefault(require("../../core/entity/Pessoa"));
const moment_1 = __importDefault(require("moment"));
const validate = (data) => {
    const obj = zod_1.z.object({
        nome: zod_1.z.string({ required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String", })
            .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" }),
        telefone: zod_1.z.string({ invalid_type_error: "Telefone deve ser uma String", })
            .min(11, { message: "Telefone deve possuir pelo menos 11 caracteres" }).max(14, { message: "Telefone deve possuir no máximo 14 caracteres" }).optional().nullable(),
        cpf: zod_1.z.string({ required_error: "O CPF é obrigatório", invalid_type_error: "CPF deve ser uma String", })
            .min(11, { message: "CPF deve possuir pelo menos 11 caracteres" }).max(14, { message: "CPF deve possuir no máximo 14 caracteres" }),
        dataNascimento: zod_1.z.string({ required_error: "O Data de nascimento é obrigatório", invalid_type_error: "Data de nascimento deve ser uma String em formato de date", }),
        observacoes: zod_1.z.string({ invalid_type_error: "Observação deve ser uma String", }).min(2, { message: "Observação deve possuir pelo menos 2 caracteres" }).optional().nullable(),
        profissao: zod_1.z.object({
            id: zod_1.z.number({ required_error: "O ID é obrigatório", invalid_type_error: "ID deve ser um number", }),
            nome: zod_1.z.string({ required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String", })
                .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" })
        })
    });
    const result = obj.parse(data);
    return new Pessoa_1.default(result.nome, (0, moment_1.default)(result.dataNascimento).toDate(), result.cpf, result.telefone || null, result.observacoes || null, { id: result.profissao.id, nome: result.profissao.nome });
};
exports.default = {
    validate
};
