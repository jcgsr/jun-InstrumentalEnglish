import Container from "./container";

import Image from "next/legacy/image";
import imageJo from "../public/assets/blog/authors/jo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t dark:bg-slate-900 dark:text-white border-accent-2">
      <Container>
        <div className="py-28  flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p>Sobre o autor,</p>{" "}
            <a
              href="https://jovane.netlify.app/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <Image
                src={imageJo}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
                alt="Jovane Rocha"
              />
              Jovane Rocha
            </a>
            <p>
              Pernambucano do Recife, alvirrubro, pai (abestalhado) de
              Diana, Beethoven, Mozart, Brenda, Nina e Mia. Vegetariano,
              defensor dos direitos dos animais, enxadrista,
              schopenhauriano, socrático, guitarrista (admirador da Les
              Paul), bebedor de whisky. Pós-graduado em Tradução pela
              Fanese, formado em Letras Inglês e mestre em Letras pela
              Universidade Federal de Sergipe. E ainda: web (front-end)
              developer.
            </p>
          </div>
          <h4 className="font-bold mt-12 md:ml-8">
            &copy; 2022 - Inglês Instrumental <br />
            <p>Todo os Direitos Reservados</p>
          </h4>{" "}
        </div>
      </Container>
    </footer>
  );
}
