import { Router } from "express";
import x from "../database/studentArray.js";

const router= new Router();

router.get('/', (req, res) => {
    res.render('student',{student:x});
});


export default router;