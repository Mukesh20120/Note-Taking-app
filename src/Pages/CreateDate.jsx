const CreateDate = () => {
  const dateObj = new Date()
  const month = dateObj.getMonth();
  let MonthName;
  switch (month){
    case 0:
        MonthName = "Jan";
        break;
    case 1:
        MonthName = "Feb";
        break;
    case 2:
        MonthName = "Mar";
        break;
    case 3:
        MonthName = "Apr";
        break;
    case 4:
        MonthName = "May";
        break;
    case 5:
        MonthName = "Jun";
        break;
    case 6:
        MonthName = "Jul";
        break;
    case 7:
        MonthName = "Aug";
        break;
    case 8:
        MonthName = "Sep";
        break;
    case 9:
        MonthName = "Oct";
        break;
    case 10:
        MonthName = "Nov";
        break;
    case 11:
        MonthName = "Dec";
        break;
  }
  return `${MonthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`
}
export default CreateDate;