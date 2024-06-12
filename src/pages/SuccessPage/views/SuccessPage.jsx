import React from "react";
import { Helmet } from "react-helmet";

export default function SuccessPage() {
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Success - Narrative</title>
      </Helmet>

      <div className="w-full mt-10">Success Page</div>
    </div>
  );
}
