const transformToSelectOption = (
  target: Array<any>,
  keyName: string,
  valueName: string,
  labelName: string
) => {
  return target.map((item) => ({
    key: item[keyName] ?? item,
    value: item[valueName] ?? item,
    label: item[labelName] ?? item,
  }));
};

export { transformToSelectOption };
