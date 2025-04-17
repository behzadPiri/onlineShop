let debounceTimer: number | null = null;

export const debounceSearch = (
    query: string,
    callback: () => void,
    delay: number = 1500
) => {
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = window.setTimeout(() => {
        callback();
    }, delay);
};
