import { Request, Response } from "express";
import { createScrap } from "../../services";

export const getPrices = async(req:Request, res:Response) => {
    try {
        const data = await createScrap();
        return res.status(200).json({
            data
        })
    } catch (error) {
        console.error(error);
        return res.status(400);
    }
}

