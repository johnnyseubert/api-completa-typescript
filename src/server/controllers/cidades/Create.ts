import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { Request, Response } from "express";
import * as yup from "yup";
import { CidadesProvider } from "../../database/providers/cidades";

interface IBodyProps extends Omit<ICidade, "id"> {}

export const createValidation = validation((getSchema) => ({
   body: getSchema<IBodyProps>(
      yup.object().shape({
         nome: yup.string().required().min(3),
      })
   ),
}));

export const create = async (
   req: Request<{}, {}, IBodyProps>,
   res: Response
) => {
   const result = await CidadesProvider.create(req.body);

   if (result instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
         errors: {
            default: result.message,
         },
      });
   }

   return res.status(StatusCodes.CREATED).json({ id: result });
};
