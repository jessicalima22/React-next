   export function generateNumber (qtty = 6, numbers = []){
    if (qtty < 6 && qtty > 60){
        throw "invalid quantity"
    }

    if (numbers.length === qtty){
        return numbers.sort((n1, n2)=> n1-n2)
    }

    const numberAleatory = parseInt(Math.random() * 60) + 1

    if(!numbers.includes(numberAleatory)){
        return generateNumber(qtty, [...numbers, numberAleatory])
    } else {
        return generateNumber (qtty, numbers)
    }

    }

    
    