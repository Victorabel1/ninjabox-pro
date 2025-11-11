import Head from "next/head";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicHeroScene } from "@/components/scenes/DynamicHeroScene"; 
import { TrustedBy } from "@/components/pages/home/TrustedBy"; 
import { ServicesOverview } from "@/components/pages/home/ServicesOverview"; 
import { WhyChooseUs } from "@/components/pages/home/WhyChooseUs"; 
import { CtaBlock } from "@/components/pages/home/CtaBlock"; 

// Animation variants for Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjabox - Intelligent Solutions for a Digital World</title>
        <meta
          name="description"
          content="We architect powerful, scalable, and intelligent technology solutions."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* 3D Background Scene */}
        <div className="absolute inset-0 z-0 bg-background">
          <DynamicHeroScene />
        </div>

        {/* Foreground Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight text-foreground md:text-7xl"
            variants={itemVariants}
          >
            Intelligent Solutions {/* */}
            <br />
            for a Digital World. {/* */}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl px-4 text-lg text-muted-foreground"
            variants={itemVariants}
          >
            We architect powerful, scalable, and intelligent technology
            solutions that drive growth, streamline operations, and deliver a
            competitive edge for leading enterprises and innovative startups.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule a Discovery Call
            </Button>

            <Button size="lg" variant="outline">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <TrustedBy />

      <ServicesOverview />
      <WhyChooseUs />
      <CtaBlock />
      {/* ... Other homepage sections will go here ... */}
    </>
  );
}
