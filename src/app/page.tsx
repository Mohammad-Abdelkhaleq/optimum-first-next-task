import React from "react";
import { Nav } from "@/components/nav/Nav";
import {Illustration} from "@/components/illustration-one/Illustration-one.module";
import { Illustration_two } from "@/components/illustration-two/Illustration-two";
import { Services } from "@/components/services/Services";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { EarlyAccess } from "@/components/early-access/early-access";
import {Footer} from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Illustration/>
        <Services/>
        <Illustration_two/>
        <Testimonials/>
        <EarlyAccess/>
        <Footer/>
      </main>
    </>
  );
}
