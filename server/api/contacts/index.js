import {Router} from 'express';
import controller from './contacts.controller';

var router = new Router();

router.post('/', controller.createContact)
router.get('/', controller.getContacts)
router.get('/:id', controller.getContact)
router.put('/:id', controller.updateContact)
router.delete('/:id', controller.destroyContact)

module.exports = router;