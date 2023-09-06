import React from "react";
import { useRouter } from "next/router";
function RouterLinkConfig(
  href: string,
  query: {
    id: string;
    title: string;
    categoryId: string;
    answer: string;
    explanation: string;
    detailNote: string;
    calculation: string;
    featured: boolean;
  }
) {
  const router = useRouter();

  router.push({ pathname: href, query: query });
}

export default RouterLinkConfig;
