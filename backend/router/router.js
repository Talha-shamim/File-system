import express from 'express';
import { addFile, delete_file, getFileByDocAndHos, getFiles, postFolder, removeFile } from '../controller/controller.js';

const router = express.Router();

router.get('/:id', getFiles);
router.post('/Folder/:id', postFolder);
router.post('/update_file/:id', removeFile);
router.get('/fileByDH/:d/:h', getFileByDocAndHos);
router.post('/file/:id', addFile);
router.post('/delete_file/:id/:d/:h', delete_file);

export default router;