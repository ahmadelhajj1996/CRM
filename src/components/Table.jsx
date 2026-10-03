import PropTypes from "prop-types";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ActionDropdown from "./ActionDropdown";

const Table = ({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
  className = "",
  emptyMessage = "no data available yet! ",
  rowsPerPage = 10,
  showPagination = true,
  paginationPosition = "bottom",
  actions = {
    showView: true,
    showEdit: true,
    showDelete: true,
    customActions: null,
  },
  meta,
}) => {
  const { t ,  i18n } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  const tableWrapperRef = useRef(null);

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentData = useMemo(() => {
    if (!showPagination || totalItems <= rowsPerPage) return data;
    return data?.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex, showPagination, rowsPerPage, totalItems]);

  useMemo(() => {
    setCurrentPage(1);
  }, [data?.length, rowsPerPage]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const renderActionButtons = (row) => {
    const items = [
      {
        key: "view",
        label: "Show",
        icon: Eye,
        show: actions.showView,
        className: "text-green-600 text-xs ",
        onClick: () => onView(row),
      },
      {
        key: "edit",
        label: "Edit",
        icon: Edit,
        show: actions.showEdit,
        className: "text-blue-600 text-xs",
        onClick: () => onEdit(row),
      },
      {
        key: "delete",
        label: "Delete",
        icon: Trash2,
        show: actions.showDelete,
        className: "text-red-600 text-xs",
        onClick: () => onDelete(row),
      },
    ];
    return <ActionDropdown items={items} width=" w-32 md:w-40  " />;
  };

  const Pagination = () => {
    if (!showPagination || totalItems <= rowsPerPage) return null;
    return (
      <div className=" flex items-center justify-center  py-3  bg-white app-bordered  gradient-bg ">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className=" text-xs md:text-sm text-white cursor-pointer disabled:text-gray-300  disabled:cursor-not-allowed"
        >
          prev
        </button>

        <span className="px-4 text-xs md:text-sm text-white">
          ( {currentPage} / {totalPages} )
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" text-xs md:text-sm text-white cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
        >
          next
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (!tableWrapperRef.current) return;

    tableWrapperRef.current.scrollLeft =
      document.dir === "rtl" ? tableWrapperRef.current.scrollWidth : 0;
  }, []);

  return (
    <div className={`${className} `}>
      <div ref={tableWrapperRef} className=" rounded  ">
        <div className="overflow-x-auto ">
          <div className="inline-block  ">
            <table className="bg-white table-fixed w-full rounded-t-2xl">
              <colgroup>
                {columns.map((column, index) => (
                  <col
                    key={column.key || index}
                    style={{
                      width: column.expansion,
                      minWidth: column.expansion,
                      maxWidth: column.expansion,
                    }}
                  />
                ))}
              </colgroup>

              <thead className="gradient-bg ">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={column.key || index}
                      style={{ width: column.expansion }}
                      className={`
                              py-3   text-center  text-white border-e border-e-white text-xs font-semibold md:text-sm    truncate whitespace-nowrap  uppercase textsm

                              ${column.className || ""}
                            `}
                      // className={`px-3  py-1.5 truncate whitespace-nowrap text-start uppercase textsm  ${column.className || ""}`}
                    >
                      {t(`column.${column.header}`)}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentData?.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="text-center py-3 textmd text-gray-600"
                    >
                      {emptyMessage}
                    </td>
                  </tr>
                ) : (
                  currentData?.map((row, rowIndex) => (
                    <tr key={row.id || rowIndex}>
                      {columns.map((column, colIndex) => {
                        const value = row[column.key];

                        if (column.isActions) {
                          return (
                            <td
                              key={colIndex}
                              style={
                                column.expansion
                                  ? { width: column.expansion }
                                  : undefined
                              }
                              className={`  z-50 ${column.className || ""}`}
                            >
                              <div className=" text-center">
                                {renderActionButtons(row)}
                              </div>
                            </td>
                          );
                        }

                        if (column.render) {
                          return (
                            <td
                              key={colIndex}
                              style={
                                column.expansion
                                  ? { width: column.expansion }
                                  : undefined
                              }
                              className={`p-4  text-center tracking-wide   text-[18px] font-semibold md:textsm ${column.className || ""}`}
                            >
                              {column.render({
                                value,
                                row,
                                lang: i18n.language,
                                meta,
                              })}
                            </td>
                          );
                        }

                        return (
                          <td
                            key={colIndex}
                            style={
                              column.expansion ? { width: column.expansion } : undefined
                            }
                            className={`py-4 text-xs md:text-sm text-center   whitespace-nowrap   ${column.className || ""}`}
                          >
                            <div className="truncate block text-[18px] font-semibold" title={value}>
                              {value}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {paginationPosition !== "top" && <Pagination />}
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      className: PropTypes.string,
      render: PropTypes.func,
      isActions: PropTypes.bool,
    }),
  ).isRequired,

  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,

  className: PropTypes.string,
  emptyMessage: PropTypes.string,

  rowsPerPage: PropTypes.number,
  showPagination: PropTypes.bool,

  paginationPosition: PropTypes.oneOf(["top", "bottom", "both"]),

  actions: PropTypes.shape({
    showView: PropTypes.bool,
    showEdit: PropTypes.bool,
    showDelete: PropTypes.bool,
    customActions: PropTypes.func,
  }),
  meta: PropTypes.object,
};

export default Table;

{
  /* <div className="w-1/3">
  <Table
    columns={productcols}
    data={data}
    rowsPerPage={5}
    showPagination={true}
    paginationPosition="bottom"
    actions={{
      showView: true,
      showEdit: true,
      showDelete: true,
    }}
    onView={(row) => console.log(row.id)}
    onEdit={(row) => console.log(row.id)}
    onDelete={(row) => console.log(row.id)}
  />
</div>; */
}
