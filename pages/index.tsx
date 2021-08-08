import Head from "next/head";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

export default function Home() {
  const [password, Setpassword] = useState("");
  const [name, Setname] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    Setname(e.target.value);
  };
  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    Setpassword(e.target.value);
  };
  const auth = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = {
      username: name,
      password: password,
    };
    const response = await fetch(
      "https://www.ussii-1th-engnier.com/authen/jwt/create",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers,
      }
    ).then((response) => {
      return response.json();
    });
    console.log(response);
  };
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello World</h1>
      <input type="text" value={name} onChange={handleInputChange} />
      <input type="password" value={password} onChange={handleInputPassword} />

      <button onClick={auth}>認証</button>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
