import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contact.routes';
import contactList from './list/contactlist.component';
import detailContact from './detail/detail.component';

export default angular.module('agenda.contacts', [uiRouter, contactList, detailContact])
.config(routing)
.name;