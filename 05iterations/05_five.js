const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (ext) {
// console.log(ext)
// })

// coding.forEach( (ext) => {
// console.log(ext)
// })

// function extentions (ext) {
//     console.log(ext)
// }
// coding.forEach(extentions)

coding.forEach((ext,index,array) => {
    console.log(ext,index)
    console.log(array)
})