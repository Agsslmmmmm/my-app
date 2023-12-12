"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/./profile.png"
              alt="Ricardo portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full  shadow-xl"
            />
          </motion.div>


        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-gray-600">Hello👋, I'm <span className="text-purple-600">Agus Salim.</span></span>

      </motion.h1>

      <motion.h2
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-600"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}

      >
        Student & Front-End Developer
      </motion.h2>

      <motion.span
        className="pt-4 text-lg text-gray-600"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to my personal blog, a place where stories and knowledge meet! In our hero
        section,
        you will immediately feel the energetic vibrations of the interesting topics we discuss.
        With captivating titles and high-quality images or videos, we invite you to reflect and
        explore the unique world we present. Every design element is carefully chosen to provide
        a
        compelling experience, from calls to action that invite you to read more to short
        descriptions that encapsulate the beauty of our blog content. </motion.span>

      <motion.div
        className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition duration-500 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/agsslmmm_/"
          target="_blank"
        >
          <FaInstagram />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Agsslmmmmm"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </motion.div>
    </section>
  );
}
