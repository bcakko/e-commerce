import DebitList from "./DebitList";
import InnerLinks from "./InnerLinks";

const TopFooter = () => {
  return (
    <div className="w-11/12 pb-4 sm:pb-0 md:w-3/4 lg:w-1/2 mx-auto flex flex-col sm:flex-row justify-between items-center">
      <DebitList />
      <InnerLinks />
    </div>
  );
};

export default TopFooter;
