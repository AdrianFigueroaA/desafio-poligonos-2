import Poligono from './Poligono'

class Decagono extends Poligono{
constructor(){
  super()
}

area(){
  return this.lado * 10 *this.apotema  /2
}

perimetro(){
return this.lado *10

}

}

export default Decagono 
