"use client";
import { Keyword, Category } from "@prisma/client";

import React, { useRef, useState } from "react";

import ExpandDown from "@public/svg/expandDown.svg";
import CollapseUp from "@public/svg/collapseUp.svg";

import { useQueryObject } from "@/hooks/useQueryObject";
import {
  yearOptions,
  sortingOptions,
  fictionsTabOptions,
} from "@constants/options";
import { Button2, buttonVariants } from "@components/common/Button2";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/common/Select2";

import FictionFilteringModal from "./FictionFilteringModal";
import { useOverlay } from "@toss/use-overlay";
import { OverlayProvider } from "@toss/use-overlay";
import { Tabs, TabsList, TabsTrigger } from "@components/common/Tabs";

import FilteringIcon from "@public/svg/filtering.svg";
import { cn } from "@libs/util";

interface FictionSelectorProps {
  staticData: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
}

export default function FictionSelector({ staticData }: FictionSelectorProps) {
  const filterButton = useRef(null);
  const overLay = useOverlay({ exitOnUnmount: true });

  const { updateQueryObject, queryObject } = useQueryObject();

  const {
    keywordList: keywords,
    nationalityList: nationalities,
    categoryList: categories,
  } = staticData;
  //expand
  const [isExpanded, setIsExpanded] = useState(true);

  const checkHandler = ({
    currentTarget,
    value,
    name,
    dataset,
    checked,
  }: any) => {
    if (currentTarget) updateQueryObject(currentTarget);
    else updateQueryObject({ value, name, dataset, checked });
  };

  // const releaseTimeFilters = ["전체", "연도별"];

  return (
    <OverlayProvider>
      <div className=" justify-center rounded  p-2">
        <div className=" inline-flex h-8 w-full items-center justify-start rounded-none border-b  bg-transparent p-0">
          <Tabs defaultValue="account" className=" h-full ">
            <TabsList className=" space-x-2">
              {fictionsTabOptions.map((option, i) => (
                <TabsTrigger
                  key={i}
                  data-value={option.value}
                  value={option.value}
                  className=" px-0 font-bold data-[checked=true]:border-b-2 data-[checked=true]:border-blue-600 "
                  onClick={(e) => checkHandler(e)}
                  name="tab"
                  data-checked={queryObject.tab === option.value}
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* <TabsContent
              value={fictionTabOptions[0].value}
            ></TabsContent> */}
          </Tabs>
        </div>
        <div>
          <div className=" relative mt-1 flex touch-auto flex-nowrap justify-start space-x-1 overflow-x-auto overflow-x-auto pb-[2px]  scrollbar scrollbar-thumb-slate-200 scrollbar-h-[5px]">
            {yearOptions.map((item, i) => (
              <Button2
                onClick={(e) => checkHandler(e)}
                value={item.value}
                variant="ghost"
                className="  whitespace-nowrap p-[0.12rem] data-[checked=true]:border-0 data-[checked=true]:bg-blue-600 data-[checked=true]:text-white data-[checked=true]:hover:bg-blue-500"
                key={i}
                size="xs"
                name="dateYear"
                data-checked={queryObject.dateYear === item.value?.toString()}
              >
                {item.label}
              </Button2>
            ))}
            <div className="fixed right-0 h-[28.8px]  w-6 bg-transparent bg-gradient-to-l from-white backdrop-blur-[0.5px]"></div>
          </div>
        </div>
        <div className=" my-1 flex items-center justify-between space-x-2 md:justify-start">
          {/* checked={queryObject.sorting === sorting} */}
          <Select
            onValueChange={(value) =>
              checkHandler({ value: value, name: "sorting" })
            }
          >
            <SelectTrigger className="h-full w-fit rounded-2xl border-[1px] p-2 py-2 font-bold">
              <SelectValue placeholder="총점 순 정렬" />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              {sortingOptions.map((option, i) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div
            id="innerModal"
            ref={filterButton}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "relative h-full cursor-pointer whitespace-nowrap rounded-2xl p-2 font-bold"
            )}
            // variant="outline"
            // size="sm"
            onClick={() => {
              overLay.open(({ exit, isOpen, close }) => (
                <FictionFilteringModal
                  staticData={staticData}
                  close={close}
                  isOpen={isOpen}
                  exit={exit}
                ></FictionFilteringModal>
              ));
            }}
          >
            <FilteringIcon />
            필터링
          </div>
          {/* <FictionFilteringModal></FictionFilteringModal> */}
        </div>
        <div className=" relative flex text-center leading-[1.8rem] ">
          <div
            className={
              isExpanded
                ? ` relative flex h-fit touch-auto flex-nowrap justify-start overflow-x-auto pb-[2px]  scrollbar scrollbar-thumb-slate-200 scrollbar-h-[5px]`
                : ` relative flex h-fit touch-auto flex-wrap justify-start overflow-x-auto pb-[2px]  scrollbar scrollbar-thumb-slate-200 scrollbar-h-[5px]`
            }
          >
            {keywords
              .filter((keyword) => keyword?.isOfCons !== true)
              .map((keyword) => (
                <Button2
                  key={keyword?.id}
                  onClick={(e) => checkHandler(e)}
                  // id="keyword"
                  size="xs"
                  variant="outline"
                  className=" ml-[4px] mt-1 whitespace-nowrap font-bold"
                  value={keyword?.name}
                  name="keywords"
                  data-checked={queryObject.keywords?.includes(keyword.name)}
                >
                  {keyword?.name}
                </Button2>
              ))}
          </div>
          {!isExpanded ? (
            <div className=" absolute bottom-0 right-0 mt-1 flex rounded-lg ">
              <div className=" h-[28.8px] w-6  bg-transparent bg-gradient-to-l from-white backdrop-blur-[0.5px]"></div>
              <span className=" cursor-pointer bg-white">
                <CollapseUp
                  onClick={() => setIsExpanded(!isExpanded)}
                  height={28}
                  width={28}
                />
              </span>
            </div>
          ) : (
            <div className=" absolute right-0 mt-1 flex rounded-lg ">
              <div className=" h-[28.8px] w-6  bg-transparent bg-gradient-to-l from-white backdrop-blur-[0.5px]"></div>
              <span className=" cursor-pointer bg-white">
                <ExpandDown
                  onClick={() => setIsExpanded(!isExpanded)}
                  height={28}
                  width={28}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </OverlayProvider>
  );
}
