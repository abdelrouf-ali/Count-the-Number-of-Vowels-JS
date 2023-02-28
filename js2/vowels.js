

var vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    var count = 0;

    for (var letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

alert(result);





function getVowels(string) {

    var Vowels = 'aAeEiIoOuU';
    var vowelsCount = 0;

    for(var i = 0; i < string.length ; i++) {

       if (Vowels.indexOf(string[i]) !== -1) {

          vowelsCount += 1;
      }
    }

 return vowelsCount;

 }

 alert("The Number of vowels:" + getVowels(string));