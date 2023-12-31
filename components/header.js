/* eslint-disable @next/next/no-img-element */
import { Link } from "react-scroll";
const header = () => {
  return (
    <header className="fixed w-full z-10">
       <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                             
        </div>
      </nav>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-blue-60">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
       
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              className="h-12 mr-5 sm:h-15"
              alt="eckisil Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            
           
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir Menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#HOME"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#EMPRESA"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                
                >
                  A Empresa
                </a>
              </li>
              <li>
                <a
                  href="#MARKET"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#FEACHER"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                >
                  Blog Eckisil
                </a>
              </li>
              <li>
                <a
                  href="#TEAM"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                >
                  Fórmula Truck
                </a>
              </li>
              <li>
                <a
                  href="#TEAM"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                >
                  Catálogo Virtual
                </a>
              </li>
              <li>
                <a
                  href="#TEAM"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
                >
                  Institucional
                </a>
              </li>
              <li>

              <Link 
              to="contact"
              activeClass="active"
              offset={-30}
              spy={true}
              className="block cursor-pointer	py-2 pl-3 pr-4 text-gray-700 border-b border-red-100 hover:bg-red-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-200"
              
              >
             
                  Contato
               
              
              </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
