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
const GetProfissao_1 = __importDefault(require("../core/usecase/profissao/GetProfissao"));
const CreateProfissao_1 = __importDefault(require("../core/usecase/profissao/CreateProfissao"));
const CreateProfissao_2 = __importDefault(require("../core/usecase/profissao/CreateProfissao"));
const ProfissaoPostgres_1 = require("../infra/repository/ProfissaoPostgres");
const CreateProfissaoDTO_1 = __importDefault(require("./dto/CreateProfissaoDTO"));
const GetProfissoes_1 = __importDefault(require("../core/usecase/profissao/GetProfissoes"));
class ProfissaoController {
    static get(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissaoPostgres_1.ProfissaoPostgres();
            const usecase = new GetProfissoes_1.default(repository);
            const profissao = yield usecase.execute(req.params);
            return profissao;
        });
    }
    static getById(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissaoPostgres_1.ProfissaoPostgres();
            const usecase = new CreateProfissao_2.default(repository);
            const profissao = yield usecase.execute(req.params.id);
            return profissao;
        });
    }
    // static async update (req: any, body: any) {
    // 	const repository = new ProfissaoPostgres();
    // 	const usecase = new GetProfissao(repository);
    // 	const profissao = await usecase.execute(req.params);
    // 	return profissao;
    // }
    static create(params, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = CreateProfissaoDTO_1.default.validate(body);
            const repository = new ProfissaoPostgres_1.ProfissaoPostgres();
            const usecase = new CreateProfissao_1.default(repository);
            const profissao = yield usecase.execute(data);
            return profissao;
        });
    }
    static delete(params, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissaoPostgres_1.ProfissaoPostgres();
            const usecase = new GetProfissao_1.default(repository);
            const profissao = yield usecase.execute(params);
            return profissao;
        });
    }
}
exports.default = ProfissaoController;
