import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to homepage</h1>
      <Link href="/"> Go to Form</Link>
    </div>
  );
};

export default HomePage;
