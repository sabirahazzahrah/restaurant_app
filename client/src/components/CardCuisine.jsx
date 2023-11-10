import { NavLink } from "react-router-dom";

const CardCuisine = ({ perData, onClick }) => {
  return (
    <a className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={perData.imgUrl}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {perData.name}
        </h3>
        <span className="text-xs dark:text-gray-400">{perData.createdAt}</span>
        <p>{perData.description}</p>
        <NavLink to={`/detail/${perData.id}`}>
          <button
            type="button"
            class="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
          >
            Detail
          </button>
        </NavLink>
      </div>
    </a>
  );
};

export default CardCuisine;
