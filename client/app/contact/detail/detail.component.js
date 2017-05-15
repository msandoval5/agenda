import _ from 'lodash';
import ngMessage from "angular-messages";
//import uiMask from "angular-input-masks";

class DetailContactController {

  /*@ngInject*/
  constructor($http, $state, $stateParams) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.isUpdate = false;
    this.contactId = this.$stateParams.contactId;
    this.contact = {
      name: '',
      lastName:'',
      email:'',
      phoneNumber:'',
      address:'',
      birthday:''
    };
  }

  $onInit() {
    const { contactId } = this;
    if(contactId){
      this.isUpdate = true;
      this.$http.get(`/api/contacts/${contactId}`)
        .then((response) => {
          response.data.birthday = new Date(response.data.birthday)
          _.merge(this.contact, response.data)
        });
    }
   var myName = document.getElementById("name").focus()
  }

  updateContact(){
    const { contactId } = this;
    this.$http.put('/api/contacts/' + contactId, this.contact)
      .then((res) => {
        this.$state.go('contacts:list')
      })
  }

  saveContact(){
    if(this.isUpdate){
      this.updateContact();
    }else{
      this.createContact();
    }
  }

  createContact(){
    this.$http.post('/api/contacts',this.contact)
      .then((res) => {
        this.$state.go('contacts:list')
      })

  }

}

export default angular.module('agenda.contact:detail',[ngMessage]).component('detailContact', {
  template: require('./detail.html'),
  controller: DetailContactController
}).name
