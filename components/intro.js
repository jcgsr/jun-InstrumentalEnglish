// import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        Inglês Instrumental
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        Esse é o Curso Básico de Inglês Instrumental. Aqui, aprenderás em 30
        aulas o vocabulário compreendido no nível A1 (Iniciante) de Inglês
        elaborado pelo{" "}
        <u>
          <a href="https://www.coe.int/en/web/common-european-framework-reference-languages">
            Conselho Europeu
          </a>{" "}
        </u>{" "}
        de uma forma ortodoxa.
        <br />E nessa{" "}
        <Link href="/extra">
          <u>página</u>
        </Link>
        , alguns links para treinares a leitura após teres terminado as 30
        lições.
      </h4>
    </section>
  );
}
