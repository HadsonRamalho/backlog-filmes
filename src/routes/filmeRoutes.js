import express from "express";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();
const filme = new filmeController();

router.get('/', (req, res) => {
    try{
        filme.BuscarTodosOsFilmes(req, res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
});

router.get('/BuscarFilmePorId/:id'), (req, res) =>{
    try{
        const filmeEncontrado = filme.BuscarFilmePorId(req, res, req.params.id);
        if (!filmeEncontrado){
            return res.status(404).json({erro: 'Filme não encontrado'});
        }
        res.json(filmeEncontrado);        
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
}

router.post('/', (req, res) => {
    try{
        filme.CadastrarFilme(req, res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
});


export default router;