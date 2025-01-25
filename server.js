const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    timeStamp: new Date().toISOString(),
  });
});

app.post('/mpc', (req, res) => {
  const { party1, party2 } = req.body;

  // Decrypt inputs (replace with real decryption logic)
  const input1 = parseInt(Buffer.from(party1, 'base64').toString('ascii'), 10);
  const input2 = parseInt(Buffer.from(party2, 'base64').toString('ascii'), 10);

  // Perform secure computation (example: sum)
  const result = input1 + input2;

  // Encrypt the result (replace with real encryption logic)
  const encryptedResult = Buffer.from(result.toString()).toString('base64');

  res.json({ result: encryptedResult });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`MPC Service running on port ${PORT}`);
});
