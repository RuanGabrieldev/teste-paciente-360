
angular.module("profissionais").controller("profissionaisController", ($scope, profissionaisAPI)=>{
   $scope.app = "Lista de profissionais";
   $scope.cadastrarProfissional = false;
   $scope.cadastrarProfissoes = false;
   $scope.profissionais = [];
   $scope.profissoes = [];

   const carregarProfissionais = () =>{

    profissionaisAPI.getProfissionais().then((data) =>{
        $scope.profissionais = data.data.map(profissional => {
            profissional.dataNascimento = new Date(profissional.dataNascimento);
            return profissional;
        });
    })
   }

   $scope.excluirProfissional = (id) =>{
    profissionaisAPI.deleteProfissional(id).then((data) =>{
        $scope.profissionais = data.data;
        Swal.fire({
            title: 'Profissional excluído com sucesso!!',
            icon: 'success',
          })
    })
   }

   $scope.adicionarProfissional = (profissional) =>{
    profissionaisAPI.createProfissional(profissional).then((data) =>{
        $scope.profissionais = data.data;
        Swal.fire({
            title: ('Profissional ' +  (!profissional.id ? 'adicionado' : 'atualizado') + ' com sucesso!!'),
            icon: 'success',
        })
          $scope.cadastrarProfissional = false;
    })
   }

   $scope.editarProfissional = (profissional) =>{
    $scope.cadastrarProfissional = true;
    $scope.profissional = profissional;
   }

   $scope.abrirOuFecharFormCriacaoProfissional = (bool) =>{
    $scope.cadastrarProfissional = bool;
    $scope.cadastrarProfissao = false;
    $scope.profissional = null;
   }

   
   const carregarProfissoes = () =>{
    profissionaisAPI.getProfissoes().then((data) =>{
        $scope.profissoes = data.data;
    })
   }

   $scope.adicionarProfissao = (profissao) =>{
    profissionaisAPI.createProfissao(profissao).then((data) =>{
        $scope.cadastrarProfissao = false;
        Swal.fire({
            title: 'Profissão criada com sucesso!!',
            icon: 'success',
        })
        carregarProfissoes();
    })
   }
   

   $scope.abrirOuFecharFormCriacaoProfissao = (bool) =>{
    $scope.cadastrarProfissao = bool;
    $scope.cadastrarProfissional = false;
   }


   carregarProfissionais();
   carregarProfissoes();
    
})