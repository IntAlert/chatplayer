const express = require('express');
const router = express.Router();

const script = {
	"initial_stage_id": "0",
	"stages": {
		"0": {
			"context": [
				{
					"type": "image",
					"content": "/images/queue.jpg"
				},
				{
					"type": "text",
					"content": "Some text <strong>describing</strong> context"
				}
			],
			"prompts": [
				{
					"type": "text",
					"content": "Family life has taken over this morning getting the kids ready for school, making breakfast and doing other household chores."
				},
				{
					"type": "text",
					"content": "Now you are going to face a challenging day arriving late to the border!"
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

}

/* GET home page. */
router.get('/script', (req, res) => {

	// const delay = 1500;
	// setTimeout(() => res.json(script), delay);
	res.json(script)
});


module.exports = router;