double = (arr) => {
    return arr.map((val) => {
      return val * 2;
    });
  }



  double = (arr) => arr.map((val) =>  val * 2);
  



squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) =>{
      return num ** 2;
    });
    var evens = squares.filter((square) =>{
      return square % 2 === 0;
    });
    return evens;
}