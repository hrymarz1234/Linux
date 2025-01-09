const express = require('express');
const cors = require('cors');  
const app = express();
const PORT = 3000;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is responding');
});

app.get('/backend', (req, res) => {
  res.json({
    cars: [
      { id: 1, brand: 'Toyota', model: 'Corolla', year: 2021 },
      { id: 2, brand: 'Honda', model: 'Civic', year: 2020 },
      { id: 3, brand: 'Ford', model: 'Focus', year: 2019 }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
