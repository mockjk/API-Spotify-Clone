import express, { Express } from "express";
import { searchItemsController } from "../controller/Search/SearchItemsCOntroller";




const routes = ( app: Express ) => {
    app.use(express.json());
    
    app.get("/searchItems", searchItemsController);
};

export default routes;