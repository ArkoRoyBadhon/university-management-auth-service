import { IGenericErrorMessage } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  //   errorMessages: {
  //     path: string
  //     message: string
  //   }[]
  errorMessages: IGenericErrorMessage[];
};
