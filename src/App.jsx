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
            <button className="px-4 py-2 inline-block bg-purple-300 rounded m-4 text-white	hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-300" 
            onClick={handleChangeTheme}>Theme changes</button>

    </div>
  )
}

export default App
