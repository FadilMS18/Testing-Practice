export default function analyzeArray(array){
    let sorted = array.sort((a, b) => a - b)
    let average = sorted.reduce((total, cur) => total + cur, 0) / sorted.length
    return {
        min: sorted[0],
        max: sorted[sorted.length - 1 ],
        length: sorted.length,
        average : parseFloat(average.toFixed(2)),
    }
}