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
const CreateProfissional_1 = __importDefault(require("../core/usecase/profissional/CreateProfissional"));
const DeleteProfissional_1 = __importDefault(require("../core/usecase/profissional/DeleteProfissional"));
const GetProfissionais_1 = __importDefault(require("../core/usecase/profissional/GetProfissionais"));
const GetProfissional_1 = __importDefault(require("../core/usecase/profissional/GetProfissional"));
const ProfissionalPostgres_1 = require("../infra/repository/ProfissionalPostgres");
const CreatePessoaDTO_1 = __importDefault(require("./dto/CreatePessoaDTO"));
class ProfissionalController {
    static get(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissionalPostgres_1.ProfissionalPostgres();
            const usecase = new GetProfissionais_1.default(repository);
            const profissionais = yield usecase.execute(req.params);
            return profissionais;
        });
    }
    static getById(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissionalPostgres_1.ProfissionalPostgres();
            const usecase = new GetProfissional_1.default(repository);
            const profissional = yield usecase.execute(req.params.id);
            return profissional;
        });
    }
    // static async update (req: any, body: any) {
    // 	const repository = new ProfissionalPostgres();
    // 	const usecase = new GetProfissionais(repository);
    // 	const profissional = await usecase.execute(req.params);
    // 	return profissional;
    // }
    static create(params, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = CreatePessoaDTO_1.default.validate(body);
            const repository = new ProfissionalPostgres_1.ProfissionalPostgres();
            const usecase = new CreateProfissional_1.default(repository);
            const profissionais = yield usecase.execute(data);
            return profissionais;
        });
    }
    static delete(params, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new ProfissionalPostgres_1.ProfissionalPostgres();
            const usecase = new DeleteProfissional_1.default(repository);
            console.log(params);
            const profissionais = yield usecase.execute(params.id);
            return profissionais;
        });
    }
}
exports.default = ProfissionalController;
