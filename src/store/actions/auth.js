import { createAction } from "@reduxjs/toolkit";

const LOGIN = 'LOGIN'
const loginAction = createAction(LOGIN);
export { loginAction }