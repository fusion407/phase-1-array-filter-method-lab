const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(drivers, name) {
    const match = drivers.filter(driver => driver === name || driver === name.toLowerCase())
    return match;
}
function fuzzyMatch (drivers, name) {
    const match = drivers.filter(driver => driver[0] == name[0] && driver[1] == name[1])
    return match;
}
function matchName(drivers, name) {
    const match = drivers.filter(driver => driver.name === name || driver.name === name.toLowerCase())
    console.log(match)
    return match;
}