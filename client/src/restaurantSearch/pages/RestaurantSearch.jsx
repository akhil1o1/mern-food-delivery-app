import Search from "../components/Search";
import QuickSearch from "../components/QuickSearch";
import AuthModal from "../components/AuthModal";

function RestaurantSearch() {
  return (
    <>
      <AuthModal />
      <Search />
      <QuickSearch />
    </>
  );
}

export default RestaurantSearch;
