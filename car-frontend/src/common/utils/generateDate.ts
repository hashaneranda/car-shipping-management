export const generateDate = (date: string) => {
  const options: any = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
  const rawDate = new Date(date);
  return rawDate.toLocaleDateString('en-US', options);
};
