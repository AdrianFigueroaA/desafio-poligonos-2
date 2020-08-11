import Poligono from './Poligono'

class Cuadrado extends Poligono{
constructor(){
super()
}

area(){
return this.base * this.altura
}

perimetro(){
  return (this.base *2) + (this.altura*2)
}

}
export default Cuadrado