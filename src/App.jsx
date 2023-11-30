import { useState, useEffect } from "react";

function App() {
const [theme, setTheme] = useState(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  }
  return "light"
});

useEffect(() => {
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark")
  } else {
    document.querySelector("html").classList.remove("dark")
  }
},[theme])

const handleChangeTheme = () => {
  setTheme(prevTheme => prevTheme == "light"? "dark" : "light")
}

  return (
    <div className=" bg-white flex flex-col h-screen flex-wrap dark:bg-black">
      <header className="bg-purple-400 flex flex-row	justify-around items-center	font-medium	dark:text-white dark:bg-purple-900">
        <h1 className="">Pagina de practicas de tailwindcss</h1>
        <nav className="flex  ">
          <div className="px-3	py-3 hover:bg-purple-600 rounded dark:hover:bg-purple-600">Inicio</div>
          <div className="px-3	py-3 hover:bg-purple-600 rounded dark:hover:bg-purple-600">Herramientas</div>
          <div className="px-3	py-3 hover:bg-purple-600 rounded dark:hover:bg-purple-600 ">Mas cosas</div>
        </nav>
      </header>
      <main className="flex ">
        <div className="w-2/4		bg-purple-400 m-8	flex items-center flex-col justify-center text-lg">
          <h3>practicando flex blox</h3>
          <div className="bg-red-500  w-5/12 h-28 py-1 px-1 flex  items-stretch">
            <div className="bg-orange-200 w-4 h-4"></div>
            <div className="bg-orange-300 w-4 h-4 self-auto"></div>
            <div className="bg-orange-400 w-4 h-4"></div>
          </div>
        </div>
        <div className="w-2/4	h-12	bg-purple-400 m-8	flex items-center  justify-center text-lg">Imagnes de cconejos</div>


        <button className="px-4 py-2 inline-block bg-purple-300 rounded m-8	 text-white	hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-300" 
            onClick={handleChangeTheme}>Theme changes</button>
      </main>
            

    </div>
  )
}

export default App
