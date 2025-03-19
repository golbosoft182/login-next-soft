import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'password') {
    res.json({
      success: true,
      redirectUrl: '/dashboard.html',
      message: 'Login successful'
    });
  } else {
    res.json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});