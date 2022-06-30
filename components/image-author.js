export default function ImageAuthor({ name, link }) {
  return (
    <div>
      <span className="text-sm">
        Imagem de{" "}
        <a className="underline" href={link}>
          {name}
        </a>
      </span>
    </div>
  );
}

// classname="font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-right"
