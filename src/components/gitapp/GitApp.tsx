"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description?: string;
  className?: string;
  SupTitle?: string | boolean;
  features?: string[];
}

const GitApp = ({ title, SupTitle, description, id, className, features }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100" id={id}>
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className={className ? className : "mt-6 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-tight tracking-tight text-[#178CEE]"}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>

          {SupTitle && (
            <motion.h4
              className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight text-black/90"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {SupTitle}
            </motion.h4>
          )}

          {description && (
            <motion.p
              className="mt-6 max-w-[60ch] text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          )}

          {/* Features List */}
          {features && features.length > 0 && (
            <motion.div className="flex flex-col mt-8 gap-4" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {features.map((text, index) => (
                <motion.div key={index} variants={item} className="flex items-center gap-3">
                  <Image
                    src="/image/check.svg"
                    alt="check"
                    width={35}
                    height={35}
                    style={{ width: "auto", height: "auto" }} // يحافظ على نسبة الصورة
                  />
                  <p className="text-gray-800 text-lg">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Store Buttons */}
          <motion.div
            className="mt-10 flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform duration-200">
              <Image src="/image/Download on Google Play.png" alt="Download on Google Play" width={150} height={60} style={{ width: "auto", height: "auto" }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform duration-200">
              <Image src="/image/Link.png" alt="App Store" width={150} height={100} style={{ width: "auto", height: "auto" }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section (Thumbnail) */}
        <motion.div className="flex items-center justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Image src="/image/Component 8.png" alt="thumbnail" width={600} height={600} style={{ width: "auto", height: "auto" }} priority />
        </motion.div>
      </div>
    </div>
  );
};

export default GitApp;
