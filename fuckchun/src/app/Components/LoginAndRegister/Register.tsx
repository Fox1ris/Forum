

export default function Register({login, open}) {

    return (
        <div onClick={e => e.stopPropagation()}
             className={`flex flex-col transition-all ${open ? "scale-100 opacity-100 visible" : "scale-125 opacity-0 invisible"}`}>
            <header className="flex justify-center text-2xl mb-10 ">Регистрация</header>

            <input
                type="text"
                placeholder="Введите логин"
                className="border-2 rounded-full border-black my-5 h-10 indent-3 text-xl"
            />
            <input
                type="password"
                placeholder="Введите пароль"
                className="border-2 rounded-full border-black my-5 h-10 indent-3 text-xl"
            />
            <input
                type="email"
                placeholder="Введите почту"
                className="border-2 rounded-full border-black my-5 h-10 indent-3 text-xl"
            />
            <div className="flex justify-center">
                <button
                    onClick={login}
                    className=" border-black rounded-lg bg-black ml-6 w-40  text-white"
                >
                    Register
                </button>
            </div>

        </div>
    )
}