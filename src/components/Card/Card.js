"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCard } from "@/app/Redux/slices/product/productsCard";
import { useEffect } from "react";

export default function Card() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.getProductsCard);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchProductCard());
  }, [dispatch]);

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Failed to load products</p>;
  return (
    <>
      <div className="grid grid-cols-3">
        {data?.map((item, index) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {item?.category}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {item?.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image src={item?.image} height="1000" width="1000" className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
