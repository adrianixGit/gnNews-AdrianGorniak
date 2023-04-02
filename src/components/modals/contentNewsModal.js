import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { showModal } from "../../store/slices/modalNewsSlice";
import { Link } from "react-router-dom";

export const ContentNewsModal = () => {
  const modal = useSelector((state) => state.showModal.value.show);
  const article = useSelector((state) => state.showModal.value.data);
  const dispatch = useDispatch();
  const modalRef = useRef();

  const hideModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      dispatch(showModal({ show: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", hideModal);
    return () => document.removeEventListener("mousedown", hideModal);
  });
  return (
    <div
      className={
        modal
          ? "fixed block w-full h-full top-0 left-0  bg-modalBg z-50"
          : "absolute hidden"
      }
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="h-auto w-[70vw] bg-lightPink rounded p-5 "
          ref={modalRef}
        >
          <p className="text-xl mb-5">{article ? article.author : ""}</p>
          <p className="my-5 bg-white rounded border-beetroot border-[1px]">
            {article
              ? article.description
              : "More information in the link below"}
          </p>
          <button className="btn bg-beetroot text-white border-maroon hover:bg-maroon">
            <Link to={article ? article.url : ""}>Link to page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
