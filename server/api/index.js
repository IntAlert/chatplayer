var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/script', function(req, res, next) {

    var script = {
        "initial_stage_id": "1",
        "stages": {
            "1": {
                "prompts": [
                    {
                        "type":"text",
                        "content": "Let's get started!"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "hi2",
                        "next_stage_id": "2"
                    },
                    "2": {
                        "text": "ho",
                        "next_stage_id": "2"
                    }
                }
            },
            "2": {
                "prompts": [
                    {
                        "type":"text",
                        "content": "One"
                    },
                    {
                        "type":"text",
                        "content": "Two"
                    },
                    {
                        "type":"text",
                        "content": "Three"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "see ya",
                        "next_stage_id": "1"
                    },
                    "2": {
                        "text": "byeee",
                        "next_stage_id": "1"
                    }
                }
            }
        }
        
    }


    const delay = 1000;
    setTimeout(() => res.json(script), delay);
});


module.exports = router;