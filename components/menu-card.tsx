import { useState } from "react";
import "twin.macro";
import tw from "twin.macro";
import { Filter } from "../types";
import { Category, useFilter } from "./filter-context";
import Modal from "./modal";

type PropTypes = {
  title: string;
  items: Filter[];
  id: Category;
  limit?: number;
};

const MenuCard = ({ title, items = [], id, limit = 10 }: PropTypes) => {
  const { dispatch, state } = useFilter();
  const [showModal, setShowModal] = useState(false);

  const menuItems = items.map((item) => (
    <li
      onClick={() => dispatch({ type: "selectFilter", payload: { category: id, type: item.key } })}
      tw="space-x-4 flex items-center cursor-pointer"
      key={item.key}
      css={[state.filters[id].includes(item.key) && tw`text-blue-500`]}
    >
      <span>{item.key}</span>
      <span tw="text-gray-300 text-sm">{item.doc_count}</span>
    </li>
  ));

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} title={title}>
          <div tw="grid grid-cols-4 gap-4">{menuItems}</div>
        </Modal>
      )}
      <div tw="py-2 px-4 bg-white">
        <p tw="font-semibold text-lg mb-2">{title}</p>
        <ul>
          {menuItems.slice(0, limit)}{" "}
          {menuItems.length > limit && (
            <li onClick={() => setShowModal(true)} tw="text-blue-400">
              Show More
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MenuCard;
