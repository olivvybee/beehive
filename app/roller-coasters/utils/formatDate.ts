export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: dateString.length < 7 ? undefined : 'short',
    day: dateString.length < 10 ? undefined : '2-digit',
  };

  return date.toLocaleDateString('en-gb', options);
};
