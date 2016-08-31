function result (a, b, c) {
    var D = b*b-4*a*c;
    if (D===0) {
        return 'x1=' + (-b-(Math.sqrt(D)))/(2*a);
    } else {
        if (D<0) {
            return 'there is no answer';
        } else {
            return ['x1=' + (-b-Math.sqrt(D))/(2*a),'x2=' + (-b+Math.sqrt(D))/(2*a)];
        }
    }
}

document.write(result(prompt ('enter a'), prompt('enter b'), prompt('enter c')));
