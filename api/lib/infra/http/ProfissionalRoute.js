"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissionalRoutes = void 0;
const express_1 = require("express");
const ProfissionalController_1 = __importDefault(require("../../controller/ProfissionalController"));
class ProfissionalRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.post('/', (req, res) => {
            return ProfissionalController_1.default.create(req, res);
        });
        this.router.get('/', (req, res) => {
            return ProfissionalController_1.default.get(req);
        });
        this.router.get('/:id', (req, res) => {
            return ProfissionalController_1.default.getById(req, res);
        });
        // this.router.put('/:id',  (req: any, res: any) => {
        //     return ProfissionalController.update(req, res);
        // });
        this.router.delete('/:id', (req, res) => {
            return ProfissionalController_1.default.delete(req, res);
        });
    }
}
exports.ProfissionalRoutes = ProfissionalRoutes;
