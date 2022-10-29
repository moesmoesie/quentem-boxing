import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quentem</title>
        <meta name="description" content="Quentem's Boxing Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl">Hello World</h1>
    </div>
  );
}
