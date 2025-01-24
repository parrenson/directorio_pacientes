import PropTypes from "prop-types";
import { TableHeader } from "@components/Table/components";

export const Table = ({ headers, data }) => {
    return (
        <div className="rounded-lg shadow-md overflow-x-auto">
            <table className="w-full max-w-full border-collapse bg-white min-w-[640px]">
                <TableHeader headers={headers} />
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((row, index) => (
                            <tr
                                key={row.id || index}
                                className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                            >
                                {headers.map((header) => (
                                    <td
                                        key={header.id}
                                        className={`h-[86px] p-2 text-sm md:text-base font-normal ${header.className} text-base font-normal`}
                                    >
                                        {header.cell(row)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headers.length} className="p-4 text-center text-gray-500">
                                No hay datos disponibles.
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            header: PropTypes.string.isRequired,
            className: PropTypes.string,
            cell: PropTypes.func.isRequired,
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};
