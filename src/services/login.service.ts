import loginRepository from "../repository/login.repository";

const loginService = async (data: any) => {
    return await loginRepository.login(data);
}


export default { loginService }