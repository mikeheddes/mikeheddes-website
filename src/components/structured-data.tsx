import Head from "next/head";

type Props = {
  children: object;
};

export default function StructuredData({ children }: Props) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Head>
  );
}
