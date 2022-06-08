const calculateWeight = (earthWeight, planet) => {
    if (planet == 'Mercury') {
        console.log(`${planet} weight = ${earthWeight * 0.378}`);
    }else if(planet == 'Venus'){
        console.log(`${planet} weight = ${earthWeight * 0.378}`);
    }else if(planet == 'Mars'){
        console.log(`${planet} weight = ${earthWeight * 0.378}`);
    }else if(planet == 'Jupiter'){
        console.log(`${planet} weight = ${earthWeight * 0.378}`);
    }else if(planet == 'Saturn'){
        console.log(`${planet} weight = ${earthWeight * 0.378}`);
    }
     else {
        console.log(`Invalid Planet Entry. Try: Mercury , Venus , Mars , Jupiter , Saturn.`)
    }
}

calculateWeight(45, 'Jupiter');