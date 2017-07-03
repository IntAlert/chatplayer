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
                        "content": "You arrive at the border, do you:"
                    },
                    {
                        "type":"text",
                        "content": "Who won the Nobel Peace Prize in 2016?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Juan Manuel Santos, President of Colombia",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Correct!"
                            },
                            {
                                "type":"text",
                                "content": "Colombian President Juan Manuel Santos was awarded the 2016 Nobel Peace Prize for his efforts to end a conflict that has claimed at least 220,000 lives over the past five decades. "
                            },
                            {
                                "type":"text",
                                "content": "The prize was awarded just days after a peace agreement between the government and FARC was narrowly rejected in a referendum. President Santos has since continued to push for peace, and a revised deal has now been signed and ratified by Congress. "
                            }
                        ],
                        "next_stage_id": "2"
                    },
                    "2": {
                        "text": "Aung San Suu Kyi, State Counsellor of Myanmar",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Wrong!"
                            }
                        ],
                        "next_stage_id": "2"
                    }
                }
            },
            "2": {
                "prompts": [
                    {
                        "type":"text",
                        "content": "According to the Global Peace Index 2016..."
                    },
                    {
                        "type":"text",
                        "content": "What is the most peaceful country in the world?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Denmark",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Wrong!"
                            }
                        ],
                        "next_stage_id": "1"
                    },
                    "2": {
                        "text": "Austria",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Wrong!"
                            }
                        ],
                        "next_stage_id": "1"
                    },
                    "4": {
                        "text": "Iceland",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Correct!"
                            },
                            {
                                "type":"text",
                                "content": "Iceland’s low level of militarisation and domestic and international conflict, and its high level of security and societal stability make it the most peaceful country in the world."
                            },
                            {
                                "type":"text",
                                "content": " The country is one of the few that doesn’t have a standing army and only 0.13% of its annual GDP is spent on the military – the second lowest figure in the world. "
                            }
                        ],
                        "next_stage_id": "1"
                    }
                }
            }
        }
        
    }


    const delay = 1500;
    setTimeout(() => res.json(script), delay);
});


module.exports = router;