import React from "react";
import Layout from "../components/Layout";
import ContentLayout from "../components/ContentLayout";
import Utterances from "../components/Utterances";

function GuestPage() {
  return (
    <Layout category="guest">
      <ContentLayout>
        <div className="mt-4 w-full text-center">
          자유롭게 방명록을 남겨주세요! 🙇🏻‍♀️
        </div>
        <Utterances />
      </ContentLayout>
    </Layout>
  );
}

export default GuestPage;
