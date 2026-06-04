import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:5000");
  const images = await res.json();

  return (
    <>
      <nav className="flex justify-center items-center p-3 gap-3 bg-gray-700">
        <Link href="/" className="p-3 rounded-2xl bg-black">
          All Images
        </Link>
        <Link href="/upload" className="p-3 rounded-2xl bg-black">
          Upload Image
        </Link>
      </nav>

      <div>
        {images.map((img: unknown) => (
          <div key={img?._id} className="p-4 border-b border-gray-200">
            <Image
              src={`${img?.url}`}
              alt={"images"}
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
