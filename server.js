import express from "express";
import { engine } from 'express-handlebars';
import studRout from "./routs/studRouts.js";

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temp');

app.use('/stud',studRout),

app.listen(3000);