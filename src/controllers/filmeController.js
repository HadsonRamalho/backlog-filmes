import filmeModel from "../models/filmeModel.js";

class filmes{
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        } catch(err){
            res.status(500).json({erro: err.message});
        }
    }
    async CadastrarFilme(req, res){
        try{
            const FilmeCadastrado = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso'}, FilmeCadastrado);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }
}

export default filmes;