"use client"
import React, {useState} from 'react';

import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";

export default function LoginMenu() {
    const [loginOpen, setLoginOpen] = useState(false);

    const openLogin = () => {
        setLoginOpen(true);
    };
    const closeLogin = () => {
        setLoginOpen(false);
    };

    return (
        <div className="flex">

            <section className="absolute top-5 right-5 bg-black h-7 w-40 text-center rounded-lg">
                <button onClick={openLogin}>Логин/Регистрация</button>
            </section>
            <Dialog open={loginOpen} onClose={setLoginOpen} className="relative z-">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="h-100 rounded-lg opacity-40 bg-black text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-80 sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            sosal
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div>

    )
}