const { spawn } = require('child_process');

module.exports = (req, res) => {
  const  num1= 1
  const  num2= 3
  if (!num1 || !num2) {
    res.status(400).send('Error: Expected two integer arguments');
    return;
  }

  const addProcess = spawn('python', ['../mymodule.py', num1, num2]);

  let result = '';
  addProcess.stdout.on('data', (data) => {
    result += data;
  });

  addProcess.on('close', (code) => {
    if (code === 0) {
      res.send(result);
    } else {
      res.status(500).send(`An error occurred while running the Python script. Python process exited with code ${code}`);
    }
  });
};
