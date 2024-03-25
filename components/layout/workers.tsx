import Image from "next/image";

export default function Workers({ workers }: { workers: number }) {
  const label = "Travailleurs";
  return (
    <div className="counter">
      <Image className="resource-img" src={`/${label.toLowerCase()}.png`} width={512} height={350} alt={label} />
      {workers}/{workers}
    </div>
  );
}
