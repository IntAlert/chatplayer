const express = require('express');
const router = express.Router();

const script = {
	
	"setup": {
		"initial_stage_id": "0",
		"initial_scores": {
			"money": 0,
			"tomatoes": 0,
		}
	},
	"stages": {
		"0": {
			"prompts": [
				{
					"type": "text",
					"content": "Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the journey she takes each week to cross the border into Rwanda to buy tomatoes"
				}
			],
			"choices": {
				"1": {
					"text": "Let's go",
					"targetType": "feed",
					"target": "1"
				}
			}
		},
		"1": {
			"context": [
				
				
			],
			"prompts": [
				{
					"type": "text",
					"content": "You need to get your children ready and prepare breakfast for the whole family, before you can leave the house. Because of this, you've arrive at the border crossing late",
					"scoreChange": {
						"money": {
							"operator": "set",
							"amount": 100
						},
					}
				},
				{
					"type": "image",
					"content": "/images/guard.jpg",
					// "more": "Maman Chantal lives in the DRC with her husband and four children. Step into her shoes and experience the journey she takes each week to cross the border into Rwanda to buy tomatoes."
				},
				{
					"type": "text",
					"content": "What do you do?"
				}
			],
			"choices": {
				"1": {
					"context": [
						// {
						// 	"type": "text",
						// 	"content": "One of the things that Alert is doing is setting up spouse clubs, which encourage husbands to share domestic chores at home. That way women traders can get to the border early and avoid unnecessary delays."
						// }
					],
					"text": "Join the queue for a border pass",
					"responses": [
						{
							"type": "text",
							"content": "Hi I'm Maman Bahati, another Congolese trader. It's a shame you couldn't arrive earlier. The queue is very long now. Hopefully there will be tomatoes once you get across."
						},
						{
							"type": "image",
							"content": "/images/queue2.jpg",
							"more": "Alert lobbies border officials to take measures that reduce the amount of time women traders have to spend at the border. Alert has set up spouse clubs, which encourage men, whose wives are traders, to share domestic responsibilities at home. For example, getting the children ready while the wife prepares breakfast. This way, you get to the border early and won't have to pay any extra fees."
						}
						
					],
					"targetType": "feed",
					"target": "2"
				},
				"2": {
					"text": "Bribe an official for a quick pass",
					"responses": [
						{
							"type": "text",
							"content": "This will get you across the border quickly, but that money could have gone towards school fees for a week. Fingers crossed you make enough today to cover that.",
							"scoreChange": {
								"money": {
									"operator": "add",
									"amount": -10
								},
							}
						}
					],
					"targetType": "feed",
					"target": "2"
				}
			},
		},
		"2": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>Alert lobbies border officials to take measures that reduce the amount of time women traders have to spend at the border. International Alert has set up spouse clubs, which encourage men, whose wives are traders, to share domestic responsibilities at home. For example, getting the children ready while the wife prepares breakfast. This way, you will get to the border early and won't have to pay any unnecessary fees.</div>"
				// }
			],
			"prompts": [
				{
					"type": "text",
					"content": "You make it across the border and reach the market place in Rwanda. The price of tomatoes is high but you can't go back empty handed. Do you:"
				}
			],
			"choices": {
				"1": {
					"text": "Keep trying other stalls",
					"responses": [
						{
							"type": "text",
							"content": "That's risky, you might not find tomatoes anywhere else and they will continue to charge you extra every time you go back.  "
						},
						{
							"type": "image",
							"content": "/images/market.jpg",
							"more": "Alert helps to set up market committees, which bring together traders from DRC and Rwanda. Here they forge strong relationships and negotiate over the price of produce so that it is fair and profitable for everyone."
						}
					],
					"targetType": "feed",
					"target": "3"
				},
				"2": {
					"text": "Call a friend to help negotiate",
					"responses": [
						{
							"type": "text",
							"content": "That's exactly what I would do!"
						},
						{
							"type": "image",
							"content": "/images/market.jpg",
							"more": "Alert helps to set up market committees, which bring together traders from DRC and Rwanda. Here they forge strong relationships and negotiate over the price of produce so that it is fair and profitable for everyone."
						}, 
						{
							"type": "text",
							"content": "You negotiate a reasonable price: 80 francs for 100 tomatoes",
							"scoreChange": {
								"money": {
									"operator": "add",
									"amount": -80
								},
								"tomatoes": {
									"operator": "add",
									"amount": 100
								}
							}
						}
					],
					"targetType": "feed",
					"target": "3"
				}				
			}
		},
		"3": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>Alert helps to set up market committees, which bring togethAlert helps to set up cross border cooperatives. Together, Congolese and Rwandan traders have stronger bargaining power and can negotiate a better price.</div>"
				// }
			],
			"prompts": [
				{
					"type": "text",
					"content": "The DRC border is about to close. After purchasing your tomatoes you realise you have lost your border pass. What do you do?"
				}
			],
			"choices": {
				"1": {
					"text": "Reach out to a Rwandan trader for help",
					"responses": [
						{
							"type": "text",
							"content": "This happened to me last week. A Rwandan trader I met through Alert introduced me to a senior official who had participated in Alert's dialogue training and helped me to get back to DRC."
						},
						// {
						//     "type": "text",
						//     "content": "When I once lost my border pass at the market, a Rwandan trader came to my rescue. I met her at a dialogue group held by International Alert, and because of the relationship we built there, she came to the border and put me in touch with a senior official who agreed to help me. Her trust and support meant I was allowed to go through the crossing without paying for a new border pass."
						// },
						// {
						//     "type": "text",
						//     "content": "I couldn't thank her enough for her help because if I didn't get home to my family before darkness fell, I could risk being attacked by thieves on the way."
						// },
						// {
						//     "type": "text",
						//     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
						// }
					],
					"targetType": "feed",
					"target": "4"
				},
				"2": {
					"text": "Offer the Rwandan border official a bribe",
					"responses": [

						{
							"type": "text",
							"content": "Oh no, that could land you in jail!"
						},
						{
							"type": "image",
							"content": "/images/jail.jpg",
							"more": "Rwandan border guards will not accept bribes. So those who can't produce a border pass must buy a new one, which is expensive, or risk spending the night in jail. ",
							"scoreChange": {
								"money": {
									"operator": "add",
									"amount": -10
								},
							}

						},
						// {
						//     "type": "text",
						//     "content": "Rwandese border guards are renowned for their strictness. So those who can't produce a border pass can't bribe their way out. They must buy a new border pass, adding more expense to an already expensive journey. Some traders I know have had to spend a night in a cell for failing to produce a valid pass, and they can't buy a new one because they don't have any money left."
						// },
						// {
						//     "type": "text",
						//     "content": "However, by building stronger relationships with my Rwandan counterparts through the cooperatives and dialogues groups held by International Alert, I know I have someone I can call on for help, if I got into a similar position. Someone who can put me in touch with a senior official at the Rwanda crossing that will allow me to cross without charging me more money. "
						// }, {
						//     "type": "text",
						//     "content": "Without this support, I know if I don't get home to my family before darkness fell, I could risk being attacked by thieves on the way."
						// }, {
						//     "type": "text",
						//     "content": "Going forward it would be great to see an electronic registration system in place one day, of all the daily passes so that those who accidentally misplace theirs can still pass through as long as they have an ID. "
						// }
					],
					"targetType": "feed",
					"target": "99"
				}
			}
		},
		"4": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>Rwandan border guards will not accept bribes. So those who can't produce a border pass must buy a new one, which is expensive, or risk spending the night in jail.</div>"
				// },
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>By building networks of cross border relationships, cooperative members can call on each other for help.</div>"
				// }				
			],
			"prompts": [
				{
					"type": "text",
					"content": "The border is very chaotic. As you make your way back you see someone demanding money from a fellow trader."
				},
				{
					"type": "text",
					"content": "A truck starts to reverse into the crowd and you lose half of your tomatoes."
					,

					"scoreChange": {
						"tomatoes": {
							"operator": "multiply",
							"amount": 0.5
						},
					}
				},
				{
					"type": "image",
					"content": "/images/chaos.gif"
				}
			],
			"choices": {
				"1": {
					"text": "Continue your journey",
					"targetType": "feed",
					"target": "6"
				}
			}
		},
		"5": {
			"context": [
				
				
			],
			"prompts": [
				{
					"type": "text",
					"content": "It's now dark and the market in DRC is closed. You will have to sell your tomatoes tomorrow."
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
					"targetType": "feed",
					"target": "6"
				},
				"2": {
					"text": "Set up your own street stall ",
					"responses": [
						{
							"type": "text",
							"content": "That is very risky. If thieves pretending to be border officials see your street stall, they will destroy it, take your money and your tomatoes."
						}
					],
					"targetType": "feed",
					"target": "6"
				}
			}
		},
		"6": {
			"context": [
				
				
			],
			"prompts": [
				{
					"type": "text",
					"content": "It's now dark and the market in DRC is closed. You will have to sell your tomatoes tomorrow."
				},
				{
					"type": "text",
					"content": "You return home but the children haven't eaten. What now?"
				}
			],
			"choices": {
				"1": {
					"text": "Get started on dinner",
					"responses": [
						{
							"type": "text",
							"content": "My husband is part of the spouse club and now shares the domestic chores. Now when I get home after the market, I can rest and put my feet up."
						},
						{
							"type": "image",
							"content": "/images/spouse-club.png",
							"more": "This is the case for lots of women in DRC. It's not culturally acceptable to confront your husband or for them to take on any domestic duties but International Alert's spouse club helps families understand the benefits of sharing the duties. Especially on market days when timing is crucial to how much money you can make that day."
						}
					],
					"targetType": "feed",
					"target": "90"
				},
				"2": {
					"text": "Confront your husband",
					"responses": [
						{
							"type": "text",
							"content": "My husband is part of the spouse club and now shares the domestic chores. Now when I get home after the market, I can rest and put my feet up."
						}
					],
					"targetType": "feed",
					"target": "90"
				}
			}
		},		
		"90": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>This is the case for lots of women in DRC. It's not culturally acceptable to confront your husband or for them to take on any domestic duties but International Alert's spouse club helps families understand the benefits of sharing the duties. Especially on market days when timing is crucial to how much money you can make that day.</div>"
				// }						
			],			
			"prompts": [
				{
					"type": "text",
					"content": "Congratulations. You've completed the tomato challenge!"
				}
			],
			"choices": {
				"1": {
					"text": "Continue",
					"targetType": "feed",
					"target": "91"
				}
			}
		},
		"91": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>This is the case for lots of women in DRC. It's not culturally acceptable to confront your husband or for them to take on any domestic duties but International Alert's spouse club helps families understand the benefits of sharing the duties. Especially on market days when timing is crucial to how much money you can make that day.</div>"
				// }						
			],			
			"prompts": [
				{
					"type": "image",
					"content": "/images/icecream.jpg"
				}
			],
			"choices": {
				"1": {
					"text": "Print your border pass to collect your free ice cream",
					"targetType": "route",
					"target": "/print"
				}
			}
		},
		"99": {
			"context": [
				
				
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>Rwandan border guards will not accept bribes. So those who can't produce a border pass must buy a new one, which is expensive, or risk spending the night in jail.</div>"
				// },
				// {
				// 	"type": "text",
				// 	"content": "<div class='panel'>By building networks of cross border relationships, cooperative members can call on each other for help.</div>"
				// }		
			],
			"prompts": [
				{
					"type": "text",
					"content": "Jail is not a great place to be."
				}
			],
			"choices": {
				"1": {
					"text": "Try that again",
					"responses": [
						{
							"type": "text",
							"content": "Wise choice... "
						},
					],
					"targetType": "feed",
					"target": "3"
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