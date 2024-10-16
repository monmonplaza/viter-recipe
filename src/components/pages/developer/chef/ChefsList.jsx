import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Package,
  PackageOpen,
  Server,
  Trash,
} from "lucide-react";
import React from "react";
import NoData from "../partials/icons/NoData.jsx";
import ServerError from "../partials/icons/ServerError.jsx";
import LoaderTable from "../partials/LoaderTable.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import useTableActions from "@/components/custom-hooks/useTableActions.jsx";
import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { devBaseImgUrl, ver } from "@/components/helpers/functions-general.jsx";
import TableFilterStatus from "../partials/TableFilterStatus.jsx";
import SpinnerTable from "../partials/spinners/SpinnerTable.jsx";
import {
  ActionArchive,
  ActionEdit,
  ActionRemove,
  ActionRestore,
} from "@/components/helpers/TableActions.jsx";
import Pill from "../partials/Pill.jsx";
import ModalDelete from "../partials/modal/ModalDelete.jsx";
import ModalConfirm from "../partials/modal/ModalConfirm.jsx";
const ChefsList = ({ setItemEdit }) => {
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
    isFilter ? `/${ver}/chef/filter` : `/${ver}/chef`, // endpoint
    isFilter ? "post" : "get", // method
    ["chef", filterValue], // key
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
                <th className="w-[120px]">Status</th>
                <th className="w-[120px]">Avatar</th>
                <th>Name</th>
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
                      <Pill isActive={item.chef_is_active} />
                    </td>
                    <td>
                      <img
                        src={`${devBaseImgUrl}/${item.chef_avatar}`}
                        alt=""
                        className="size-10 object-cover rounded-full"
                      />{" "}
                    </td>
                    <td>{item.chef_name} </td>
                    <td>
                      <ul className="flex gap-4 justify-end">
                        {item.chef_is_active === 1 ? (
                          <>
                            <ActionEdit
                              handleClick={() =>
                                handleEdit(item.chef_aid, item)
                              }
                            />

                            <ActionArchive
                              handleClick={() =>
                                handleArchive(item.chef_aid, item)
                              }
                            />
                          </>
                        ) : (
                          <>
                            <ActionRestore
                              handleClick={() =>
                                handleRestore(item.chef_aid, item)
                              }
                            />
                            <ActionRemove
                              handleClick={() =>
                                handleRemove(item.chef_aid, item)
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
          mysqlApiDelete={`/${ver}/chef/${aid}`}
          queryKey="chef"
          item={data.chef_name}
          refetch={refetch}
        />
      )}
      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/${ver}/chef/active/${aid}`}
          queryKey="chef"
          item={data.chef_name}
          active={isActive}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default ChefsList;
