"use server";
import { cookies } from "next/headers";

export const logOut = () => {
    cookies().delete("accessToken")
    cookies().delete("refreshToken")
}