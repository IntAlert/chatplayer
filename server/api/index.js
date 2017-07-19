var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/script', function (req, res, next) {

    var script = {
        "initial_stage_id": "1",
        "stages": {
            "1": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "You've arrived at the border crossing late. What do you do?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Join the queue for a border pass (jeton)",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Hello! I’m Maman Bahati, let me share my experience of crossing the border with you."
                            },
                            {
                                "type": "text",
                                "content": "Arriving at the border late is never ideal. You have two impossible options, get in the queue with no guarantee there will be any tomatoes left by the time you cross. Or pay a border official between 500 – 1,000 CFA, which will eat into your profits and you may not make enough money to feed your family."
                            },
                            {
                                "type": "text",
                                "content": "BUT I take part in International Alert’s regional cross-border project, which has helped me to avoid making those impossible decisions."
                            },
                            {
                                "type": "text",
                                "content": "1) It encourages husbands, whose wives are traders, to share some of the responsibilities at home. For example, my husband gets the children ready on market day while I prepare breakfast. This way, I will get to the border early and don’t have to pay any unnecessary fees."
                            },
                            {
                                "type": "text",
                                "content": "2) It has helped me to build relationships with traders across the border in Rwanda. Now, before I leave the house I call Janvier in Rwanda to ask whether there is enough rice for sale, and the going rate thus saving me time and money."
                            }
                        ],
                        "next_stage_id": "2"
                    },
                    "2": {
                        "text": "Pay an official for a quick pass",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I would have done that in the past and it would have cost me between 500 – 1,000 CFA to jump the queue!"
                            },
                            {
                                "type": "text",
                                "content": "Hello! I’m Maman Bahati, let me share my experience of crossing the border with you."
                            },
                            {
                                "type": "text",
                                "content": "If I was late, I didn’t want to waste my time waiting for a ‘jeton.’ BUT this meant any money spent on paying the border official would eat into my profits, and I may not have made enough money to feed my family that week."
                            },
                            {
                                "type": "text",
                                "content": "BUT NOW I always arrive early, thanks to International Alert’s regional cross-border project which:"
                            },
                            {
                                "type": "text",
                                "content": "1) encourages husbands, whose wives are traders, to share some of the responsibilities at home. For example, my husband gets the children ready on market day while I prepare breakfast. This way, I will get to the border early and not pay any unnecessary fees."
                            },
                            {
                                "type": "text",
                                "content": "2) helped me to build relationships with traders across the border in Rwanda. Now, before I leave the house I call Janvier in Rwanda to ask whether there is enough rice for sale, and the going rate thus saving me time and money."
                            }
                        ],
                        "next_stage_id": "2"
                    }
                }
            },
            "2": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "You finally reach the market in Rwanda."
                    },
                    {
                        "type": "text",
                        "content": "You haggle for the tomatoes you need to buy."
                    },
                    {
                        "type": "text",
                        "content": "What do you do?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Negotiate",
                        "responses": [
                            {
                                "type": "text",
                                "content": "That’s exactly what I would do!"
                            },
                            {
                                "type": "text",
                                "content": "There have been times when Rwandan traders deliberately raised commodity prices, just because they know I’ve crossed the border from DRC and can’t go back empty handed. Or lack of rain and a smaller harvest, has meant the price has risen. This means I must haggle, which can sometimes turn into a heated argument between us all."
                            },
                            {
                                "type": "text",
                                "content": "To address this and other issues, I joined a market committee set up by International Alert, which includes other traders (both from the DRC and Rwanda)."
                            },
                            {
                                "type": "text",
                                "content": "This committee has allowed me to forge better relationships with Rwandan traders to find out crucial details such as prices and availability before I begin my journey across the border. It also crucially allows us to come together and calmly negotiate a price for the produce that is beneficial for everyone involved."
                            },
                            {
                                "type": "text",
                                "content": "From these committees, we (the traders) have been able to lobby the central government to build markets nearer to the border so we don’t have to walk long distances to reach them, to stop us wasting valuable time and money."
                            }
                        ],
                        "next_stage_id": "3"
                    },
                    "2": {
                        "text": "Accuse the Rwandan trader of robbing you blind",
                        "responses": [
                            {
                                "type": "text",
                                "content": "That’s what I used to do."
                            },
                            {
                                "type": "text",
                                "content": "There have been times when Rwandan traders deliberately raised commodity prices, just because they know I’ve crossed the border from DRC and can’t go back empty handed. Or lack of rain and a smaller harvest, has meant the price of tomatoes has risen. I used to deal with it through heated arguments that would only raise tensions."
                            },
                            {
                                "type": "text",
                                "content": "But then I joined a market committee set up by International Alert, which includes other traders (both from the DRC and Rwanda)."
                            },
                            {
                                "type": "text",
                                "content": "This committee has improved my ability to forge better relationships with the Rwandan sellers to find out crucial details such as prices and availability before I begin my journey across the border. It also allows us to come together to calmly negotiate a price for the produce that is beneficial for everyone involved."
                            },
                            {
                                "type": "text",
                                "content": "From these committees, we (the traders) have also been able to lobby the central government to build markets nearer to the border so we don’t have to walk long distances to reach them, to stop us wasting valuable time and money."
                            }
                        ],
                        "next_stage_id": "3"
                    }
                }
            },
            "3": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "You have bought your tomatoes and begin your journey home. It’s late, the border is about to close, and you realise that you have lost your jeton to cross the border back into the DRC. "
                    },
                    {
                        "type": "text",
                        "content": "What do you do?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Reach out to a Rwandan trader for help",
                        "responses": [
                            {
                                "type": "text",
                                "content": "When I once lost my jeton at the market, a Rwandan trader came to my rescue. I met her at a dialogue group held by International Alert, and because of the relationship we built there, she came to the border and put me in touch with a senior official who agreed to help me. Her trust and support meant I was allowed to go through the crossing without paying for a new jeton."
                            },
                            {
                                "type": "text",
                                "content": "I couldn’t thank her enough for her help because if I didn’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
                            },
                            {
                                "type": "text",
                                "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
                            }
                        ],
                        "next_stage_id": "4"
                    },
                    "2": {
                        "text": "Offer the border official a bribe",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Rwandese border guards are renowned for their strictness. So those who can’t produce a jeton can’t bribe their way out. They must buy a new jeton, adding more expense to an already expensive journey. Some traders I know have had to spend a night in a cell for failing to produce a valid pass, and they can’t buy a new one because they don’t have any money left."
                            },
                            {
                                "type": "text",
                                "content": "However, by building stronger relationships with my Rwandan counterparts through the cooperatives and dialogues groups held by International Alert, I know I have someone I can call on for help, if I got into a similar position. Someone who can put me in touch with a senior official at the Rwanda crossing that will allow me to cross without charging me more money. "
                            }, {
                                "type": "text",
                                "content": "Without this support, I know if I don’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
                            }, {
                                "type": "text",
                                "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
                            }
                        ],
                        "next_stage_id": "4"
                    }
                }
            },
            "4": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "Once back in the DRC, you hit a military roadblock where an official demands you pay 1800 CFA before he can release your consignment."
                    },
                    {
                        "type": "text",
                        "content": "How do you deal with this?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Talk to the senior official nearby",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Sometimes it is hard to know which roadblock are legal and which are not. Some border posts have as many as eight different government departments stationed at them."
                            },
                            {
                                "type": "text",
                                "content": "Therefore, I have attended trainings that bring traders, like myself, and border officials together to look at issues of tax, rights and obligations. These trainings educate each and everyone about their rights and obligations, and asks that they be respected. "
                            },
                            {
                                "type": "text",
                                "content": "Lack of knowledge of my own rights, made me and other traders vulnerable to harassment and corruption, including excessive charges, difficulties in obtaining passports and visas. As a result, many choose to travel through panya routes (smuggling) where they are exposed to even more risk in the form theft and sometimes rape."
                            },
                            {
                                "type": "text",
                                "content": "Now, when I come across this kind of road block I seek out the senior official nearby and stand my ground. I explain my rights and tell them they can’t charge me this extra tax. If the senior official is actually someone who was on one of the training courses I attended, then this task is much easier as they too understand what they can/can’t ask of me."
                            }
                        ],
                        "next_stage_id": "1"
                    },
                    "2": {
                        "text": "Pay the tax",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I have paid this tax in the past but I also know that this same officer at that same post charged me 3000 CFA last time and may charge even more next time, but I didn’t know what else I could do."
                            },
                            {
                                "type": "text",
                                "content": "Attending trainings that bring traders, like myself, and border officials together to look at issues of tax, rights and obligations, showed me that I had other options. "
                            }, {
                                "type": "text",
                                "content": "These trainings educate each and everyone about their rights and obligations and asks that they be respected."
                            }, {
                                "type": "text",
                                "content": "Lack of knowledge of my own rights, made me and other traders vulnerable to harassment and corruption, including excessive charges, difficulties in obtaining passports and visas. As a result, many choose to travel through panya routes (smuggling) where they are exposed to even more risk in the form theft and sometimes rape."
                            }, {
                                "type": "text",
                                "content": "Now, when I come across this kind of road block I seek out the senior official nearby and stand my ground. I explain my rights and tell them they can’t charge me this extra tax. If the senior official is actually someone who was on one of the training courses I attended, then this task is much easier as they too understand what they can/can’t ask of me."
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