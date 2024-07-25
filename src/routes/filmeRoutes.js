import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    try{

    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
});

export default router;