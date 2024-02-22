'use client'
import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative flex justify-center">
        <Image
          src={"/image.jpg"}
          alt="bg"
          width={1200}
          height={1000}
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute top-1/4 bg-white flex flex-col justify-center items-center rounded-xl p-10 gap-10">
          <h1 className="text-2xl font-bold text-center">Book yout first appointment Now</h1>
          <Link href={'/portal'}>
            <Button
              className="flex font-semibold text-lg w-40 h-12"
              buttonType={"primary"}
              handleClick={() => {
                console.log()
              }}
              type={"button"}
            >
              Book
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
