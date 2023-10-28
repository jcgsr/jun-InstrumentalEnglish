// import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Inglês Instrumental
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Esse é o Curso Básico de Inglês Instrumental. Aqui, aprenderás o
        vocabulário compreendido no nível A1 (Iniciante) de Inglês elaborado
        pelo{" "}
        <u>
          <a href="https://www.coe.int/en/web/common-european-framework-reference-languages">
            Conselho Europeu
          </a>{" "}
        </u>{" "}
        de uma forma ortodoxa.
      </h4>
    </section>
  );
}
