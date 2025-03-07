// Types and conversions

// Ex 1 (implicit convertion)
// Compute the time in seconds

//statically checking types
/**
 * 
 * @param {number} hours 
 * @param {number} mins 
 * @param {number} secs 
 */
function timeInSeconds(hours, mins, secs) {
  return (hours * 60 + mins) * 60 + secs;
}

console.log('Ex 1');
console.log(timeInSeconds(0, 0, 12));
console.log(timeInSeconds(0, 1, 12));
console.log(timeInSeconds(2, 1, 'AB'));

// Ex 2 (string templates)
// Print a student record
/*
{
    name: 'Andrea',
    id: 20200212
}
*/
/**
 * 
 * @param {{name: string, age: number}} student 
 */
function print(student) {
  if (student === undefined) {
    console.log('No student record');
  } else {
    console.log(`Student ${student.name} with ID ${student.id}`);
  }
}

console.log('Ex 2');
print({ name: 'Andrea', id: 20200212 });
print({ id: 20200212 });
print(undefined);

// Ex 3 (type casting)
// Given a csv string like "andrea,20200212", create an object like the one in Ex 2
function csvToObj(csv) {
  if (csv === undefined) {
    return undefined;
  }
  const parts = csv.split(',');
  return { name: parts[0], id: parseInt(parts[1]) };
}

console.log('Ex 3');
print(csvToObj('andrea,20200212'));
print(csvToObj('andrea'));
print(csvToObj(undefined));
