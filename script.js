const getOptions = {
    method: "get",
}
let userLocation = {};

const getData = async () => {
    try {
        const res = await fetch("https://geo.ipify.org/api/v1?apiKey=at_jG31KQ2AbFKTEtqOHD6A4YzyfFZHD&ipAddress=8.8.8.8", getOptions);

    } catch (err) {
        console.error(err)
    }
};



