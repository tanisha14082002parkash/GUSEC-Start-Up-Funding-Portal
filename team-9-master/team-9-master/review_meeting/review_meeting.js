const express = require('express')
const mongodb = require('mongodb')
var url=require('url');
const app = express()

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'team9'
let db , review_meeting
MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology:true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('Connected to database!')
    db = client.db(databaseName)
    review_meeting = db.collection('review_meeting')
    
}
)
app.use(express.json())

app.post("/startup/reviewMeeting",(req,res)=>{
   
    
    console.log(req.body);
    const startup_id = req.body.startup_id
    const num_fulltime = req.body.num_fulltime
    const interns = req.body.interns
    const priority_miles = req.body.priority_miles
    const backlog = req.body.backlog
    const revenue_generated = req.body.revenue_generated
    const current_valuation = req.body.current_valuation
    const credit_availed = req.body.credit_availed
    const achievements = req.body.achievements
    const mentorship = req.body.mentorship
    const gusec_help = req.body.gusec_help
    const gusec_feedback = req.body.gusec_feedback
    review_meeting.insertOne({
        startup_id: startup_id,
        num_fulltime: num_fulltime,
        interns: interns,
        priority_miles: priority_miles,
        backlog: backlog,
        revenue_generated: revenue_generated,
        current_valuation: current_valuation,
        credit_availed: credit_availed,
        achievements: achievements,
        mentorship: mentorship,
        gusec_help: gusec_help,
        gusec_feedback: gusec_feedback

    },(err,result)=>{
        if(err){
            console.log(err)
            res.staus(500).json({err:err})
            return
        }
        console.log(result)
        res.status(200).json({message:"success"})
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
    
})