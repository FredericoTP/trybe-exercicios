import UserModel from '../models/User.model';
import db from '../models';
import { validateEmail } from './validations/validationsInputValues';
import { generateToken } from '../utils/auth';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(db);
  }

  async getLoginToken(email: string, password: string) {
    const error = validateEmail(email);
    if (error.type) return error;

    const userInfo = await UserModel.findOne({ where: { email } });
    if (!userInfo) {
      return { type: 'BAD_REQUEST', message: 'Invalid fields' };
    }

    const token = generateToken({
      id: 1,
      name: '',
    });

    return { type: null, message: { token } };
  }
}

export default UserService;