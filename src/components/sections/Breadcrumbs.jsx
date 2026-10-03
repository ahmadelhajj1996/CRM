import PropTypes from "prop-types";

function Breadcrumbs({ title  }) { 
  return (
    <div className=" fixed top-[68px] md:start-[72px] right-0 z-30 bg-white  inset-x-0  p-4 px-8 shadow-sm  flex items-center gap-x-2 ">
      <h1 className=" title md:text-xl">{title}</h1>
    </div>
  );
}

Breadcrumbs.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
};

export default Breadcrumbs;
