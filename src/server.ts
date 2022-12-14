import express, { Request, Response } from 'express';
import cors from 'cors';
import messageRouter from './route/message.route';
const mensajes:Array<string> = []
const app = express();

app.use(cors());
app.use(express.json())

//Metodo peticion GET/POST/PUT/DELETE...
// app.get('/', (req:Request,res:Response)=>{
//     res.json({message: mensajes})
// })
// app.get('/message/:id',(req:Request, res:Response)=>{
//     const id = Number(req.params.id);
//     res.json({message: mensajes[id]})
// })
// app.get('/message', (req:Request, res:Response)=>{
//     const cantidad = req.query.cantidad;
//     const message = req.query.message;
//     res.json({message: `tenemos que comprar ${cantidad} ${message}`})
// })

// app.put('/message/:id', (req:Request, res:Response)=>{
//     const mensaje = req.body.nombre;
//     const id = Number(req.params.id);
//     mensajes[id] = mensaje;
//     res.json({message: mensajes[id]})
// })
// app.delete('/message/:id', (req:Request, res:Response) => {
//     const id = Number(req.params.id);
//     mensajes.splice(id,1);
//     res.json({message: `Se ha eliminado la posicion ${id}`})
// })

app.use(messageRouter)

app.listen(3000, ()=>{
    console.log('Server listening on 3000')
})