import DropdownMenu from "../../UI/DropdownMenu";

const NavBar = () => {

  const navLinks = [
    {
      title: "Movies",
      links: [
        {
          title: "Top Rated",
          main_path: "movie",
          sub_path: "top_rated"
        },
        {
          title: "Popular",
          main_path: "movie",
          sub_path: "popular",
        },
        {
          title: "Upcoming",
          main_path: "movie",
          sub_path: "upcoming"
        }
      ]
    },
    {
      title: "Shows",
      links: [
        {
          title: "Top Rated",
          main_path: "tv",
          sub_path: "top_rated"
        },
        {
          title: "Popular",
          main_path: "tv",
          sub_path: "popular"
        },
        {
          title: "On the Air",
          main_path: "tv",
          sub_path: "on_the_air"
        }
      ]
    }
  ]

  return (
    <nav className="w-full flex justify-center bg-secondary-color text-header-main-color ">
      {navLinks ?
        <div className="sm:w-full sm:flex lg:w-11/12 font-sans font-semibold text-sm ">
          <DropdownMenu
              ddTitle="Movies"
              ddTitleStyle="mr-5 cursor-pointer transition-all"
              ddTitleHoverColor="text-header-secondary-color"
              ddList={navLinks[0]}
              ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
              ddBackgroundColor="bg-secondary-color"
            />
            <DropdownMenu
              ddTitle="Shows"
              ddTitleStyle="mr-5 cursor-pointer transition-all"
              ddTitleHoverColor="text-header-secondary-color"
              ddList={navLinks[1]}
              ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
              ddBackgroundColor="bg-secondary-color"
            />
          </div>
      : "Loading..."}

    </nav>
  );
};

export default NavBar;
