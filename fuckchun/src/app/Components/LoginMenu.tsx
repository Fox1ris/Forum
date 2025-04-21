"use client"
import React, {useState} from 'react';

import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import {redirect} from "next/navigation";

type User = {
    id: number;
    username: string;
    password: string;
    email: string;
}

export default function LoginMenu() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [users, setUser] = useState<string[]>([])
    const [newUserName, setNewUserName] = useState("");
    const [newUserPassword, setNewUserPassword] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");

    const openLogin = () => {
        setLoginOpen(true);
    };
    const openRegister = () => {
        setRegisterOpen(true);
        setLoginOpen(false);
    }
    const toProfile = () => {
        redirect ("/profile/")
    }
    const addUser = () => {
        const newUser: User = {
            id: users.length +1,
            username: newUserName,
            email: newUserEmail,
            password: newUserPassword,
        }
        setUser([...users, newUser]);
        redirect ("/profile/")

    }
    console.log(users);
    return (
        <div className="flex">

            <section
                className="absolute top-5 right-5 bg-black h-7 w-40 text-center rounded-lg active:bg-gray-700 active:scale-105">
                <button onClick={openLogin}>Логин/Регистрация</button>
            </section>

            <Dialog open={loginOpen} onClose={setLoginOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative h-100 opacity-70 transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-70 sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="flex items-center flex-col mt-8 mx-auto ">
                                Вход
                                <input
                                    type="text"
                                    className="flex items-center bg-white mt-10 rounded-lg h-8 w-60 mx-auto text-black indent-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                              invalid:border-pink-500 invalid:text-pink-600
                                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="Укажите логин">
                                </input>
                                <input
                                    type="text"
                                    className="flex items-center bg-white my-10 rounded-lg h-8 w-60 mx-auto text-black indent-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                              invalid:border-pink-500 invalid:text-pink-600
                                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="Введите пароль">
                                </input>
                                <div
                                    className="flex items-wrap rounded-lg h-8 w-60 mt-15 mx-auto text-black">
                                    <button
                                        onClick={toProfile}
                                        className="flex flex-wrap bg-white rounded-lg h-8 w-full mx-auto items-center indent-8 active:bg-gray-300 active:scale-105">
                                        Логин
                                    </button>
                                    <button onClick={openRegister}
                                            className="flex flex-wrap bg-white rounded-lg h-8 w-full ml-6 mx-auto items-center indent-2 active:bg-gray-300 active:scale-105">
                                        Регистрация
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            <Dialog open={registerOpen} onClose={openRegister} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative h-100 opacity-70 transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-70 sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="flex items-center flex-col mt-8 mx-auto ">
                                Регистрация
                                <input
                                    type="text"
                                    value={newUserName}
                                    onChange={(e) => setNewUserName(e.target.value)}
                                    className="flex items-center bg-white mt-7 rounded-lg h-8 w-60 mx-auto text-black indent-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                              invalid:border-pink-500 invalid:text-pink-600
                                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="Укажите логин">
                                </input>
                                <input
                                    type="text"
                                    value={newUserPassword}
                                    onChange={(e) => setNewUserPassword(e.target.value)}
                                    className="flex items-center bg-white my-7 rounded-lg h-8 w-60 mx-auto text-black indent-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                              invalid:border-pink-500 invalid:text-pink-600
                                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="Введите пароль">
                                </input>
                                <input
                                    type="email"
                                    value={newUserEmail}
                                    onChange={(e) => setNewUserEmail(e.target.value)}
                                    className="flex items-center bg-white rounded-lg h-8 w-60 mx-auto text-black indent-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                             invalid:border-pink-500 invalid:text-pink-600
                                             focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="Введите почту">
                                </input>

                                <button
                                    onClick={addUser}
                                    className="flex bg-white rounded-lg h-8 w-60 mt-15 mx-auto items-center text-black indent-18 active:bg-gray-300 active:scale-105">
                                    Регистрация
                                </button>


                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div>

    )
}