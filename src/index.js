import Circulo from './Circulo.js'
import Cuadrado from './Cuadrado'
import Triangulo from './Triangulo'
import Decagono from './Decagono'
import Octagono from './Octagono'





document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let poligono = e.target.value

switch(poligono) {

  case 'circulo' :
    let circulo = new Circulo()
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(`Area del Circulo ===> ${circulo.area()}`)
    break;
  
    case 'cuadrado':
      let cuadrado = new Cuadrado()
      console.log(`Perimetro del Cuadrado ===> ${cuadrado.perimetro()}`)
      console.log(`Area del Cuadrado ===> ${cuadrado.area()}`)
    break;
    case 'octagono':
      let octagono = new Octagono()
      console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
      console.log(`Area del Octagono ===> ${octagono.area()}`)
    break;
    case 'triangulo':
      let triangulo = new Triangulo()
      console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
      console.log(`Area del Triangulo ===> ${triangulo.area()}`)
    break;
    case 'decagono':
      let decagono = new Decagono()
      console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
      console.log(`Area del Decagono ===> ${decagono.area()}`)
    break;
  default:
  
} 
});



// document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
//   let poligono = e.target.value

//   if (poligono === 'circulo') {
//     let circulo = new Circulo()
//     console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
//     console.log(`Area del Circulo ===> ${circulo.area()}`)
//   }

//   if (poligono === 'decagono') {
//     let decagono = new Decagono()
//     console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
//     console.log(`Area del Decagono ===> ${decagono.area()}`)
//   }

//   if (poligono === 'cuadrado') {
//     let cuadrado = new Cuadrado()
//     console.log(`Perimetro del Cuadrado ===> ${cuadrado.perimetro()}`)
//     console.log(`Area del Cuadrado ===> ${cuadrado.area()}`)
//   }

//   if (poligono === 'triangulo') {
//     let triangulo = new Triangulo()
//     console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
//     console.log(`Area del Triangulo ===> ${triangulo.area()}`)
//   }


//   if (poligono === 'octagono') {
//     let octagono = new Octagono()
//     console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
//     console.log(`Area del Octagono ===> ${octagono.area()}`)
//   }

// })
