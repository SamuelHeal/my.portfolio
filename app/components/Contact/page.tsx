import React from "react";
import { motion } from "framer-motion";
import { BackgroundThree } from "../Background/page";
import { Button } from "@/components/ui/button";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <BackgroundThree />
      <motion.h2
        className="scroll-m-20 text-5xl font-semibold tracking-tight first:mt-0 text-tokyo-1 mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-hoverable="true"
      >
        Let's{" "}
        <Button
          variant="outline"
          size="lg"
          className="text-tokyo-1 text-5xl hover:bg-tokyo-1 hover:text-background px-2 py-8 font-semibold tracking-tight"
          data-hoverable="true"
        >
          get in touch
        </Button>
      </motion.h2>
    </div>
  );
}

export default Contact;
