export default function Profile() {

    return (
        <div className="min-h-screen">

            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-900">МойАккаунт</h1>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                        <i className="fas fa-bell"></i>
                    </button>
                </div>
            </header>


            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">

                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex flex-col items-center">
                                <div className="relative mb-4">
                                    <img src="https://via.placeholder.com/150" alt="Аватар"
                                         className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"/>
                                    <button
                                        className="absolute bottom-0 right-0 bg-primary-500 text-white rounded-full p-2 hover:bg-primary-600 transition">
                                        <i className="fas fa-pencil-alt text-xs"></i>
                                    </button>
                                </div>
                                <h2 className="text-lg font-semibold">Александра Петрова</h2>
                                <p className="text-gray-500 text-sm">Premium участник</p>
                            </div>

                            <nav className="mt-8 space-y-2">
                                <a href="#"
                                   className="flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-medium">
                                    <i className="fas fa-user-circle mr-3"></i> Профиль
                                </a>
                                <a href="#"
                                   className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                    <i className="fas fa-cog mr-3"></i> Настройки
                                </a>
                                <a href="#"
                                   className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                    <i className="fas fa-lock mr-3"></i> Безопасность
                                </a>
                                <a href="#"
                                   className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                    <i className="fas fa-credit-card mr-3"></i> Платежи
                                </a>
                            </nav>
                        </div>
                    </aside>


                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow overflow-hidden">

                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-800">Личная информация</h2>
                                <p className="text-gray-500 text-sm">Обновите ваши личные данные</p>
                            </div>


                            <form className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                                        <input type="text"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                                        <input type="text"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email"
                                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"/>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                                        <input type="tel"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Дата
                                            рождения</label>
                                        <input type="date"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">Дизайнер интерфейсов из Москвы. Люблю создавать удобные и красивые продукты.</textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button type="button"
                                            className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 mr-3">Отменить
                                    </button>
                                    <button type="submit"
                                            className="px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                                        Сохранить изменения
                                    </button>
                                </div>
                            </form>
                        </div>


                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <i className="fas fa-share-alt text-primary-500 mr-2"></i> Социальные сети
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <i className="fab fa-vk"></i>
                                        </div>
                                        <input type="text" placeholder="vk.com/username"
                                               className="ml-3 flex-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-primary-500"/>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-400">
                                            <i className="fab fa-telegram"></i>
                                        </div>
                                        <input type="text" placeholder="@username"
                                               className="ml-3 flex-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-primary-500"/>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <i className="fas fa-lock text-primary-500 mr-2"></i> Безопасность
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700">Пароль</h4>
                                        <p className="text-sm text-gray-500 mt-1">Последнее изменение: 3 месяца
                                            назад</p>
                                        <button
                                            className="mt-2 text-sm text-primary-500 hover:text-primary-600 font-medium">Изменить
                                            пароль
                                        </button>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <h4 className="text-sm font-medium text-gray-700">Двухфакторная
                                            аутентификация</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-sm text-gray-500">Не активна</span>
                                            <button
                                                className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-md hover:bg-primary-100">Включить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}