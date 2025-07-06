// Logic-1 --

// caughtSpeeding

// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

// Examples

//     caughtSpeeding(60, false) → 0
//     caughtSpeeding(65, false) → 1
//     caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    if (speed <= 65) return 0;
    else if (speed > 65 && speed <= 85) return 1;
    else if (speed > 81) return 2;
  }

  if (speed <= 60) return 0;
  else if (speed > 60 && speed <= 80) return 1;
  else if (speed > 80) return 2;
}
