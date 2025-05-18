function formatList(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return items[0] + " and " + items[1];

  const allExceptLast = items.slice(0, -1).join(", ");
  const lastItem = items[items.length - 1];
  return allExceptLast + " and " + lastItem;
}

console.log(formatList(["apple", "banana"]));        
console.log(formatList(["apple", "banana", "cherry"])); 
console.log(formatList(["apple"]));                   
console.log(formatList([]));                          

