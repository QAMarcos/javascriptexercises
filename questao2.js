/* 2- Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const triangleClassify = function (side1, side2, side3) {
    if (side1 === side2 && side1 === side3 && side3 === side2) {
        console.log('this triangle is equilateral')

    } if (side1 != side2 && side1 != side3 && side2 != side3) {
        console.log('this triangle is scalene')

    } else if (side1 === side2 && side2 != side3 || side2 === side3 && side3 != side1 || side3 === side1 && side1 != side2) {
        console.log('this triangle is isoceles')
    }

}

triangleClassify(3, 3, 3)
triangleClassify(1, 2, 3)
triangleClassify(2, 2, 3)