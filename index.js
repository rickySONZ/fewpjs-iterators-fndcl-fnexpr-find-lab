
function superbowlWin(arr) {
    const found = arr.find(s => s.result === "W")
    if (found){
        return found.year
    }
}
