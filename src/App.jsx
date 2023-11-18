import { useState, useEffect } from "react";

function App() {
const [theme, setTheme] = useState(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "light"
  }
  return "dark"
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
    <div className=" bg-white  py-4 px-4 flex flex-row h-screen flex-wrap	items-center dark:bg-black">
            <button className="px-4 py-2 bg-purple-300 rounded m-4 text-white	hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-300" 
            onClick={handleChangeTheme}>Theme changes</button>

    </div>
  )
}

export default App
