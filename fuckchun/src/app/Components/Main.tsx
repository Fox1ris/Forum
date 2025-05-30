"use client"
import {HeartIcon} from "@heroicons/react/24/solid";
import LoginMenu from "@/app/Components/LoginMenu";
import {useEffect, useState} from "react";


export default function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/posts/")
            .then(response => response.json())
            .then(data => setPosts(data));
    },[]);
    console.log(posts);

    return (
        <div className="flex">

            <div className="flex flex-wrap">
                <section className="inset-y-0 min-h-screen left-0 bg-cyan-600 min-w-[300px] italic">
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
                </section>

                <section className="flex flex-col mt-5">

                    <footer className="flex ml-90 h-[50px] text-3xl text-gray-800">FuckChun</footer>

                    <div
                        className="ml-40 mt-20 max-h-50 max-w-150 bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-1000 hover:max-h-full hover:whitespace-normal whitespace-nowrap overflow-hidden">
                        <h3 className="text-xl font-bold text-gray-800">Заголовок</h3>
                        <p className="text-gray-600 mt-2 hover:text-clip">
                            {posts.map((post) => (post.title))}
                        </p>
                        <div className="flex flex-wrap">
                            <input type="text" className="mt-3 px-3 text-black border w-70 rounded-lg border-black"
                                   placeholder="Коментировать"/>
                            <button className="mt-3 px-3 ml-6 w-30 text-black border rounded-lg border-black">
                                Отправить
                            </button>
                            <button className="ml-10 mt-3 text-3xl focus:text-red-900">
                                <HeartIcon className="h-6 w-6"/>
                            </button>
                        </div>

                    </div>

                </section>
            </div>

            <LoginMenu/>


        </div>
    )
}