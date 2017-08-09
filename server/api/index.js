const express = require('express');
const router = express.Router();

const script = {
	"initial_stage_id": "0",
	"stages": {
		"0": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "We'll take you through a typical day for Maman Chantal, step into her shoes and end the day providing for your family"
				},
				{
					"type": "text",
					"content": "Ready?"
				}
			],
			"choices": {
				"1": {
					"text": "Let's go!",
					"responses": [],
					"next_stage_id": "1"
				}
			}
		},
		"1": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "You need to get your children ready and prepare breakfast for the whole family, before you can leave the house."
				},
				{
					"type": "text",
					"content": "Because of this, You've arrived at the border crossing late. What do you do?"
				},
				{
					"type": "image",
					"content": "/images/guard.jpg"
				}

			],
			"choices": {
				"1": {
					"context": [
						{
							"type": "text",
							"content": "<hr><table><tr><td width='80px'><img src='/images/chantal.jpg'></td><td>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</td></tr></table><hr>"
						},
						{
							"type": "text",
							"content": "One of the things International Alert has set up spouse clubs, which encourage men, whose wives are traders, to share domestic responsibilities at home. For example, getting the children ready while the wife prepares breakfast. This way, YOU will get to the border early and won’t have to pay any unnecessary fees."
						}
					],
					"text": "Join the queue for a border pass (jeton)",
					"responses": [
						{
							"type": "text",
							"content": "It’s a shame you couldn’t arrive earlier, the queue is very long now. Hopefully there will be tomatoes left once you get across."
						},
						{
							"type": "image",
							"content": "/images/queue2.jpg"
						}
						
					],
					"next_stage_id": "2"
				},

<<<<<<< HEAD
				"2": {
					"text": "Pay an official for a quick pass",
					"responses": [
						{
							"type": "text",
							"content": "This will get you across the border quickly, but that money could have gone towards school fees for a week. Fingers crossed you make enough today to cover that."
						}
					],
					"next_stage_id": "2"
				}
			},
		},
		"2": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>International Alert has set up spouse clubs, which encourage men, whose wives are traders, to share domestic responsibilities at home. For example, getting the children ready while the wife prepares breakfast. This way, you will get to the border early and won’t have to pay any unnecessary fees.</div>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "You make it across the border and reach the market in Rwanda, but the Rwandan traders raise the price of tomatoes because they know you have travelled from DRC and can’t go back empty handed. Do you:"
				}
			],
			"choices": {
				"1": {
					"text": "Call a friend",
					"responses": [
						{
							"type": "text",
							"content": "That’s exactly what I would do!"
						},
						{
							"type": "image",
							"content": "/images/market.jpg"
						}
					],
					"next_stage_id": "3"
				},
				"2": {
					"text": "Walk away",
					"responses": [
						{
							"type": "text",
							"content": "That’s risky, you might not find tomatoes anywhere else and they will continue to charge you extra every time you go back.  "
						},
						{
							"type": "image",
							"content": "/images/market.jpg"
						}
					],
					"next_stage_id": "3"
				}
			}
		},
		"3": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>Alert helps to set up market committees, which bring together traders from DRC and Rwanda. Here they forge strong relationships and negotiate over the price of produce so that it is fair and profitable for everyone.</div>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "After purchasing your tomatoes, The DRC border is about to close."
				},
				{
					"type": "text",
					"content": "Unfortunately, you realise you have lost your jeton. What do you do? "
				},
			],
			"choices": {
				"1": {
					"text": "Reach out to a Rwandan trader for help",
					"responses": [
						{
							"type": "text",
							"content": "This happened to me last week. A Rwandan trader I met through Alert introduced me to a senior official who could help me get back to DRC. "
						},
						// {
						//     "type": "text",
						//     "content": "When I once lost my jeton at the market, a Rwandan trader came to my rescue. I met her at a dialogue group held by International Alert, and because of the relationship we built there, she came to the border and put me in touch with a senior official who agreed to help me. Her trust and support meant I was allowed to go through the crossing without paying for a new jeton."
						// },
						// {
						//     "type": "text",
						//     "content": "I couldn’t thank her enough for her help because if I didn’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
						// },
						// {
						//     "type": "text",
						//     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
						// }
					],
					"next_stage_id": "4"
				},
				"2": {
					"text": "Offer the Rwandan border official a bribe",
					"responses": [
=======
    var script = {
        "initial_stage_id": "0",
        "stages": {
            "0": {
                "context": [
                    {
                        "type":"image",
                        "content": "/images/queue.jpg"
                    },
                    {
                        "type": "text",
                        "content": "Are you Ready?"
                    }
                ],
                "prompts": [
                    {
                        "type": "text",
                        "content": "Welcome!"
                    },
                    {
                        "type": "text",
                        "content": "We will walk you through a typical scenario on the Rwandan/Congolese border."
                    },
                    {
                        "type": "text",
                        "content": "Ready?"
                    },
                    {
                        "type": "image",
                        "content": "/images/ready.gif"
                    },
                ],
                "choices": {
                    "1": {
                        "text": "Let's go!",
                        "responses": [],
                        "next_stage_id": "1"
                    }
                }
            },
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
                                "content": "This is not ideal.  Fingers crossed that there are tomatoes left by the time you get across. "
                            },
                        ],
                        "next_stage_id": "1.1"
                    },
                    
                    "2": {
                        "text": "Pay an official for a quick pass",
                        "responses": [
                            {
                                "type": "text",
                                "content": "You're through the border, but that money is the same amount as school fees for a week, so fingers crossed I make enough today to cover that."
                            }
                        ],
                        "next_stage_id": "1.1"
                    }
                }
            },
            "1.1": {
                "prompts": [],
                "choices": {
                    "1": {
                        "text": "Oh dear what should I have done?",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Hello! I’m Maman Bahati, Congolese mother of six, who has been selling manioc flour, rice and beans for the last 20 years and am now president of the Nguba market committee in Bukavu, eastern DRC."
                            },
                            {
                                "type": "text",
                                "content": "I take part in International Alert’s regional cross-border project, which has helped me to avoid these impossible decisions. "
                            },
                            {
                                "type": "text",
                                "content": "My husband gets the children ready on market day while I prepare breakfast. This way, I will get to the border early and don’t have to pay any unnecessary fees. "
                            },
                        ],
                        "next_stage_id": "2"
                    },
                    
                    "2": {
                        "text": "Oh no, what should I have done?",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Hello! I’m Maman Bahati, Congolese mother of six, who has been selling manioc flour, rice and beans for the last 20 years and am now president of the Nguba market committee in Bukavu, eastern DRC."
                            },
                            {
                                "type": "text",
                                "content": "I take part in International Alert’s regional cross-border project, which has helped me to avoid these impossible decisions. "
                            },
                            {
                                "type": "text",
                                "content": "My husband gets the children ready on market day while I prepare breakfast. This way, I will get to the border early and don’t have to pay any unnecessary fees. "
                            },
                        ],
                        "next_stage_id": "2"
                    }
                }
            },
            "2": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "You finally reach the market in Rwanda, where you haggle for the tomatoes you need to buy."
                    },
                    {
                        "type": "text",
                        "content": "Do you:"
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
                        ],
                        "next_stage_id": "2.1"
                    },
                    "2": {
                        "text": "Accuse the Rwandan trader of robbing you blind",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Bahati says: That’s what I used to do. It doesn’t end well, resulting in heated arguments.  "
                            }
                        ],
                        "next_stage_id": "2.1"
                    }
                }
            },
            "2.1": {
                "prompts": [],
                "choices": {
                    "1": {
                        "text": "Tell me more",
                        "responses": [
                            {
                                "type": "text",
                                "content": "To avoid haggling arguments I joined a market committee set up by Alert, which includes other traders (both from the DRC and Rwanda). "
                            },
                            {
                                "type": "text",
                                "content": "Now we negotiate a price beneficial for everyone before I begin my journey across the border. "
                            },
                            {
                                "type": "text",
                                "content": "We also work together to convince central government to build markets nearer to the border so we don’t have to walk long distances to reach them, wasting valuable time and money."
                            }
                        ],
                        "next_stage_id": "3"
                    },
                    "2": {
                        "text": "I knew I shouldn't argue",
                        "responses": [
                            {
                                "type": "text",
                                "content": "To avoid haggling arguments I joined a market committee set up by Alert, which includes other traders (both from the DRC and Rwanda). "
                            },
                            {
                                "type": "text",
                                "content": "Now we negotiate a price beneficial for everyone before I begin my journey across the border. "
                            },
                            {
                                "type": "text",
                                "content": "We also work together to convince central government to build markets nearer to the border so we don’t have to walk long distances to reach them, wasting valuable time and money."
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
                        "content": "You have bought your tomatoes and begin your journey home. "
                    },
                    {
                        "type": "text",
                        "content": "It's late, the border is about to close, and you realise that you have lost your jeton to cross the border back into the DRC. "
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
                                "content": "Phew, a Rwandan trader you met through Alert has come to your rescue and found a senior official to help. "
                            },
                            // {
                            //     "type": "text",
                            //     "content": "When I once lost my jeton at the market, a Rwandan trader came to my rescue. I met her at a dialogue group held by International Alert, and because of the relationship we built there, she came to the border and put me in touch with a senior official who agreed to help me. Her trust and support meant I was allowed to go through the crossing without paying for a new jeton."
                            // },
                            // {
                            //     "type": "text",
                            //     "content": "I couldn’t thank her enough for her help because if I didn’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
                            // },
                            // {
                            //     "type": "text",
                            //     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
                            // }
                        ],
                        "next_stage_id": "3.1"
                    },
                    "2": {
                        "text": "Offer the border official a bribe",
                        "responses": [
                            
                            {
                                "type": "text",
                                "content": "A bribe or new jeton is expensive, if it’s too much you may now end up in jail for the night"
                            },
                            // {
                            //     "type": "text",
                            //     "content": "Rwandese border guards are renowned for their strictness. So those who can’t produce a jeton can’t bribe their way out. They must buy a new jeton, adding more expense to an already expensive journey. Some traders I know have had to spend a night in a cell for failing to produce a valid pass, and they can’t buy a new one because they don’t have any money left."
                            // },
                            // {
                            //     "type": "text",
                            //     "content": "However, by building stronger relationships with my Rwandan counterparts through the cooperatives and dialogues groups held by International Alert, I know I have someone I can call on for help, if I got into a similar position. Someone who can put me in touch with a senior official at the Rwanda crossing that will allow me to cross without charging me more money. "
                            // }, {
                            //     "type": "text",
                            //     "content": "Without this support, I know if I don’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
                            // }, {
                            //     "type": "text",
                            //     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
                            // }
                        ],
                        "next_stage_id": "3.1"
                    }
                }
            },
            "3.1": {
                "prompts": [],
                "choices": {
                    "1": {
                        "text": "This happened to me too, want to know more ",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I couldn’t thank her enough for her help because if I didn’t get home before darkness fell, I could risk being attacked by thieves on the way. "
                            },
                            {
                                "type": "text",
                                "content": "I’d love for them to add an electronic registration system, so that those who accidentally misplace theirs can still pass through as long as they have an ID.  "
                            }
                        ],
                        "next_stage_id": "4"
                    },
                    "2": {
                        "text": "Oh no what should I have done?",
                        "responses": [
                            
                            {
                                "type": "text",
                                "content": "To avoid this I have built  stronger relationships with my Rwandan through Alert groups. I know I have someone I can call on for help, if I got into a similar position. Someone who can put me in touch with a senior official at the Rwanda crossing that will allow me to cross without charging me more money.  "
                            },
                            {
                                "type": "text",
                                "content": "Without this support, I know if I don’t get home before darkness fell and risk being attacked by thieves on the way."
                            },
                            {
                                "type": "text",
                                "content": "I’d love for them to add an electronic registration system, so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
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
                                "content": "That’s what I would do, sometimes it is hard to know which roadblocks are legal."
                            },
                        ],
                        "next_stage_id": "4.1"
                    },
                    "2": {
                        "text": "Pay the tax",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I’d avoid this, last time I did the same officer at that same post charged me double the next time. "
                            },
                            {
                                "type": "text",
                                "content": " Not anymore though..."
                            }
                        ],
                        "next_stage_id": "1"
                    }
                }
            },
            "4.1": {
                "prompts": [],
                "choices": {
                    "1": {
                        "text": "How can I tell though? Or know who to trust?",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I attend trainings that bring traders and border officials together to look at issues of tax, rights and obligations. These trainings educate each and everyone about their rights and obligations, and asks that they be respected."
                            },
                            {
                                "type": "text",
                                "content": "Without that knowledge I’m vulnerable to harassment and corruption. "
                            },
                            {
                                "type": "text",
                                "content": "Now, when I come across this kind of road block I seek out the senior official nearby and stand my ground. I explain my rights and tell them they can’t charge me this extra tax. If the senior official is actually someone who was on one of the training courses I attended, then this task is much easier as they too understand what they can/can’t ask of me.  "
                            }
                        ],
                        "next_stage_id": "999"
                    },
                    "2": {
                        "text": "Why not anymore?",
                        "responses": [
                            {
                                "type": "text",
                                "content": "I attend trainings that bring traders and border officials together to look at issues of tax, rights and obligations. These trainings educate each and everyone about their rights and obligations, and asks that they be respected."
                            },
                            {
                                "type": "text",
                                "content": "Without that knowledge I’m vulnerable to harassment and corruption. I know women scared to challenge the taxes who instead travel through panya routes (smuggling) where they are exposed to even more risk in the form theft and sometimes rape."
                            }, {
                                "type": "text",
                                "content": "Now, when I come across this kind of road block I seek out the senior official nearby and stand my ground. I explain my rights and tell them they can’t charge me this extra tax. If the senior official is actually someone who was on one of the training courses I attended, then this task is much easier as they too understand what they can/can’t ask of me."
                            }
                        ],
                        "next_stage_id": "999"
                    }
                }
            },
            "4.1": {
                "prompts": [
                    {
                        "type": "text",
                        "content": "Congratulations. Another day, another dollar."
                    },
                    {
                        "type": "text",
                        "content": "Start again?"
                    }
                ],
                "choices": {
                    "1": {
                        "text": "Start again?",
                        "responses": [
                            {
                                "type": "text",
                                "content": "Nice speaking to you."
                            },
                            {
                                "type": "text",
                                "content": "Maybe see you tomorrow! :)"
                            }
                        ],
                        "next_stage_id": "1"
                    }
                }
            }
        }
>>>>>>> refs/remotes/azure/master

						{
							"type": "text",
							"content": "Oh no, that could land you jail! Rwandan border guards will not accept bribes. Those who can’t produce a jeton must buy a new one, which is expensive."
						},
						{
							"type": "image",
							"content": "/images/jail.jpg"
						},
						// {
						//     "type": "text",
						//     "content": "Rwandese border guards are renowned for their strictness. So those who can’t produce a jeton can’t bribe their way out. They must buy a new jeton, adding more expense to an already expensive journey. Some traders I know have had to spend a night in a cell for failing to produce a valid pass, and they can’t buy a new one because they don’t have any money left."
						// },
						// {
						//     "type": "text",
						//     "content": "However, by building stronger relationships with my Rwandan counterparts through the cooperatives and dialogues groups held by International Alert, I know I have someone I can call on for help, if I got into a similar position. Someone who can put me in touch with a senior official at the Rwanda crossing that will allow me to cross without charging me more money. "
						// }, {
						//     "type": "text",
						//     "content": "Without this support, I know if I don’t get home to my family before darkness fell, I could risk being attacked by thieves on the way."
						// }, {
						//     "type": "text",
						//     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
						// }
					],
					"next_stage_id": "99"
				}
			}
		},
		"4": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>Rwandan border guards will not accept bribes. So those who can’t produce a jeton must buy a new one, which is expensive, or risk spending the night in a makeshift open-air jail.</div>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>However, by building a stronger relationship with Rwandan traders through the committees means you can ask them to put you in touch with a Rwandan senior official, who can help you cross the border without charging you extra. </div>"
				}				
			],
			"prompts": [
				{
					"type": "text",
					"content": "The border crossing is very chaotic, as you’re making your way back to DRC you see a fellow trader being harassed by someone unofficial and not in uniform demanding money."
				},
				{
					"type": "text",
					"content": "If that wasn’t enough a truck accidently reverses into the crowd and as a result of this chaos, you end up losing half your tomatoes"
				},
				{
					"type": "image",
					"content": "/images/chaos.gif"
				}
			],
			"choices": {
				"1": {
					"text": "Continue your journey",
					"next_stage_id": "5"
				}
			}
		},
		"5": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "It’s now very dark, dangerous to travel and the market in the DRC is about close."
				},
				{
					"type": "text",
					"content": "Do you:"
				}
			],
			"choices": {
				"1": {
					"text": "Sell your tomatoes tomorrow",
					"responses": [
						{
							"type": "text",
							"content": "The is the safer option, but I know women who risk it because they need the money and sell their perishable items"
						},
					],
					"next_stage_id": "6"
				},
				"2": {
					"text": "Set up your own street stall ",
					"responses": [
						{
							"type": "text",
							"content": "That is very risky. If thieves pretending to be border officials see your street stall, they will destroy it, take your money and your tomatoes."
						}
					],
					"next_stage_id": "6"
				}
			}
		},
		"6": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>It is sometimes hard for trader to know who is an official border agent and who isn’t as there are so many checkpoints along the crossing. Therefore, International Alert works with the official border agents to stop these thieves pretending to be official from harassing trader and taking money off them.</div>"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "You’re finally home but the children haven’t eaten. What now?"
				},
				{
					"type": "text",
					"content": "Do you:"
				}
			],
			"choices": {
				"1": {
					"text": "Get started on dinner",
					"responses": [
						{
							"type": "text",
							"content": "It’s already been a long day, now you’ll be on your feet for another few hours."
						},
					],
					"next_stage_id": "90"
				},
				"2": {
					"text": "Confront your husband",
					"responses": [
						{
							"type": "text",
							"content": "My husband is part of the spouse club and now shares the domestic chores. Now when I get home after the market, I can rest and put my feet up."
						}
					],
					"next_stage_id": "90"
				}
			}
		},		
		"90": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>This is the case for lots of women in DRC. It’s not culturally acceptable to confront your husband or for them to take on any domestic duties but International Alert’s spouse club helps families understand the benefits of sharing the duties. Especially on market days when timing is crucial to how much money you can make that day.</div>"
				}						
			],			
			"prompts": [
				{
					"type": "text",
					"content": "Congratulations. You've completed the tomato challenge!"
				},
				{
					"type": "image",
					"content": "/images/icecream.jpg"
				}
			],
			"choices": {
				"1": {
					"text": "Print your jeton to collect your free ice cream",
					"next_stage_id": "0"
				}
			}
		},
		"99": {
			"context": [
				{
					"type": "image",
					"content": "/images/chantal.jpg"
				},
				{
					"type": "text",
					"content": "<div class='text'>Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the difficult journey she takes each week to cross the border into Rwanda to buy tomatoes she can sell.</div><hr>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>Rwandan border guards will not accept bribes. So those who can’t produce a jeton must buy a new one, which is expensive, or risk spending the night in a makeshift open-air jail.</div>"
				},
				{
					"type": "text",
					"content": "<div class='panel'>However, by building a stronger relationship with Rwandan traders through the committees means you can ask them to put you in touch with a Rwandan senior official, who can help you cross the border without charging you extra. </div>"
				}		
			],
			"prompts": [
				{
					"type": "text",
					"content": "Jail is not a great place to be. Would you like to reconsider?"
				}
			],
			"choices": {
				"1": {
					"text": "No, try to bribe the official again.",
					"responses": [
						{
							"type": "text",
							"content": "Oh dear - you've been thrown in jail for the night"
						},
						{
							"type": "text",
							"content": "That's game over I'm afraid. Thanks for playing"
						},
						{
							"type": "image",
							"content": "/images/gameover.jpg"
						}
					],
					"next_stage_id": "0"
				},
				"2": {
					"text": "Yes, I'll try that again",
					"responses": [
						{
							"type": "text",
							"content": "Wise choice... "
						},
					],
					"next_stage_id": "3"
				}
			}
		}
	}

}

/* GET home page. */
router.get('/script', (req, res) => {

	// const delay = 1500;
	// setTimeout(() => res.json(script), delay);
	res.json(script)
});


module.exports = router;