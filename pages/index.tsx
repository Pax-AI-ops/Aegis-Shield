import React from "react";
import Head from "next/head";
import Header from "../components/header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Aegis Shield - Real Cybersecurity</title>
      </Head>
      <Header />
      <main style={{ backgroundColor: "#222", color: "#fff", padding: "50px 20px" }}>
        <h2>Real Cybersecurity. No Backdoors. No Surveillance.</h2>
        <p>Aegis Shield provides ethical, self-healing cybersecurity for everyone — built on truth, not tracking.</p>
        <button style={{ padding: "10px 20px", backgroundColor: "#00A6ED", color: "#fff", border: "none", borderRadius: "5px" }}>
          Download Now
        </button>
      </main>
    </div>
  );
};

export default Home;
