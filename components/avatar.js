import Image from "next/legacy/image";
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl ml-2 font-bold">{name}</div>
    </div>
  );
}
