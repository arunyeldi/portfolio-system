import app from "./app";

// [ERROR] 02:04:12 RangeError: options.port should be >= 0 and < 65536. Received type number (32782348).
const PORT = 9999; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});