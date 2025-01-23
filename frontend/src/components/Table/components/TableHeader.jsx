import PropTypes from "prop-types";

export const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr className="bg-(--primary-bg-color) text-white">
        {headers.map((header) => (
          <th
            key={header.id}
            className={`h-[67px] text-base font-bold text-left p-2 ${header.className}`}
          >
            {header.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};
