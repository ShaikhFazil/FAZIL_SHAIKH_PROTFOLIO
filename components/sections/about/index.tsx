"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import agakadela from "@/public/imgs/fazil.png";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale-0 object-cover object-[center_35%]"
              width={900}
              height={300}
              alt="about profile image"
              src={agakadela}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>

            <span className="text-gradient-secondary">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
  initial={{ y: "-20%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
  className="text-muted-foreground"
>
  <strong>I&apos;m Fazil Shaikh — a Full Stack Developer passionate about building modern web applications that deliver real results.</strong>
  <br />
  <br />
  With <strong>2.5 years of hands-on experience</strong>, I’ve designed, developed, and deployed full-stack solutions using{" "}
  <strong>JavaScript, React.js, Node.js, Express, and MongoDB</strong>, ensuring performance, scalability, and responsiveness across all devices.
  <br />
  <br />
  I thrive in agile environments and work across both frontend and backend —{" "}
  from building sleek, user-friendly UIs to crafting robust RESTful APIs and integrating third-party services.
  <br />
  <br />
  During my <strong>internship and contract-based projects</strong>, I’ve demonstrated a problem-solving mindset and the ability to deliver features under tight deadlines.
  <br />
  <br />
  <span className="font-semibold">📌 What I Do Best:</span>
  <br />✅ <strong>Develop scalable full-stack applications</strong> – Using React, Next.js, Node.js, Express, and MongoDB/PostgreSQL.
  <br />✅ <strong>Create intuitive front-end interfaces</strong> – Pixel-perfect, responsive UIs with smooth user experience.
  <br />✅ <strong>Build and integrate REST APIs</strong> – Connecting systems, managing data, and enabling dynamic experiences.
  <br />✅ <strong>Deliver under pressure</strong> – Internship and freelance work honed my speed, efficiency, and code clarity.
  <br />
  ✅ State Management – Skilled with Redux, Zustand, and TanStack Query for scalable app architecture.
  <br />
  <br />
  <span className="font-semibold">📌 Why Work With Me?</span>
  <br />
  🔹 I write clean, maintainable, and production-ready code — every time.
  <br />
  🔹 I adapt fast — learning new tech and jumping into existing codebases with confidence.
  <br />
  🔹 I value collaboration — working smoothly with designers, product managers, and developers alike.
  <br />
  <br />
  <span className="font-semibold">📌 Let&apos;s Connect</span>
  <br />
  Whether you need a full-stack developer to build, fix, or scale your web app, I’m ready.
  <br />
  <a href="#contact" className="text-primary hover:underline">
    ✅ Get in Touch
  </a>
</motion.p>

        </div>
      </div>
    </div>
  );
}
