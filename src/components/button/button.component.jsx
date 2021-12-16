import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { openModal } from "../../redux/modal/modal.actions";
import ModalTypes from "../../redux/modal/modal.types";

import { ArrowRightStyle, ButtonStyle } from "./button.styles";

const ButtonSubmit = (props) => {
  const { url, action, button_id, title, openModal } = props;
  return (
    <div>
      {url ? (
        <Link to={url}>
          <ButtonStyle type="button" button_id={button_id}>
            {title}
            <ArrowRightStyle className="arrow right"></ArrowRightStyle>
          </ButtonStyle>
        </Link>
      ) : (
        <ButtonStyle type="button" button_id={button_id} onClick={() => openModal()}>
          {title}
          <ArrowRightStyle className="arrow right"></ArrowRightStyle>
        </ButtonStyle>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
});

export default connect(null, mapDispatchToProps)(ButtonSubmit);
