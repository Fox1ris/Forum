import {HeartIcon} from "@heroicons/react/24/solid";


export default function Main() {


    return (
        <div className="flex flex-wrap">

            {/*При увелицении длинны страницы меню не растягивается*/}
            <div className=" inset-y-0 min-h-screen left-0 bg-cyan-600 min-w-[300px] italic">
                <h1 className="mt-5 text-center text-black text-2xl">
                    Menu
                </h1>
                <div className="mt-10 mr-4 ml-5 indent-4 ">
                    <div className=" rounded-lg bg-cyan-700 hover:scale-105  hover:shadow-xl">
                        Forum
                    </div>
                    <div className="my-4 rounded-lg bg-cyan-700 hover:scale-105 hover:shadow-xl">
                        Memes
                    </div>
                    <div className="my-4 rounded-lg bg-cyan-700 hover:scale-105 hover:shadow-xl">
                        Fotos
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-5">
                <div>
                    <footer className="flex ml-90 h-[50px] text-3xl text-gray-800">FuckChun</footer>
                </div>

                <div
                    className="ml-40 mt-20 min-w-150 max-w-xs bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:scale-y hover:whitespace-normal whitespace-nowrap overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-800">Заголовок</h3>
                    <p className="text-gray-600 mt-2">
                        Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении                         Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении Длинный текст, который будет полностью показан при наведении

                    </p>
                    <div className="flex flex-wrap">
                        <input type="text" className="mt-3 px-3 text-black border w-70 rounded-lg border-black" placeholder="Коментировать"/>
                        <button className="mt-3 px-3 ml-6 w-30 text-black border rounded-lg border-black">
                            Отправить
                        </button>
                        <button className="ml-10 mt-3 text-3xl focus:text-red-900">
                            <HeartIcon className="h-6 w-6" />
                        </button>
                    </div>

                </div>
            </div>
        <div className="ml-[650px] mt-5 bg-black h-7 w-40 text-center rounded-lg">
            Логин/Регистрация
        </div>






        </div>
    )
}