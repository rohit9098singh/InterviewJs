{
  /**
     * Object.assign() kya karta hai?
     * 
     *   Object.assign(target, source1, source2, ...)
     *  1)Source objects ke values ko target object me copy karta hai.
     *  2)Agar same key hoti hai, to latest wali value overwrite kar deti hai.
     *  3) Target me sab kuch copy karke return karta hai.
     */
}


// points to note in my code 
//    1) if taget is undefined ya null throw console.error);
//    2) Source agar null ya undefined ho to usse skip kar do
//    3) jo values copy karo wo bas "own" aur "enumerable" property honi chahey

function customAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const to = Object(target);

  for (const source of sources) {
    if (source === null || source === undefined) continue;

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        to[key] = source[key];
      }
    }
  }
  return to;
}

console.log(customAssign({ a: 1 }, { b: 2 }));               // { a: 1, b: 2 }
console.log(customAssign({ a: 1 }, { a: 2, b: 3 }));         // { a: 2, b: 3 }
console.log(customAssign({}, { a: undefined }, { b: null })); // { a: undefined, b: null }
console.log(customAssign({}, null, { a: 1 }));                // { a: 1 }
