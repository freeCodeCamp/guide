# solution1
```
function sym(a) {
    function sym2(a1, a2) {
        let union = a1.concat(a2)
        let intersection = a1.filter(n => a2.includes(n))
        return Array.from(new Set(b.filter(n => !j.includes(n))))
        // sym = union-intersection
    }
    return Array.from(arguments).reduce((pre, cur) => sym2(pre, cur))
}
```
