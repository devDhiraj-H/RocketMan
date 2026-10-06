import type { Request, Response } from "express";
import { checkLogin, registerUser } from "../service/userService.js";

export const canLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const result = await checkLogin(username, password);

    if (result) {
      if (result == true) {
        res.status(200).json({
          message: "login successful",
          data: result,
        });
      } else {
        res.status(401).json({
          message: "username or password is incorrect",
          data: result,
        });
      }
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const doRegsiter = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    const result = await registerUser(username, password, email);

    console.log(result);

    res.status(201).json({
      message: "user data created successfully",
      user: result,
    });
  } catch (err: any) {
    res.status(409).json({
      error: err.message,
    });
  }
};
