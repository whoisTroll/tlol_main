import { atom } from "recoil";

export const searchUserNameState = atom({
    key:"searchUserNameState",
    default:"",
})
export const searchUserDataState = atom({
    key:"searchUserDataState",
    default:{}
})