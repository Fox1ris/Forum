import {PlusIcon} from "@heroicons/react/24/outline";
import Login from "@/app/Components/LoginAndRegister/Login";
import Register from "@/app/Components/LoginAndRegister/Register";
import {useState} from "react";

export default function Modal({open, onClose, login}) {
    const [loginOpen, setLoginOpen] = useState(true);
    const [registerOpen, setRegisterOpen] = useState(false);
    return (
        <div onClick={() => {onClose(); setLoginOpen(true); setRegisterOpen(false)}}
             className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/50" : "invisible"}`}>
            <div
                onClick={e => e.stopPropagation()}
                className={`h-120 w-90 bg-white/90 rounded-lg shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>

                <div className="flex flex-col mt-6 text-black">

                    <Login
                        login={setLoginOpen}
                        open={loginOpen}
                        register={setRegisterOpen}
                    />
                    <Register
                        login={login}
                        open={registerOpen}
                    />
                </div>

            </div>

        </div>
    )
}
