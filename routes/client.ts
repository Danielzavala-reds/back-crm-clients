import { Router } from "express";
import { getRegistro, getRegistros, postRegistro, putRegistro, deleteUsuario } from '../controllers/clients';

const router = Router();

router.get('/',       getRegistros);
router.get('/:id',    getRegistro);
router.post('/',      postRegistro);
router.put('/:id',    putRegistro);
router.delete('/:id', deleteUsuario);


export default router;