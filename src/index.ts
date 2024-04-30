import dotenv from 'dotenv';
import express,{Request,Response} from 'express';

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());


app.get('/',(req: Request,res: Response)=>{
    res.json({'message': 'Hello, World!'});
});

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});