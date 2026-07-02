export default function handler(req, res) {
  res.status(200).json({
    status: "GidaCode API Active",
    time: new Date().toISOString()
  });
}

