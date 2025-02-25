import React from "react";
import Container from "./Container";
import { statisticsData } from "@/constants/data";
import Counter from "./Counter";

const Statistics = () => {
  return (
    <div className=" w-full bg-darkGray text-primaryWhite mt-5">
      <Container className="py-10 flex items-center justify-between md:justify-normal gap-10 md:gap-32">
        <div>
          <h2 className="text-lg font-semibold leading-6">
            Projects
            <br />
            Statictics
          </h2>
          
        </div>
        <div>
          {statisticsData?.map((item) => (
            <div
              key={item?.label}
              className="flex items-center gap-10 justify-between w-full md:min-w-[310px] space-y-2 border-b border-b-primaryWhite/40 py-1 text-sm font-medium"
            >
              <p>{item?.label}</p>
              <p className="font-semibold">
                <Counter end={item?.number} />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
