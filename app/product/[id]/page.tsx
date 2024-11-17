// import { useEffect } from "react";

import Container from "@/components/shared/Container";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Container>{id}</Container>;
}
