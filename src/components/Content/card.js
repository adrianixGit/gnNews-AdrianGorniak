import { useGetPolishNewsQuery } from "../../store/slices/apiNewsSlice";
import { useDispatch } from "react-redux";
import { showModal, getData } from "../../store/slices/modalNewsSlice";
import moment from "moment";
import Newspaper from "../../images/newspaper.jpg";
export const Card = ({ article }) => {
  const dispatch = useDispatch();

  const publishedAtFormatted = moment(article.publishedAt).format(
    "DD-MM-YYYY HH:mm:ss"
  );

  return (
    <div className="card w-80  h-[50vh] bg-transparent shadow-xl border-maroon border-[1px] rounded-none mb-5 flex flex-col justify-">
      <label
        className="cursor-pointer"
        onClick={() =>
          dispatch(
            showModal({
              data: {
                author: article.author,
                description: article.description,
                url: article.url,
              },
              show: true,
            })
          )
        }
      >
        <div className="w-100 h-[25vh]">
          <img
            className="h-[100%] w-[100%]"
            src={article.urlToImage ? article.urlToImage : Newspaper}
            alt="gnNews"
          />
        </div>

        <div className="flex flex-col w-[100%] h-[25vh]">
          <div className="bg-beetroot w-[100%] h-[70%]">
            <h2 className="text-lg text-white text-center">{article.title}</h2>
          </div>
          <div className="flex flex-col justify-center items-center h-[30%]">
            <p>{article.source.name}</p>
            <p>{publishedAtFormatted}</p>
          </div>
        </div>
      </label>
    </div>
  );
};
