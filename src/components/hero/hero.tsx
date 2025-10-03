"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description?: string;
  image?: string | StaticImageData;
  thumbnail?: string | StaticImageData;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  ShowItem: boolean;
  AddItem?: boolean;
}

const Hero = ({ title, description, image, thumbnail, className, style, backgroundColor, ShowItem, AddItem, id }: Props) => {
  const List = ["Real-time order tracking", "Multiple payment options", "Customer reviews and ratings", "Special discounts and offers", "24/7 customer support"];

  const MotionButton = motion(Button);

  // Variants for stagger animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex items-center justify-center" style={style} id={id}>
      {image ? <Image src={image} alt="Background" fill priority className="object-cover object-center -z-10" /> : <div className="absolute inset-0 -z-10" style={{ backgroundColor }} />}
      {ShowItem && <div className="absolute inset-0 bg-black/50"></div>}

      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        {/* Left Side */}
        <div className="relative z-10">
          <motion.h1
            className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2] tracking-tighter text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="mt-6 max-w-[60ch] sm:text-lg text-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          )}

          {ShowItem && (
            <motion.div className="mt-12 flex items-center gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <motion.div variants={item}>
                <MotionButton size="lg" className="rounded-full text-base" whileHover={{ scale: 1.1 }}>
                  Learn More <ArrowUpRight className="h-5 w-5" />
                </MotionButton>
              </motion.div>

              <motion.div variants={item}>
                <MotionButton variant="outline" size="lg" className="rounded-full text-base shadow-none">
                  <CirclePlay className="h-5 w-5" /> Watch Demo
                </MotionButton>
              </motion.div>
            </motion.div>
          )}

          {/* Add list with stagger */}
          {AddItem && (
            <motion.div className="flex flex-col mt-7 items-start" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {List.map((text, index) => (
                <motion.div key={index} variants={item} className="flex items-center gap-2">
                  <Image src="/image/check.svg" alt="check" width={35} height={35} />
                  <p className="text-white text-base">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right Side (Thumbnail) */}
        {thumbnail && (
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative z-10">
            <Image src={thumbnail} alt="thumbnail" width={600} height={600} className={`rounded-xl shadow-blue-100 aspect-video shadow-2xl ${className}`} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
