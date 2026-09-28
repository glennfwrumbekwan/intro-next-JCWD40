import { LoginAdminRequest } from "@/features/login/validations/loginSchema";
import axios from "axios";

export async function loginApi({email, password}: LoginAdminRequest) {
  return await axios.post(
    'https://api.backendless.com/DD60CBD4-51C5-4ADA-BF08-7B8497A5C9D5/8D67D8C6-62AA-45BC-8C7E-331629C31DDE/users/login',
    { login: email, password },
  );
}