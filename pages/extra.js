import Link from "next/link";
export default function Extra() {
  return (
    <>
      <div className="flex flex-col items-center m-auto justufy-center">
        <h1 className="m-auto mt-8 text-6xl font-bold">
          MATERIAL DE LEITURA EXTRA
        </h1>
        <div>
          <ul className="mt-12 text-2xl">
            <li className="mb-6">
              <a href="https://test-english.com/reading/a1/" target="_blank">
                A1 Reading Tests
              </a>
            </li>
            <li className="mb-6">
              <a
                href="https://learnenglishteens.britishcouncil.org/skills/reading/a1-reading"
                target="_blank"
              >
                A1 reading - LearnEnglish Teens - British Council
              </a>
            </li>
            <li className="mb-6">
              <a href="https://lingua.com/english/reading/" target="_blank">
                English Reading: English Texts for Beginners{" "}
              </a>
            </li>
            <li className="mb-6">
              <a
                href="https://learnenglish.britishcouncil.org/skills/reading/a1-reading"
                target="_blank"
              >
                A1 reading | LearnEnglish
              </a>
            </li>
            <li className="mb-6">
              <a
                href="https://www-cathoven-com.webpkgcache.com/doc/-/s/www.cathoven.com/english-teaching-resources/a1-elementary/"
                target="_blank"
              >
                A1 - Elementary
              </a>
            </li>
          </ul>
        </div>
        <button className="px-4 py-2 text-2xl font-bold text-white bg-black rounded hover:bg-gray-900 transition duration-500">
          <Link href="/">Aulas</Link>
        </button>
      </div>
    </>
  );
}
