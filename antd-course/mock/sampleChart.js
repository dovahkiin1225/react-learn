let data = [
  {
    result: [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 1150 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ]
  }
];

export default {
  'get /api/sampleChart': function (req, res, next) {
    setTimeout(() => {
      res.json({
        result: data,
      })
    }, 250)
  },
}
