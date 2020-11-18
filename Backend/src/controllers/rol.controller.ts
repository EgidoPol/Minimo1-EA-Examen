import {Request, Response} from "express";
import Rol from "../models/rol";

function getRoles(req:Request, res:Response): void {
    Rol.find({}).then((data) => {
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function postRol(req: Request, res: Response): void{
    console.log("Post recibido");
    const rol = new Rol({
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "opciones": req.body.opciones
    });
    console.log(req.body);
    rol.save().then((data) =>{
        return res.status(201).json(data);
    }).catch((err) =>{
        return res.status(500).json(err);
    })

}
 function updateRol(req: Request, res:Response): void{
     const  nombre: string =  req.body.nombre;
     const  descripcion: string =  req.body.descripcion;
     const  opciones: string =  req.body.opciones;
    
     Rol.update({"nombre": nombre}, {$set: {"descripcion": descripcion, "opciones": opciones}})
     .then((data) => {
        res.status(201).json(data);
        }).catch((err) => {
        res.status(500).json(err);
})

 }
export default{getRoles, postRol, updateRol};