/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import Galeria from "./galeria";

const firstdescription = () => {
  return (
    <section id="EMPRESA" className="bg-gray-50  dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2  xl:gap-16">
          <div className="text-gray-500 sm:text-lg  dark:text-gray-400">
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              A Empresa
            </h2>
            <p data-aos="fade-right" className="mb-8 font-light lg:text-xl">
              A Eckisil Freios é uma indústria de Auto Peças com sede em
              Curitiba, Paraná, fabricante de Ajustadores Manuais, Ajustadores
              Automáticos e seus componentes e Sistemas para Freios a Disco para
              ônibus e caminhões. Atuando desde 1994, coloca-se entre os
              principais fornecedores desses produtos para o mercado brasileiro,
              sendo que também exporta para países da Europa, Ásia e Américas. A
              sustentação comercial da Eckisil está na infinita busca da
              qualidade de seus produtos e na satisfação total do seu cliente.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Escopo
                  </span>
                  <br />
                  <p>
                    Projeto, produção e comercialização de ajustadores de freios
                    e caliper de freio a disco pneumático para veículos
                    rodoviários automotores.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Política da Qualidade
                  </span>
                  <br />
                  <p>
                    Necessidades de nossos clientes, por meio da melhoria
                    contínua, através do monitoramento de nossos processos,
                    objetivando o envolvimento e aprimoramento de todos os
                    colaboradores. Fabricar e comercializar produtos que
                    satisfaçam as
                  </p>
                </div>
              </li>
              <li data-aos="fade-right" className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    ISO 9001
                  </span>
                  <p>
                    Desde 2004 a empresa tem certificação ISO 9001 expedida pelo
                    órgão Bureau Veritas, estando atualmente na versão 2015,
                    desde dezembro de 2016. Demonstrando que está preocupada em
                    manter seu Sistema de Gestão da Qualidade, como definido em
                    sua Politica da Qualidade, atendendo aos objetivos por meio
                    da melhoria contínua e satisfazendo as necessidades de seus
                    clientes.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Galeria />
          {/* <img
            data-aos="fade-left"
            className="hidden w-full  mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://www.eckisil.com.br/imagens/Fabrica_vista_do_alto.jpg"
            alt="Imagem da Eckisil freios"
          /> */}
        </div>

        <div className="items-center  gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            data-aos="fade-right"
            className="hidden w-full rounded-2xl border-2 border-sky-500 mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://www.eckisil.com.br/imagens/D119_B%20098.jpg"
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Nossa Historia
            </h2>
            <p data-aos="fade-left" className="mb-8 font-light lg:text-xl">
              Em 1994, a partir de seus primeiros momentos, a empresa tinha seu
              foco voltado em atividades de usinagem de peças em geral,
              atendendo assim diversas empresas da grande Curitiba. Antes de
              iniciar essa empreitada, os irmãos Lisecki batalharam muito como
              caminhoneiros e com o conhecimento que tinham sobre caminhão,
              aliado a uma grande visão de mercado, começaram então a produzir
              peças para freios da linha pesada, mais especificamente reparos de
              ajustadores de freios. Com o sucesso obtido ao entrar nesse ramo
              passaram então a fabricar Ajustadores Completos, tanto os manuais
              quanto os automáticos, iniciando assim a Eckisil Freios. A partir
              de então, a empresa expandiu seu negócio, trabalhando com uma
              ampla gama de componentes para freios, ampliou o parque fabril e
              mantém desde 2004 o certificado ISO 9001, estando na atual versão
              2008. Com isso, atende a todo o território nacional e exporta seus
              produtos a diversos países das Américas, Europa e Ásia oferecendo
              sempre produtos de extrema qualidade a preços muito competitivos.
              Desde 1997 a Eckisil é patrocinadora da Fórmula Truck. Chegou a
              patrocinar 16 de 20 caminhões no início da categoria, hoje
              patrocina a equipe ABF Competições com o piloto Geraldo Piquet e
              com o tetracampeão da categoria, Wellington Cirino.
            </p>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default firstdescription;
