import { ChefHat, CookingPot, HandPlatter, NotebookText } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = ({ menu }) => {
  const links = [
    {
      title: "Recipes",
      url: "/admin/recipes",
      icon: <NotebookText size={16} />,
    },
    {
      title: "Chefs",
      url: "/admin/chefs",
      icon: <ChefHat size={16} />,
    },
    {
      title: "Category",
      url: "/admin/category",
      icon: <CookingPot size={16} />,
    },
  ];
  return (
    <>
      <aside className="basis-[250px] border-r border-gray-300 bg-white">
        <div className="p-2.5 flex items-center gap-2 mb-5 border-b border-gray-300">
          <div className=" bg-accent size-10 center-all rounded-md">
            <HandPlatter size={25} strokeWidth={1.5} />
          </div>
          <h4 className="font-poppinsBold mb-0">Easy Recipe</h4>
        </div>
        <nav className="p-2">
          <ul className="space-y-3">
            {links.map((link, key) => {
              return (
                <li key={key}>
                  <Link
                    to={link.url}
                    className={`flex gap-3 items-center w-full px-2 py-2 rounded-md border opacity-70 border-transparent hover:opacity-100 text-sm ${
                      link.title === menu
                        ? "bg-accent text-accent bg-opacity-10 opacity-100 !border-accent"
                        : " "
                    }`}
                  >
                    {link.icon} {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
