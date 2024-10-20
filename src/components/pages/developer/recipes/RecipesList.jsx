import useTableActions from "@/components/custom-hooks/useTableActions";
import {
  ActionArchive,
  ActionEdit,
  ActionRemove,
  ActionRestore,
} from "@/components/helpers/TableActions";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import LoaderTable from "../partials/LoaderTable";
import NoData from "../partials/icons/NoData";
import ServerError from "../partials/icons/ServerError";
import ModalConfirm from "../partials/modal/ModalConfirm";
import ModalDelete from "../partials/modal/ModalDelete";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import Loadmore from "../partials/Loadmore";
import SearchBar from "../partials/SearchBar";
import { ver } from "@/components/helpers/functions-general";
import Pill from "../partials/Pill";

const RecipesList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const search = React.useRef({ value: "" });
  const [onSearch, setOnSearch] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("all");
  const {
    handleRemove,
    handleEdit,
    handleArchive,
    handleRestore,
    handleSuspend,
    aid,
    data,
    isActive,
  } = useTableActions({
    setItemEdit,
  });

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["recipe", search.current.value, store.isSearch, filterData],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/${ver}/recipe/search`, // search endpoint
        `/${ver}/recipe/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter, // search boolean, // search boolean
        {
          aid: "",
          isFilter,
          recipe_is_active: filterData,
          searchValue: search?.current?.value,
        }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="p-4 px-2">
        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          isFilter={isFilter}
        />
      </div>

      <div className="relative">
        {status !== "loading" && isFetching && <SpinnerTable />}

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
              {(status === "loading" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%">
                    {status === "loading" ? (
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

              {console.log(result)}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>1. </td>
                        <td>
                          <Pill isActive={item.recipe_is_active} />
                        </td>
                        <td>{item.recipe_title}</td>

                        <td>
                          <ul className="flex gap-4 justify-end">
                            {item.recipe_is_active === 1 ? (
                              <>
                                <ActionEdit
                                  handleClick={() =>
                                    handleEdit(item.recipe_aid, item)
                                  }
                                />

                                <ActionArchive
                                  handleClick={() =>
                                    handleArchive(item.recipe_aid, item)
                                  }
                                />
                              </>
                            ) : (
                              <>
                                <ActionRestore
                                  handleClick={() =>
                                    handleRestore(item.recipe_aid, item)
                                  }
                                />
                                <ActionRemove
                                  handleClick={() =>
                                    handleRemove(item.recipe_aid, item)
                                  }
                                />
                              </>
                            )}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="loadmore flex justify-center flex-col items-center ">
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
              isSearchOrFilter={store.isSearch || isFilter}
            />
          </div>
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/${ver}/recipe/${aid}`}
          queryKey="recipe"
          item={data.recipe_title}
        />
      )}
      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/${ver}/recipe/active/${aid}`}
          queryKey="recipe"
          item={data.recipe_title}
          active={isActive}
        />
      )}
    </>
  );
};

export default RecipesList;
