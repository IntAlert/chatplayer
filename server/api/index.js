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
                        "content": "You arrive at the border, do you join the queue to cross or do you pay an official to skip the queue?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Pay an official",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Choosing to pay a border official..."
                            },
                            {
                                "type":"text",
                                "content": "usually between 500 – 1,000 CFA..."
                            },
                            {
                                "type":"text",
                                "content": "to jump the queue to get your 'jeton' ticket faster..."
                            },
                            {
                                "type":"text",
                                "content": "encourages a culture of bribery."
                            }
                        ],
                        "next_stage_id": "2"
                    },
                    "2": {
                        "text": "Queue",
                        "responses": [
                            {
                                "type":"text",
                                "content": "As advised by Alert, this is your best course of action. "
                            },
                            {
                                "type":"text",
                                "content": "Arriving early means less queues."
                            },
                            {
                                "type":"text",
                                "content": "You can get across the border quickly to buy the tomatoes you need to sell in the market."
                            },
                            {
                                "type":"text",
                                "content": "You receive your ‘jeton’ without having to pay anything extra."
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
                        "content": "You have crossed the border and you have now arrived at the market."
                    },
                    {
                        "type":"text",
                        "content": "Where do you buy your tomatoes from?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "The first market that will sell you goods",
                        "responses": [
                            {
                                "type":"text",
                                "content": "After walking several miles, you finally reach a market where you can buy tomatoes from the local farmers."
                            }
                        ],
                        "next_stage_id": "3"
                    },
                    "2": {
                        "text": "A pre-determined spot",
                        "responses": [
                            {
                                "type":"text",
                                "content": "Calling a Rwandan trader on the other side of the border before you leave home, who you met at a cross-border trader dialogue group organised by Alert"
                            },
                            {
                                "type":"text",
                                "content": "You find out where best to buy the tomatoes, and what the going rate is."
                            }
                        ],
                        "next_stage_id": "3"
                    }
                }
            },
            "3": {
                "prompts": [
                    {
                        "type":"text",
                        "content": "It's time to haggle, how do you approach this? "
                    },
                    {
                        "type":"text",
                        "content": "Make it clear to the Rwandan women trader she is robbing you blind?"
                    },
                    {
                        "type":"text",
                        "content": "Or... Liaise with traders who are part of a cooperative"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "You're robbing me blind!",
                        "responses": [
                            {
                                "type":"text",
                                "content": "responses...."
                            }
                        ],
                        "next_stage_id": "1"
                    },
                    "2": {
                        "text": "Liaise with traders",
                        "responses": [
                            {
                                "type":"text",
                                "content": "responses...."
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