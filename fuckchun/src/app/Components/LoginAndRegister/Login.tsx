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
            <div className="flex justify-center left mb-10 ">
                <input
                    type="checkbox"
                    name="savePassword"
                    id="savePassword"
                />
                <label htmlFor="savePassword" className="ml-2">Запомнить пароль</label>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => {register(true); login();}}
                    className="border-black rounded-lg bg-black w-40 text-white"
                >
                    Логин
                </button>

                <button
                    onClick={() => {register(true); login();}}
                    className="border-black rounded-lg bg-black ml-6 w-40  text-white"
                >
                    Регистрация
                </button>

            </div>

        </div>
    )
}