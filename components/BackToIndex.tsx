import React from "react";
import Link from "next/link";

function BackToIndex() {
  return (
    <Link
      href="/"
      className="shadow text-center rounded-lg p-3 btn-secondary w-full mt-5"
    >
      Back to index
    </Link>
  );
}

export default BackToIndex;
