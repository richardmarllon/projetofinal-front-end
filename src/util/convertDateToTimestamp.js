/* Converte data para unix timestamp
 Parametro : data
 return : unix timestamp (integer number) 
*/

const dateToTimestamp = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const unixTimestamp = parseInt(
    (new Date(`${year}.${month}.${day}`)
      .getTime())
      .toFixed(0));

  return unixTimestamp;
}

export default dateToTimestamp;
