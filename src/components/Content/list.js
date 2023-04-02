import { useDispatch } from "react-redux";
import { showModal } from "../../store/slices/modalNewsSlice";
import moment from "moment";

export const List = ({ article }) => {
  const dispatch = useDispatch();

  const publishedAtFormatted = moment(article.publishedAt).format(
    "DD-MM-YYYY HH:mm:ss"
  );

  return (
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
      <div className="w-[85vw] h-auto  shadow-sm shadow-beetroot flex flex-col p-2 mb-4">
        <h2 className="text-2xl">{article.title}</h2>
        <p className="self-start">{article.source.name}</p>
        <p className="self-end">{publishedAtFormatted}</p>
      </div>
    </label>
  );
};
