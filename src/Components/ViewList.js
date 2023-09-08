import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ViewList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=aad798f825034cecb119356d18c57707"
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          // <div className=" mt-5 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          //   <img
          //     className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          //     src={article.urlToImage}
          //     alt=""
          //   />
          //   <div className="flex flex-col justify-start p-6">
          //     <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          //       {article.title}
          //     </h5>
          //     <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          //       {article.description}
          //     </p>
          //     <p>di terbitkan pada</p> <p>{article.publishedAt}</p>
          //     <TERipple rippleColor="light">
          //       <button
          //         type="button"
          //         className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          //       >
          //         <a href={article.url}>Selengkapnya</a>
          //       </button>
          //     </TERipple>
          //     <p></p>
          //   </div>
          // </div>

          <div
            className="grid grid-cols-1 cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8"
            onClick={() => navigate("blog-detail/" + post.id)}
          >
            <img
              src={article.urlToImage}
              className="
        rounded-2xl object-cover w-full h-full"
            />
            <div>
              <h4 className="text-red-500">{article.author}</h4>
              <h2 className="text-[23px] font-bold mt-5">{article.title}</h2>
              <h4 className="line-clamp-6 text-gray-400 mt-5">
                {article.description}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewList;
