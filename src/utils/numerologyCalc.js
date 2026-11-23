// Vedic and Pythagorean Numerology Calculation Utilities

// Reduce any multi-digit number to single digit (1-9) or preserve master numbers 11, 22, 33
export function reduceToSingleDigit(num, keepMaster = false) {
  let current = Math.abs(num);
  while (current > 9) {
    if (keepMaster && (current === 11 || current === 22 || current === 33)) {
      return current;
    }
    current = String(current)
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return current;
}

// Calculate Mulank (Root / Day Number) from Day of Birth
export function calculateMulank(day) {
  const dayNum = parseInt(day, 10);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) return null;
  return reduceToSingleDigit(dayNum);
}

// Calculate Bhagyank (Destiny / Life Path Number) from full Date (YYYY-MM-DD)
export function calculateBhagyank(dateString) {
  if (!dateString) return null;
  // Clean string to digits only
  const digits = dateString.replace(/\D/g, '');
  if (digits.length < 8) return null;
  const sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  return reduceToSingleDigit(sum);
}

// Chaldean Name Number calculation
const CHALDEAN_MAP = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function calculateNameNumber(name) {
  if (!name) return { compound: 0, single: 0 };
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleanName) return { compound: 0, single: 0 };

  const compound = cleanName.split('').reduce((acc, letter) => {
    return acc + (CHALDEAN_MAP[letter] || 0);
  }, 0);

  const single = reduceToSingleDigit(compound);
  return { compound, single };
}

// Calculate Lo Shu Grid distribution
export function generateLoShuGrid(dateString) {
  if (!dateString) return null;
  const digits = dateString.replace(/\D/g, '').split('');
  
  // Lo Shu layout standard mapping
  // Row 1: 4, 9, 2
  // Row 2: 3, 5, 7
  // Row 3: 8, 1, 6
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  
  digits.forEach(d => {
    const n = parseInt(d, 10);
    if (n >= 1 && n <= 9) {
      counts[n] = (counts[n] || 0) + 1;
    }
  });

  return {
    counts,
    grid: [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6]
    ],
    planes: {
      mental: counts[4] > 0 && counts[9] > 0 && counts[2] > 0,
      emotional: counts[3] > 0 && counts[5] > 0 && counts[7] > 0,
      practical: counts[8] > 0 && counts[1] > 0 && counts[6] > 0,
      thought: counts[4] > 0 && counts[3] > 0 && counts[8] > 0,
      will: counts[9] > 0 && counts[5] > 0 && counts[1] > 0,
      action: counts[2] > 0 && counts[7] > 0 && counts[6] > 0,
    }
  };
}

// Full profile analysis generator
export function analyzeFullProfile(fullName, dobString) {
  if (!dobString) return null;
  const [year, month, day] = dobString.split('-');
  const mulank = calculateMulank(day);
  const bhagyank = calculateBhagyank(dobString);
  const nameAnalysis = calculateNameNumber(fullName);
  const loShu = generateLoShuGrid(dobString);

  // Quick compatibility note
  const harmonicMatches = {
    1: [1, 2, 3, 5, 9],
    2: [1, 2, 4, 7],
    3: [1, 3, 5, 6, 9],
    4: [1, 2, 6, 7, 8],
    5: [1, 3, 5, 6],
    6: [3, 6, 9, 2],
    7: [1, 2, 4, 7],
    8: [4, 5, 6, 8],
    9: [1, 2, 3, 6, 9]
  };

  return {
    fullName,
    dobString,
    day,
    month,
    year,
    mulank,
    bhagyank,
    nameAnalysis,
    loShu,
    compatibleNumbers: harmonicMatches[mulank] || [1, 3, 5, 9]
  };
}
