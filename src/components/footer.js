import { useGetPolishNewsQuery } from "../store/slices/apiNewsSlice";
import moment from "moment";
export const Footer = () => {
  const { data, error, isLoading } = useGetPolishNewsQuery();
  const date = new Date();

  const currentTime = moment(date).format("HH:mm");

  return (
    <div className="flex justify-end font-bold text-sm mx-1">
      <p className="mr-4">Current time: {currentTime}</p>
      <p>
        {error
          ? ""
          : isLoading
          ? "calculation.."
          : data
          ? `Articles number: ${data.articles.length}`
          : null}
      </p>
    </div>
  );
};
