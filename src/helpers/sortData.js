export function sortData(data, sortValue, sortDirectionAsc) {
  return data.sort((a, b) => {
    if (!sortDirectionAsc) {
      return a[sortValue] <= b[sortValue] ? 1 : -1;
    } else {
      return a[sortValue] > b[sortValue] ? 1 : -1;
    }
  });
}
