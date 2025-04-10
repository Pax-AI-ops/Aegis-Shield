import React from "react";
import Head from "next/head";
import Header from "../components/header";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Aegis Shield</title>
      </Head>
      <Header />
      <main style={{ padding: "50px 20px", color: "#fff", backgroundColor: "#333" }}>
        <h2>About Us</h2>
        <p>At SYNTEX, we're committed to providing open-source, ethical cybersecurity for all.</p>
        <p>Our mission is to build the most secure, self-healing, and privacy-focused software to ensure the safety of your data.</p>
        <p>Our flagship product, Aegis Shield, is part of this effort, and we aim to lead the cybersecurity revolution with transparency and trust.</p>
      </main>
    </div>
  );
};

export default About;
