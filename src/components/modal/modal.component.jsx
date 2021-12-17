import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { connect } from "react-redux";
import { closeModal } from "../../redux/modal/modal.actions";
import {
  getResult,
  submitUserAnswersStart,
} from "../../redux/user-answers/user-answers.actions";
import isEmpty from "is-empty";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({
  showModal,
  closeModal,
  answers,
  attempt_id,
  submitAnswers,
  history,
}) => {
  const handleSubmitAnswer = () => {
    closeModal();
    let id;
    if(isEmpty(attempt_id) && localStorage.getItem('wpr-attempt')){
      id = JSON.parse(localStorage.getItem('wpr-attempt'))._id;
    }else{
      id = attempt_id;
    }
    submitAnswers(answers, id);

    history.push("/result");
  };

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure want to finish the quiz?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button variant="contained" onClick={() => handleSubmitAnswer()}>
              YES
            </Button>
            <Button variant="outlined" onClick={() => closeModal()}>
              NO
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.modal.showModal,
  answers: state.userAnswers.answers,
  attempt_id: state.attempt.attempt_id,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  submitAnswers: (answers, attempt_id) =>
    dispatch(submitUserAnswersStart(answers, attempt_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
