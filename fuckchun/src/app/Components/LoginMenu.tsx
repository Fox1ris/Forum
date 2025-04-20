"use client"
import React, {useState} from 'react';

import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";

export default function LoginMenu() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    const openLogin = () => {
        setLoginOpen(true);
    };
    const openRegister = () => {
        setRegisterOpen(true);
        setLoginOpen(false);
    }

    return (
        <div className="flex">

            <section className="absolute top-5 right-5 bg-black h-7 w-40 text-center rounded-lg">
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
                                    className="flex items-center bg-white mt-10 rounded-lg h-8 w-60 mx-auto text-black indent-4"
                                    placeholder="Укажите логин">
                                </input>
                                <input
                                    className="flex items-center bg-white my-10 rounded-lg h-8 w-60 mx-auto text-black indent-4"
                                    placeholder="Введите пароль">
                                </input>
                                <div
                                    className="flex items-wrap rounded-lg h-8 w-60 mt-15 mx-auto text-black">
                                    <button
                                        className="flex flex-wrap bg-white rounded-lg h-8 w-full mx-auto items-center indent-8">
                                        Логин
                                    </button>
                                    <button onClick={openRegister}
                                            className="flex flex-wrap bg-white rounded-lg h-8 w-full ml-6 mx-auto items-center indent-2">
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
                                Вход
                                <input
                                    className="flex items-center bg-white mt-7 rounded-lg h-8 w-60 mx-auto text-black indent-4"
                                    placeholder="Укажите логин">
                                </input>
                                <input
                                    className="flex items-center bg-white my-7 rounded-lg h-8 w-60 mx-auto text-black indent-4"
                                    placeholder="Введите пароль">
                                </input>
                                <input
                                    className="flex items-center bg-white rounded-lg h-8 w-60 mx-auto text-black indent-4"
                                    placeholder="Введите почту">
                                </input>

                                <button
                                    className="flex bg-white rounded-lg h-8 w-60 mt-15 mx-auto items-center  text-black indent-18">
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