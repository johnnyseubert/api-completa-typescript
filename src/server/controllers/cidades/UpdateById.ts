import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";

interface IParamProps {
   id?: number;
}

interface IBodyProps {
   nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
   params: getSchema<IParamProps>(
      yup.object().shape({
         id: yup.number().integer().required().moreThan(0),
      })
   ),
   body: getSchema<IBodyProps>(
      yup.object().shape({
         nome: yup.string().required().min(3),
      })
   ),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
   console.log(req.params);
   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implentado!");
};