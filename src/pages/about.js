import Head from "next/head";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div>
      <h2>aoubt</h2>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
