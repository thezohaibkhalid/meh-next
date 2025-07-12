import PrimaryHero from "@/components/common/PrimraryHero";
import React from "react";
import ContactForm from "@/components/ContactForm";
const page = () => {
  return (
    <div>
      <PrimaryHero
        title="Get in touch"
        subtitle="Based in Faisalabad"
        imageUrl="/contact.jpeg"
      />
      <ContactForm />
    </div>
  );
};

export default page;
