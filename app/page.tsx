import Image from "next/image";
import bg from "@/public/headerImg.png";
import man from "@/public/man.png";
import e1 from "@/public/e1.png";
import e2 from "@/public/e2.png";
import e3 from "@/public/e3.png";
import e4 from "@/public/e4.png";
import e5 from "@/public/e5.png";
import e6 from "@/public/e6.png";
import e7 from "@/public/e7.png";
import e8 from "@/public/e8.png";

import { IoArrowForwardSharp } from "react-icons/io5";
import { headerSlide, latest, whyUs } from "@/constants/data";
import Count from "./components/count";
import Button from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="relative w-full h-[40rem]">
        <Image
          className="w-full h-full object-cover"
          src={bg}
          alt="Logo"
          fill
          priority
          quality={85}
          placeholder="blur"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 px-10">
          <div className="w-full h-full flex items-center ">
            <div className="">
              <h1 className="text-white text-5xl leading-[63px] font-bold">
                Join us on this exciting <br /> journey of discovery <br /> and
                become a hero in <br />
                your own story.
              </h1>
              <div className="flex gap-1 items-center mt-3">
                {headerSlide.map((opt, index) => (
                  <div
                    key={index}
                    className={`text-white cursor-pointer py-1 px-2 border-b-2 border-white`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 flex flex-col items-center">
        <h2 className="font-semibold text-2xl">Why your ward should be here</h2>
        <p className="text-center text-base text-[#474464]">
          Providing an exceptional educational experience for success
        </p>

        <div className="flex gap-5 my-5">
          {whyUs.map((opt, index) => (
            <div key={index} className="w-full max-w-[27.188rem] py-5 px-2">
              <div className="w-16 h-16 bg-gray-100 flex justify-center items-center mb-4">
                <Image
                  className=" object-contain"
                  src={opt.image}
                  alt={opt.title}
                  width={40}
                  height={40}
                  priority
                  quality={85}
                  placeholder="blur"
                />
              </div>

              <h2 className="font-bold text-2xl text-black mb-2">
                {opt.title}
              </h2>

              <p className="text-base text-[#474464] ">{opt.description}</p>
            </div>
          ))}
        </div>

        <Link href="/dashboard">
          <Button title="Enroll your ward now" />
        </Link>
      </section>

      <section className="w-full bg-white py-12 flex flex-col items-center">
        <h2 className="font-semibold text-2xl">Latest Newsletter</h2>
        <p className="text-center text-base text-[#474464]">
          Stay up-to-date with the latest news and events at our school
        </p>

        <div className="flex gap-5 my-8">
          {latest.map((opt, index) => (
            <div key={index} className="relative w-full max-w-[27.188rem]">
              <Image
                className="w-full h-full object-cover"
                src={opt.image}
                alt={opt.title}
                width={402}
                height={374}
                priority
                quality={85}
                placeholder="blur"
              />

              <div className="absolute inset-0 flex items-end p-4 bg-black bg-opacity-30">
                <h2 className="font-semibold text-xl text-white max-w-72">
                  {opt.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <Button title="Read More" />
      </section>

      <section className="w-full bg-[#052326] py-20 ">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center gap-10">
          <div className="flex-1">
            <h2 className="font-semibold text-4xl text-white mb-5">
              “ We appreciate the school's emphasis on diversity, equity, and
              inclusion. Our daughter has been exposed to a wide range of
              cultures and perspectives. ”
            </h2>
            <p className="font-medium text-xl text-white">
              Mr. Nathan Offei Ansah, Parent
            </p>
          </div>
          <Image
            className="object-cover"
            src={man}
            alt="man"
            width={270}
            height={290}
            priority
            quality={85}
            placeholder="blur"
          />
        </div>
      </section>
      <section className="w-full bg-[#006E90] py-20 ">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center gap-10 text-white">
          <div className="">
            <h2 className="font-semibold text-4xl mb-5">
              Join the winning <br /> school now
            </h2>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col items-center">
              <Count />
              <p className="font-medium text-xl ">Enrolled Students</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-5xl">30</h1>
              <p className="font-medium text-xl ">Staff</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-5xl">10,000</h1>
              <p className="font-medium text-xl ">Global Alumni</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-white py-20 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-10">
            <div className="">
              <Image
                className=" object-contain"
                src={e1}
                alt="e1"
                width={151}
                height={151}
                priority
                quality={85}
                placeholder="blur"
              />
            </div>
            <h1 className="font-semibold text-4xl text-center ">
              Enroll your ward to join <br />
              over 3000+ successful students
            </h1>
            <div className="">
              <Image
                className=" object-contain"
                src={e8}
                alt="e8"
                width={151}
                height={151}
                priority
                quality={85}
                placeholder="blur"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[62.5rem] mx-auto flex justify-between ">
              <div className="flex gap-4">
                <div className="">
                  <Image
                    className=" object-contain"
                    src={e2}
                    alt="e2"
                    width={90}
                    height={90}
                    priority
                    quality={85}
                    placeholder="blur"
                  />
                </div>
                <div className="mt-8">
                  <Image
                    className=" object-contain"
                    src={e3}
                    alt="e3"
                    width={90}
                    height={90}
                    priority
                    quality={85}
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-8">
                  <Image
                    className=" object-contain"
                    src={e6}
                    alt="e6"
                    width={90}
                    height={90}
                    priority
                    quality={85}
                    placeholder="blur"
                  />
                </div>
                <div className="">
                  <Image
                    className=" object-contain"
                    src={e7}
                    alt="e7"
                    width={90}
                    height={90}
                    priority
                    quality={85}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button title="Enroll your ward now" />
          <div className="w-full max-w-xl mx-auto flex justify-between items-center">
            <div className="w-40">
              <Image
                className=" object-contain"
                src={e4}
                alt="e4"
                width={158}
                height={158}
                priority
                quality={85}
                placeholder="blur"
              />
            </div>
            <div className="w-40">
              <Image
                className=" object-contain"
                src={e5}
                alt="e5"
                width={158}
                height={158}
                priority
                quality={85}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
