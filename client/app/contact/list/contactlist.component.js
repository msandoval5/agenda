import angular from 'angular';
import deleteModal from './deleteModal';
//import uiMask from "angular-input-masks";

class ContactListController{

    /*@ngInject*/
    constructor($http, $uibModal){
        this.$http = $http;
        this.$uibModal = $uibModal;
        this.sortType = 'name';
        this.sortReverse = false;
        this.newContact = {
            name: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            birthday: ''
        };
        this.contactsList = [];
    }

    $onInit(){
        this.$http.get('/api/contacts')
        .then(response => {
            this.contactsList = response.data;
        });
    }

    //destroyContact(){
       // alert("You are about to delete this contact")
   // }
    changeContact(){
        alert("You are about to update this contact");
    }

    createContact(){
        this.$http.post('/api/contacts', this.newContact)
        .then((res) => {
            alert(JSON.stringify(res))
        })
    }

    deleteContact(contactId){
   this.$uibModal.open({
     template: require('./deleteModal.html'),
     controller: deleteModal,
     controllerAs: '$ctrl',
     resolve: {
       contactId:function () {
         return contactId;
       }
     }
   })
     .result.then((result) => {
     if(result){
       this.contactsList();
     }
   })
 }

}

export default angular.module('agenda.contacts:list', [])
.component('contactsList', {
    template: require('./contactlist.html'),
    controller: ContactListController

})
.name;