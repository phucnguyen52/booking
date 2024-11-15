export const formatDate = (dateString, locale = 'vi-VN') => {
   const date = new Date(dateString);
   return new Intl.DateTimeFormat(locale, {
       year: 'numeric',
       month: '2-digit',
       day: '2-digit'
   }).format(date);
};