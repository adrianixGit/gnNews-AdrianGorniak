import { Card } from "./card";
import { useState } from "react";
import { useSelector } from "react-redux";
import { List } from "./list";
import { useGetNewsQuery } from "../../store/slices/apiNewsSlice";

import { useParams } from "react-router-dom";

export const Content = () => {
  const viewList = useSelector((state) => state.view.value.list);
  const { id } = useParams("pl");
  const { data, error, isLoading } = useGetNewsQuery(id);

  return (
    <div
      className={
        viewList
          ? "flex flex-col items-center my-10 "
          : "flex flex-wrap justify-around mx-10 my-10"
      }
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        viewList ? (
          data.articles.map((article, index) => (
            <List key={index} article={article} />
          ))
        ) : (
          data.articles.map((article, index) => (
            <Card key={index} article={article} />
          ))
        )
      ) : null}
    </div>
  );
};
