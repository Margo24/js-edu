/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      const HoursToMasterLanguage = 800;
      const HoursToLearnBasics = 500;
      const TotalTime = knowsProgramming ? HoursToMasterLanguage:HoursToMasterLanguage+HoursToLearnBasics;
      //расчет общего времени
      return Math.ceil(TotalTime/config[focus]);
  };
  