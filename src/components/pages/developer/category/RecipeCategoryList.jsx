import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import useTableActions from "@/components/custom-hooks/useTableActions.jsx";
import { ver } from "@/components/helpers/functions-general.jsx";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Package,
  PackageOpen,
  Trash,
} from "lucide-react";
import React from "react";
import LoaderTable from "../partials/LoaderTable.jsx";
import NoData from "../partials/icons/NoData.jsx";
import ServerError from "../partials/icons/ServerError.jsx";
import SpinnerTable from "../partials/spinners/SpinnerTable.jsx";
const RecipeCategoryList = ({ setItemEdit }) => {
  const {
    handleRemove,
    handleEdit,
    handleArchive,
    handleRestore,
    aid,
    data,
    isActive,
  } = useTableActions({
    setItemEdit,
  });
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/${ver}/category`, // endpoint
    "get", // method
    "category" // key
  );

  return (
    <>
      <div className="relative">
        {!isLoading && isFetching && <SpinnerTable />}

        <div className="table-wrapper ">
          <table>
            <thead>
              <tr>
                <th className="w-[40px]">#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Date</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan="100%">
                    {isLoading ? (
                      <LoaderTable count={30} cols={6} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>1. </td>
                    <td>Active</td>
                    <td>Sheet Pan Chicken Shawarma </td>
                    <td>11/12/24</td>
                    <td>
                      <ul className="flex gap-4 justify-end">
                        {item.settings_unit_is_active === 1 ? (
                          <>
                            <li>
                              <button type="button">
                                <FilePenLine size={14} />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <Archive size={14} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button type="button">
                                <ArchiveRestore size={14} />
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <Trash size={14} />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecipeCategoryList;
