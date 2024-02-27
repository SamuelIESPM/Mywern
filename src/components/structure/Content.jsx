import React, { Fragment } from "react";
import useUserContext from "../../hooks/useUserContext.jsx";
import UserModal from "../UserModal.jsx";

const Content = (props) => {
  const { modalShow } = useUserContext();
  return (
    <Fragment>
      <UserModal showModal={modalShow} />
      {props.children}
    </Fragment>
  );
};

export default Content;
