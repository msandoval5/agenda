 /*@ngInject*/
export default ['$uibModalInstance', '$http','contactId', function ($uibModalInstance, $http, contactId) {
 this.confirmDelete = () => {
   $http.delete(`/api/contacts/${contactId}`)
     .then(() =>{
       $uibModalInstance.close(true)
     })

 }
 this.cancel = function () {
   $uibModalInstance.close(false);
 }
}]