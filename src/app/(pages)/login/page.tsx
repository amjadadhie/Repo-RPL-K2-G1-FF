"use client";
import Image from "next/image";
import LoginForm from "./components/loginform";
import UserButton from "./components/userButton";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-col lg:flex-col bg-white w-full h-screen pb-36 lg:pb-72">
      <div className="mt-[72px] mb-[42px]">
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[32px] font-montserrat text-base font-semibold leading-normal tracking-tight">
          Hello User!{" "}
        </h2>
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[32px] font-montserrat text-base font-semibold leading-normal tracking-tight">
          Please fill out the form below
        </h2>
      </div>
      <div className="flex ml-[26px] lg:ml-[260px] xl:ml-[470px]">
        <LoginForm />
      </div>
      <footer className="mt-[93px] lg:mt-[200px] overflow-hidden absolute -bottom-10 lg:bottom-[-340px]">
        <img src="Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
