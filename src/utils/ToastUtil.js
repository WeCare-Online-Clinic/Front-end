import {toast} from "react-toastify";

export const showSuccessMessage = (message) => {
    toast.success(message);
};

export const showInfoMessage = (message) => {
    toast.info(message);
};

export const showWarnMessage = (message) => {
    toast.warn(message);
};

export const showErrorMessage = (message) => {
    toast.error(message);
};
