"use client";
// import Button from "@/components/ui/Button";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Cakra from "../public/cakra.png";

export default function Home() {
  return (
    <>
      {/* Section Introduction */}
      <div className="h-screen md:flex justify-center pt-14 md:px-32 bg-secondary">
        <div className="md:mr-7 flex justify-center ">
          <Image
            src={"/cakra.png"}
            alt={"cakra"}
            className="w-3/4 h-3/4"
            width="520"
            height="520"
          />
        </div>
        <div className="w-4/5 flex items-center text-center ">
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-2.5">
              Hello, it's Me
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold mb-2.5">
              Rakhel Cakra Kusumadinata Sera
            </h1>
            <h1 className="text-xl md:text-3xl font-bold mb-2.5">
              I'm a{" "}
              <ReactTyped
                className="text-primary subpixel-antialiased"
                strings={["Frontend Developer", "Fullstack Web Developer"]}
                typeSpeed={100}
                loop
              />
            </h1>
            <Button className="bg-primary hover:border-2 hover:border-white hover:bg-secondary">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div>
        <h1>My Skill</h1>
        <div className="grid">
          <div>
            <div>React: </div>
            <div>===========</div>
          </div>
        </div>
      </div>
    </>
  );
}
