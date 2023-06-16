const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className="container-fluid ">
      <div className={clsx("row ", styles["container-responsive"])}>
        <div
          className={clsx("col-8 p-4", styles["container-responsive-children"])}
        >
          {children}
        </div>
        <div className={clsx("col-2 p-4", styles["style-sidebar"])}>
          {sideBar}
        </div>
      </div>
    </div>
  );
};

export default Layout;
