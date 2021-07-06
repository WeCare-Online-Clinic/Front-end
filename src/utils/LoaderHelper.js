export let showLoadingCount = 0;
export let hideLoadingCount = 0;

let subsFunction = (isLoading) => {
};

export const showLoading = () => {
    showLoadingCount++;
    subsFunction(true);
};

export const hideLoading = () => {
    hideLoadingCount++;
    if (showLoadingCount <= hideLoadingCount) {
        showLoadingCount = 0;
        hideLoadingCount = 0;

        subsFunction(false);
        return;
    }

    subsFunction(true);
};

export const resetLoading = () => {
    showLoadingCount = 0;
    hideLoadingCount = 0;

    subsFunction(false);
};

export const loadingSubs = (sub) => {
    subsFunction = sub;
};
