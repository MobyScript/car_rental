/* eslint-disable @next/next/no-async-client-component */

import { RentalCarItem } from "@/components/RentalCarItems";
import { prisma } from "@/db";

export default async function Home() {
  return (
    <>
      <RentalCarItem />
    </>
  );
}
