import type { Request, Response, NextFunction } from "express";
declare const checkErrors: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const validatePassword: (import("express-validator").ValidationChain | typeof checkErrors)[];
export {};
//# sourceMappingURL=passwordValidation.d.ts.map