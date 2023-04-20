import { Request, Response } from 'express'
import LoginService from '../services/Login.service';

class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.signIn = this.signIn.bind(this);
  }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    const { type, message } = await this.loginService.getLoginToken(email, password);

    if (type) return res.status(500).json({ message });

    return res.status(200).json(message);
  }
}

export default LoginController;