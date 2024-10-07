import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Package,
  PackageOpen,
  Trash,
} from "lucide-react";
import React from "react";

const RecipesList = () => {
  return (
    <>
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
            <tr>
              <td>1. </td>
              <td>Active</td>
              <td>Sheet Pan Chicken Shawarma </td>
              <td>11/12/24</td>
              <td>
                <ul className="flex gap-4 justify-end">
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
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecipesList;
