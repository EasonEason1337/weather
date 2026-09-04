let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}

let j = 0;
do {
  alert(j);
  j++;
} while (j < 3);

for (let z = 0; z < 3; z++) {
  // shows 0, then 1, then 2
  alert(z);
}

for (let p = 0; p < 10; p++) {
  // if true, skip the remaining part of the body
  if (p % 2 == 0) continue;

  console.log(p); // 1, then 3, 5, 7, 9
}
