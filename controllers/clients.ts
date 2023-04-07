import { Request,Response } from "express";
import Cliente from "../models/client";



export const getRegistros = async (req: Request ,res: Response) => {
    
    try {
        const registros = await Cliente.findAll();
        res.status(200).json(registros)
        
    } catch (error) {
        res.status(404).json({
            msg: 'Error al traer los registros'
        })
    }
};

export const getRegistro = async (req: Request, res: Response) => {

    const {id} = req.params;
    const registro = await Cliente.findByPk(id);

    try {
        if(!registro){
            return res.status(404).json({ msg: `No existe el registro con el id ${id}` });
        } else{
            return res.status(200).json(registro);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });   
    };
}

export const postRegistro = async (req: Request, res: Response) => {

    const {name, number, email, placeWork, description} = req.body;
     
    try {
        const cliente = await Cliente.create({
            name,
            number,
            email,
            placeWork,
            description
        });
        await cliente.save();

        res.status(200).json(cliente)

    } catch (error) {

        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });   
    }


};

export const putRegistro = async (req: Request, res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {

        const cliente = await Cliente.findByPk(id);

        if(!cliente){
            res.status(400).json({
                msg: `No existe el usuario con el id ${id}`
            });
        }

        await cliente?.update(body);

        res.status(200).json({
            cliente,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });   
    }
 
};

export const deleteUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;

    const cliente = await Cliente.findByPk(id);

    if(!cliente){
        res.status(400).json({
            msg: `No existe el usuario con el id ${id}`
        });
    };

    // Eliminación fisica, donde se elimina también en la DB
    await cliente?.destroy();

    // Eliminación lógica, es decir que no se eliminar de la DB
    // await cliente?.update({status: false});

    res.json({
        msg: 'Registro borrado',
        cliente
        
    })
}