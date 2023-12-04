angular.module("profissionais").factory("profissionaisAPI", ($http, enviroment)=>{
    const _getProfissionais = () => $http.get(enviroment.urlApi+ "/profissional");
    const _createProfissional = (body) => $http.post(enviroment.urlApi+ "/profissional", body);
    const _deleteProfissional = (id) => $http.delete(enviroment.urlApi+ "/profissional/" + id);

    const _getProfissoes = () => $http.get(enviroment.urlApi + "/profissao");
    const _createProfissao = (body) => $http.post(enviroment.urlApi + "/profissao", body);

    return { 
        getProfissionais: _getProfissionais,
        deleteProfissional: _deleteProfissional,
        createProfissional: _createProfissional,

        getProfissoes: _getProfissoes,
        createProfissao: _createProfissao,
     } 
})  