import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const vPort  =  process.env.PORT || 3333;
app.listen(vPort, () => console.log("Backend server live on " + vPort));

app.get('/', (req, res) => {
    res.send("Backend server live on " + vPort);
});
