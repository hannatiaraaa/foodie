export const setQueryString = (obj: Record<string, any>) => {
  const params = new URLSearchParams(obj);
  const queryString = params.toString();

  return queryString;
};

export const useQueryString = (obj: Record<string, any>) => setQueryString(obj);
