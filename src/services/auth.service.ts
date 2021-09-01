import appwrite from "config/appwrite";
import { CurrentUser } from "models/CurrentUser.model";

class AuthService {
  async signup(
    name: string,
    email: string,
    password: string
  ): Promise<CurrentUser> {
    return appwrite.account.create(email, password, name);
  }
  async login(email: string, password: string) {
    return appwrite.account.createSession(email, password);
  }
  async logout() {
    return appwrite.account.deleteSessions();
  }
  async getMe(): Promise<CurrentUser> {
    return appwrite.account.get();
  }
}

export default new AuthService();
