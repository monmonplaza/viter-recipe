import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import useTableActions from "@/components/custom-hooks/useTableActions.jsx";
import {
  ActionArchive,
  ActionEdit,
  ActionRemove,
  ActionRestore,
} from "@/components/helpers/TableActions.jsx";
import { ver } from "@/components/helpers/functions-general.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
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
import Pill from "../partials/Pill.jsx";
import TableFilterStatus from "../partials/TableFilterStatus.jsx";
import NoData from "../partials/icons/NoData.jsx";
import ServerError from "../partials/icons/ServerError.jsx";
import ModalConfirm from "../partials/modal/ModalConfirm.jsx";
import ModalDelete from "../partials/modal/ModalDelete.jsx";
import SpinnerTable from "../partials/spinners/SpinnerTable.jsx";
const RecipeCategoryList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("");
  let count = 0;
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
    refetch,
    data: result,
  } = useQueryData(
    isFilter ? `/${ver}/category/filter` : `/${ver}/category`, // endpoint
    isFilter ? "post" : "get", // method
    { filterValue }, // key
    {
      filterby: filterValue,
    }
  );

  return (
    <>
      <TableFilterStatus
        setFilterValue={setFilterValue}
        setIsFilter={setIsFilter}
        filterValue={filterValue}
      />
      <div className="relative">
        {!isLoading && isFetching && <SpinnerTable />}

        <div className="table-wrapper ">
          <table>
            <thead>
              <tr>
                <th className="w-[40px]">#</th>
                <th>Status</th>
                <th>Title</th>

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
                count++;
                return (
                  <tr key={key}>
                    <td>{count} </td>
                    <td>
                      <Pill isActive={item.category_is_active} />
                    </td>
                    <td>{item.category_title} </td>

                    <td>
                      <ul className="flex gap-4 justify-end">
                        {item.category_is_active === 1 ? (
                          <>
                            <ActionEdit
                              handleClick={() =>
                                handleEdit(item.category_aid, item)
                              }
                            />

                            <ActionArchive
                              handleClick={() =>
                                handleArchive(item.category_aid, item)
                              }
                            />
                          </>
                        ) : (
                          <>
                            <ActionRestore
                              handleClick={() =>
                                handleRestore(item.category_aid, item)
                              }
                            />
                            <ActionRemove
                              handleClick={() =>
                                handleRemove(item.category_aid, item)
                              }
                            />
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

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/${ver}/category/${aid}`}
          queryKey={{ filterValue }}
          item={data.category_title}
          refetch={refetch}
        />
      )}
      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/${ver}/category/active/${aid}`}
          queryKey={{ filterValue }}
          item={data.category_title}
          active={isActive}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default RecipeCategoryList;
