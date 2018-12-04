db.model.aggregate([
  {$lookup: {from:"ecnPrice",localField:"_id",foreignField:"modelId",as:"ecn"}},
  {$lookup: {from:"amazonPrice",localField:"_id",foreignField:"modelId",as:"amazon"}},
  {$lookup: {from:"cjPrice",localField:"defaultUpc",foreignField:"upc",as:"cj"}},
  {$lookup: {
    from:"cjPrice",
    let: {crUpc: "$defaultUpc"},
    pipeline: [
      {$match: {
        $expr: {
          $and: [
            {$ne: ["$upc", undefined]},
            {$eq: ["$upc", "$$crUpc"]}
          ]
        }
      }
    }],
    as:"cj"
  }},
  {$match:{$or:[{ecn:{$exists:true,$ne:[]}},{amazon:{$exists:true,$ne:[]}},{cj:{$exists:true,$ne:[]}}]}},
  {$unwind:"$ecn"},
  {$unwind:"$amazon"},
  {$out:"testAggregated"}
  ]).pretty();


db.model.aggregate([
  {$match: {
    defaultUpc: {$exists:true}
    }},
  {$lookup: {
    from:"cjPrice",
    let: {crUpc: "$defaultUpc"},
    pipeline: [
      {$match: {
        $expr: {
          $and: [
            {$eq: ["$upc", "$$crUpc"]}
          ]
        }
      }
    }],
    as:"cj"
  }},
  {$match:{$or:[{ecn:{$exists:true,$ne:[]}},{amazon:{$exists:true,$ne:[]}},{cj:{$exists:true,$ne:[]}}]}},
  {$out:"testAggregated8"}
  ]
  )

db.model.aggregate([
  {$lookup: {
    from:"cjPrice",
    let: {crUpc: "$defaultUpc"},
    pipeline: [
      {$match: {
        upc: {$exists:true},
        $expr: {
          $and: [
            {$eq: ["$upc", "$$crUpc"]}
          ]
        }
      }
    }],
    as:"cj"
  }},
  {$out:"testAggregated7"}
  ]
  )