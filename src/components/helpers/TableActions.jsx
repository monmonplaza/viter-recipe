import { Archive, ArchiveRestore, FilePenLine, Trash } from "lucide-react";

export const ActionEdit = ({ handleClick }) => {
  return (
    <li>
      <button type="button" onClick={() => handleClick()}>
        <FilePenLine size={14} />
      </button>
    </li>
  );
};

export const ActionArchive = ({ handleClick }) => {
  return (
    <li>
      <button type="button" onClick={() => handleClick()}>
        <Archive size={14} />
      </button>
    </li>
  );
};

export const ActionRestore = ({ handleClick }) => {
  return (
    <li>
      <button type="button" onClick={() => handleClick()}>
        <ArchiveRestore size={14} />
      </button>
    </li>
  );
};

export const ActionRemove = ({ handleClick }) => {
  return (
    <li>
      <button type="button" onClick={() => handleClick()}>
        <Trash size={14} />
      </button>
    </li>
  );
};
