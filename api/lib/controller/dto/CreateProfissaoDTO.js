"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Profissao_1 = __importDefault(require("../../core/entity/Profissao"));
const validate = (data) => {
    const obj = zod_1.z.object({
        nome: zod_1.z.string({ required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String", })
            .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" }),
    });
    const result = obj.parse(data);
    return new Profissao_1.default(result.nome);
};
exports.default = {
    validate
};
