const tipCalculator = (service, cost) =>{
    let tip = cost * 0.18;
    if (service == 'bad') {
        tip = cost * 0.05;
    } else if (service == 'ok') {
        tip = cost * 0.15;
    }else if (service == 'good') {
        tip = cost * 0.2;
    }else if (service == 'excellent') {
        tip = cost * 0.3;
    }
    console.log(tip);
}

tipCalculator('ok', 1400);