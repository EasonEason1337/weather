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

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
