'use strict';

export default function routes($stateProvider) {
    'ngInject';

    $stateProvider.state('contacts:list', {
        url: '/contacts',
        template: '<contacts-list><contacts-list>'
    });

    $stateProvider.state('contacts:new', {
        url:'/contacts/new',
        template: '<detail-contact></detail-contact'
    });

    $stateProvider.state('contacts:update', {
        url:'/contacts/:contactId',
        template:'<detail-contact></detail-contact>'
    });
}