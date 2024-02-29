import React, { Fragment } from "react";
import useUserContext from "../../hooks/useUserContext.jsx";
import UserModal from "../UserModal.jsx";

const Content = (props) => {
  const { modalShow } = useUserContext();
  return (
    <Fragment>
      {modalShow && <UserModal showModal={modalShow} />}
      <div id="pageContainer">{props.children}</div>
    </Fragment>
  );
};

export default Content;
