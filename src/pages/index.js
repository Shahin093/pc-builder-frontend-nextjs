import RootLayout from "@/components/Layouts/RootLayout";
import Catagories from "@/components/UI/catagories";
import ChooseUsPage from "@/components/UI/chooseUsPage";
import Header from "@/components/UI/header";
import MeetingRoom from "@/components/UI/meetingRoom";
import OneToOneMeet from "@/components/UI/oneToOneMeet";
import ProductsPage from "@/components/UI/products";
import ReaiventPage from "@/components/UI/reaiventPage";
import SponsarPage from "@/components/shared/sponsar";

export default function HomePage() {
  return (
    <div className="  bg-base-200">
      <Header />

      <h2 className=" flex justify-center items-center m-5">
        <span className="text-4xl font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
          {" "}
          Featured Product
        </span>
      </h2>
      <ProductsPage></ProductsPage>
      <h2 className=" flex justify-center items-center m-16">
        <span className="text-4xl font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
          {" "}
          Featured Categories
        </span>
      </h2>
      <Catagories></Catagories>
      <ChooseUsPage />
      <ReaiventPage />
      <SponsarPage></SponsarPage>
      <MeetingRoom />
      <OneToOneMeet />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
