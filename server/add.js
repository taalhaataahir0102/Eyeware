const { spawn } = require('child_process');

export default (req, res) => {
  const { a, b } = req.body;

  const pythonProcess = spawn('python3', ['./add.py', a, b]);

  pythonProcess.stdout.on('data', (data) => {
    const result = data.toString();
    console.log('result:', result);
    res.send({ result });
  });

  pythonProcess.on('error', (err) => {
    console.error('Python process error:', err);
    res.status(500).send({ error: 'Internal server error' });
  });
};
