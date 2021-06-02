export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function makeError(param: string, message: string) {
  return [
    {
      message,
      param,
    },
  ];
}