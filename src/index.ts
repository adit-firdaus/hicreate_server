import app from './app';

const PORT = app.env["PORT"] || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});