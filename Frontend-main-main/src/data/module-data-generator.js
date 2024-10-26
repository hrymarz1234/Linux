import fs from 'fs';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



fs.readFile('src/lab01/data.txt','utf8',(err,data) => {
  if (err) {
    console.error(err);
    return;
  }

  let lines = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);;

  const groupedData = [];
  for (let i = 0; i < lines.length; i += 3) {
    if (lines[i + 1] && lines[i + 2]) {
      groupedData.push({
        id: (i /3) + 1,
        name: lines[i].trim(),
        age: lines[i + 1].trim(),
        city: lines[i + 2].trim()
      });
    }
  }

  let content = shuffle([...groupedData]);
  // for (const data in groupedData) {
  //   content.push(groupedData[~~((Math.random() * groupedData.length) / 1)]);
  // }
  //console.log(groupedData);
  //console.log(content);



  fs.writeFile('src/lab01/module-data.js', "export const data = " + JSON.stringify(content, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("module-data.js generated");
  });

});
