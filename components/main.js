/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

import Carousel from "./Carousel";

/* eslint-disable @next/next/no-img-element */

const main = () => {
 
  return (
    <>
      <section id="HOME" className="bg-white  dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-8 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-xl xl:text-6xl dark:text-white"
            >
              Noticias <br />
              Produtos & Marcas
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="30"
              data-aos-duration="800"
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            >
              Aqui na Eckisil Freios você encontra os melhores produtos e as
              melhores marcas para o seu caminhão!{" "}
              <Link
                href="https://www.eckisil.com.br/eckisil/produtos/PDFS/kitferramentas.pdf"
                className="hover:underline"
                target="_blank"
              >
                Como Kit de Ferramentas para Freio a Disco
              </Link>{" "}
              e Ajustadores{" "}
              <Link
                href="https://www.eckisil.com.br/eckisil/produtos/PDFS/aplicacao.pdf"
                target="_blank"
                className="hover:underline"
              >
                Automático RA1
              </Link>{" "}
              ou{" "}
              <Link
                href="https://www.eckisil.com.br/eckisil/produtos/PDFS/aplicacao.pdf"
                target="_blank"
                className="hover:underline"
              >
                Automático S-RA2
              </Link>
              .
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
              <Link
                data-aos="fade-right"
                data-aos-delay="40"
                data-aos-duration="900"
                href="https://criarmeulink.com.br/u/1694719218"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                target="_blank"
              >
                <div className="flex items-center  ">
                  <img className="h-5 w-5" src="/favicon.ico" alt="github" />

                  <p className="pl-2"> Solicitar Orçamento</p>
                </div>
              </Link>
              <Link
                data-aos="fade-right"
                data-aos-delay="40"
                data-aos-duration="900"
                href="https://www.eckisil.com.br/src/Catalogo_site.pdf"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                target="_blank"
              >
                <div className="flex items-center  ">
                  <img className="h-5 w-5" src="/loja.png" alt="Catalogo de produtos" />

                  <p className="pl-2">Catalogo de Produtos</p>
                </div>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img src="/hero.jpg" alt="hero image" />
          </div>
        </div>
      <Carousel  /> 
      </section>
      
      
    </>
  );
};

export default main;
