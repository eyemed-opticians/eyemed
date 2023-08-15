// date related helpers


// change string from Date.now() into a meaningful date in words
function formatDate(dateVar){


    const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const monthName=months[dateVar.getMonth()];

    const formatedDate = monthName + " " + dateVar.getDay() + ", " + dateVar.getFullYear();

    // console.log(`Entered date : ${dateVar} | Formated date : ${formatedDate}`);

    return formatedDate
}


// change string from <input type="date"> into a meaningful date in words
function newDate(date){
    
    const dateNumbers = date.split('-');

    function createDay(){
      function dayString(day){
        if (day.endsWith("1")) {
          return 'st';
        } else if (day.endsWith("2")) {
          return 'nd';
        } else if (day.endsWith("3")) {
          return 'rd';
        } else {
          return 'th';
        }
      }
      const dayOne = dateNumbers[2] + dayString(dateNumbers[2]);
      let day = '';
      if (dayOne.startsWith("0")) {
        day = dayOne.substring(1);
      } else {
        day = dayOne;
      }
      return day;
    }

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const monthVar = parseInt(dateNumbers[1]) - 1;
    const today = createDay() + ' of ' + months[monthVar] + ' ' + dateNumbers[0];

    // console.log(`Entered date : ${date} | Formated date : ${today}`);

    return today;

}

// this function below only works when used in a mongo db schema - error: getDate() is not a function
// function formatDateNow(){
//   const dateVar = new Date();
//   const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const monthName=months[dateVar.getMonth()];
//   const formatedDate = monthName + " " + dateVar.getDate() + ", " + dateVar.getFullYear();
//   // console.log(`Entered date : ${dateVar} | Formated date : ${formatedDate}`);
//   return formatedDate
// }

module.exports = { formatDate, newDate };