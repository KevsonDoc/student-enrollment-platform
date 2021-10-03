const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));
app.use(cors);
app.listen(PORT, () => console.log(`\n\n\nLstening on port ${PORT}`));