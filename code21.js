const cardValueMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14,
  }
  
  const array = ['Jack', 'Queen', 'King', 3, 2, 4, 5, 6, 7,'King','Queen']
  
  const compareCards = (a, b) => {
    if (cardValueMap[a] < cardValueMap[b]) {
      return -1
    }
    if (cardValueMap[a] > cardValueMap[b]) {
      return 1
    }
    return 0
  }
  
  array.sort(compareCards)
  console.log(array)