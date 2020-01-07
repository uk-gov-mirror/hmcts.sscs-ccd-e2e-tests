module.exports = {
  formData : [
    { question: 'contains_mrn', answer: 'true' },
    { question: 'mrn_date', answer: getTodaysDate() },
    { question: 'benefit_type_description', answer: 'PIP' },
    { question: 'person1_title', answer: 'Mr' },
    { question: 'person1_first_name', answer: 'Mark' },
    { question: 'person1_last_name', answer: 'Smith' },
    { question: 'person1_address_line1', answer: '999 Road Lane' },
    { question: 'person1_address_line2', answer: 'Town Name' },
    { question: 'person1_address_line3', answer: 'City Name' },
    { question: 'person1_address_line4', answer: 'County Name' },
    { question: 'person1_postcode', answer: 'SW1H 9AJ' },
    { question: 'person1_phone', answer: '02099999999' },
    { question: 'person1_mobile', answer: '07777777777' },
    { question: 'person1_dob', answer: '01/01/1980' },
    { question: 'person1_nino', answer: myNIYearPrefix() + myNIMonthPrefix() + myNINumberFromDay() + 'A'},
    { question: 'person2_title', answer: 'Mrs' },
    { question: 'person2_first_name', answer: 'Sarah' },
    { question: 'person2_last_name', answer: 'Smith' },
    { question: 'person2_address_line1', answer: '111 New Road Lane' },
    { question: 'person2_address_line2', answer: 'New Town Name' },
    { question: 'person2_address_line3', answer: 'New City Name' },
    { question: 'person2_address_line4', answer: 'New County Name' },
    { question: 'person2_postcode', answer: 'NE9 1ZB' },
    { question: 'person2_dob', answer: '12/12/1972' },
    { question: 'person2_nino', answer: myNIYearPrefix() + myNIMonthPrefix() + myNINumberFromDay() + 'B' },
    { question: 'representative_company', answer: 'ABC Advisory Services' },
    { question: 'representative_address_line1', answer: '63 Grovehill Road' },
    { question: 'representative_address_line2', answer: 'The Square' },
    { question: 'representative_address_line3', answer: 'Redhill' },
    { question: 'representative_address_line4', answer: 'Surrey' },
    { question: 'representative_postcode', answer: 'RH1 6RE' },
    { question: 'representative_phone', answer: '02092323231' },
    { question: 'representative_title', answer: 'Miss' },
    { question: 'representative_first_name', answer: 'Lashunda' },
    { question: 'representative_last_name', answer: 'Howe' },
    { question: 'appeal_grounds', answer: 'see scanned SSCS1 form' },
    { question: 'appeal_late_reason', answer: 'details about the reason' },
    { question: 'is_hearing_type_oral', answer: 'true' },
    { question: 'is_hearing_type_paper', answer: 'false' },
    { question: 'hearing_options_exclude_dates', answer: '01/01/2050' },
    { question: 'hearing_support_arrangements', answer: 'Wheelchair access' },
    { question: 'hearing_options_hearing_loop', answer: 'Yes' },
    { question: 'hearing_options_accessible_hearing_rooms', answer: 'No' },
    { question: 'hearing_options_sign_language_interpreter', answer: 'No' },
    { question: 'hearing_options_language_type', answer: 'Spanish' },
    { question: 'hearing_options_dialect', answer: 'Andalusian' },
    { question: 'hearing_options_sign_language_type', answer: 'ASL' },
    { question: 'agree_less_hearing_notice', answer: 'true' },
    { question: 'signature_name', answer: 'Sarah Smith' },
    { question: 'signature_appeal_date', answer: '01/04/2050' },
    { question: 'office', answer: '3' },
    ]
};

function getTodaysDate() {
  var d = new Date();
  var todaysDate =  d.getDate() + "/" + d.getUTCMonth()+1 + "/" + d.getUTCFullYear();
  return todaysDate;
}

function myNINumberFromDay() {
var d = new Date();
var dd = d.getDate();
var hh = d.getHours();
var mm = d.getMinutes();

if (dd < 10) {dd = "0"+dd;}
if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}

return "" + dd + hh + mm;   
}
//NiNo validation : Neither of the first two letters can be D, F, I, Q, U or V. 
//The second letter also cannot be O. The prefixes BG, GB, NK, KN, TN, NT and ZZ are not allocated
// Letters to avoid - B, D, F, G, I, K, N, O, Q, T, U, V, Z
function myNIMonthPrefix() {
  var d = new Date();
  var month = d.getMonth();
  switch(month) {
    case 0:
      return 'A'; break;
    case 1:
      return 'C'; break;
    case 2:
      return 'E'; break;
    case 3:
      return 'H'; break;
    case 4:
      return 'J'; break;
    case 5:
      return 'L'; break;
    case 6:
      return 'M'; break;
    case 7:
      return 'P'; break;
    case 8:
      return 'R'; break;
    case 9:
      return 'S'; break;
    case 10:
      return 'X'; break;
    case 11:
      return 'Y'; break;
    default:
      return 'T';
  }
}

function myNIYearPrefix() {
  var d = new Date();
  var year = d.getFullYear();
  switch(year) {
    case 2020:
      return 'A'; break;
    case 2021:
      return 'C'; break;
    case 2022:
      return 'E'; break;
    case 2023:
      return'H'; break;
    case 2024:
      return 'J'; break;
    case 2025:
      return 'L'; break;
    case 2026:
      return 'M'; break;
    default:
      return 'P';
  }
}