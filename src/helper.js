function choice(clr){
    let idx = Math.floor(Math.random() * clr.length);
    return clr[idx]
}
export {choice}