export default function Login({register, open, login}) {

    return (
        <div className={`flex flex-col  ${open ? "scale-100 opacity-100" : "scale-125 opacity-0 fixed"}`}>
            <header className="flex justify-center text-2xl mb-10 ">Логин</header>

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
            type="checkbox"
            name="savePassword"
            />
            <label for={} className="flex justify-center text-2xl"></label>

            <button
                onClick={() => {register(true); login();}}
                className=""
            >
                Регистрация
            </button>
        </div>
    )
}