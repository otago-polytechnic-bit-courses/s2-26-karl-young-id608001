## Module 4

---

## Task 1

```
src/index.ts:5:19 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

5 console.log(greet(42))
                    ~~


Found 1 error in src/index.ts:5
```

---

## Task 2


The code one in JS and the other in TS
```

const sum = (name, class_count, arrays) => {
  return `${name} has ${class_count} classes with ${arrays} as students`
}
console.log(sum('Teams', 5))
console.log(sum('CityFit', 55))


const sum = (name: string, class_count: number, arrays: string[]) => {
  return `${name} has ${class_count} classes with ${arrays} as students`
}

console.log(sum('Teams', 5, ["Dave", "Argyle"]))
console.log(sum('CityFit', '55', ["Cody", "Greg"]))
```

The error
```
src/index.ts:21:28 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

21 console.log(sum('CityFit', '55', ["Cody", "Greg"]))
                              ~~~~


Found 1 error in src/index.ts:21
```

---

## Task 3

What kind of bug could changing a number field in an interface to a string cause.

A type issue as if you tried to use the number for a calulation it would break as it might be a string.. ...... 


---

## Task 4



The error 
```
src/index.ts:57:16 - error TS2345: Argument of type '"active"'is not assignable to parameter of type 'MembershipStatus'.

57 describeStatus("active")
                  ~~~~~~~~


Found 1 error in src/index.ts:57
```