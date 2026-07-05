export default function handler(req, res) {
  res.status(200).json({
    status: "GidaCode API Active ✓",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      exams: "/api/exams (coming soon)",
      results: "/api/results (coming soon)",
      analytics: "/api/analytics (coming soon)"
    }
  });
}