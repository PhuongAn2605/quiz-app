import ModalTypes from "./modal.types";

export const openModal = () => ({
    type: ModalTypes.OPEN_MODAL
});

export const closeModal = () => ({
    type: ModalTypes.CLOSE_MODAL
})