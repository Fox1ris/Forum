

export default function Register({login, open}) {

    return (
        <div onClick={e => e.stopPropagation()}
             className={`flex flex-col transition-all ${open ? "scale-100 opacity-100 visible" : "scale-125 opacity-0 invisible"}`}>
            <header className="flex justify-center text-2xl">Регистрация</header>
            <input
                type="text"
                placeholder="Введите логин"
                className="border border-black"
            />
            <input
                type="password"
                placeholder="Введите пароль"
                className="border border-black"
            />
            <input
                type="email"
                placeholder="Введите почту"
                className="border border-black"
            />
            <button
                onClick={login}
            >
                Register
            </button>
        </div>
    )
}