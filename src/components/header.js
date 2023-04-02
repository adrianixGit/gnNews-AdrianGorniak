import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { changeView } from "../store/slices/viewSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const listView = useSelector((state) => state.view.value.list);

  return (
    <header className="flex justify-between p-2 items-center">
      <h1 className="text-3xl ">
        <Link to="country/us">
          gn<span className="text-beetroot">News</span>
        </Link>
      </h1>
      <div className="">
        <button
          className="btn btn-sm bg-transparent border-beetroot text-black hover:bg-beetroot mr-1"
          onClick={() => dispatch(changeView({ list: true }))}
        >
          <AiOutlineUnorderedList />
        </button>
        <button
          className="btn btn-sm bg-transparent border-beetroot text-black hover:bg-beetroot"
          onClick={() => dispatch(changeView({ list: false }))}
        >
          <RxDashboard />
        </button>
      </div>
      <div>
        <label
          htmlFor="my-modal-4"
          className="btn bg-beetroot text-white border-maroon hover:bg-maroon"
        >
          My impressions
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative bg-lightPink" htmlFor="">
            <h3 className="text-lg font-bold">Moje przemyślenia</h3>
            <p className="py-4">
              Jedyną trudnością, jaką napotkałem podczas pisania tej aplikacji,
              okazał się Redux, ponieważ był to mój pierwszy kontakt z tą
              biblioteką.
            </p>
            <p>
              Największą frajdę czerpałem z samej nauki biblioteki Redux,
              ponieważ pozwoliło mi to przejść o krok dalej w moim rozwoju jako
              programista. Dzięki temu będę mógł dodać kolejną umiejętność do
              mojego CV.
            </p>
          </label>
        </label>
      </div>
    </header>
  );
};
