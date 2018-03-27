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
					"speaker": 0,
					"type": "text",
					"content": "Je suis Maman Chantal. Je vis en RDC avec mon mari et mes quatre enfants."
				},
				{
					"speaker": 0,
					"type": "text",
					"content": "Prenez donc ma place pour voir le trajet que je parcours chaque semaine pour m'approvisionner en tomates au Rwanda."
				}
			],
			"choices": {
				"1": {
					"text": "C'est parti!",
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
					"content": "Avant de pouvoir quitter la maison, vous devez veiller à ce que vos enfants soient prêts pour l'école et préparer le petit déjeuner pour toute la famille, ce qui fait que vous arrivez tard au poste frontalier.",
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
					"content": "Que faites-vous?"
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
					"text": "Vous prenez place dans la file d’attente pour obtenir un laissez-passer.",
					"responses": [
						{
							"type": "text",
							"content": "Bonjour, je suis Maman Bahati, petite commerçante congolaise comme vous. Dommage que vous n’ayez pas pu arriver plus tôt. La file d’attente est maintenant très longue. J’espère que vous trouverez encore des tomates une fois que vous aurez traversé la frontière."
						},
						{
							"type": "image",
							"content": "/images/queue2.jpg",
							"more": "International Alert mène des plaidoyers auprès des douaniers et officiels de migration pour qu’ils réduisent le temps que doivent passer les femmes petites commerçantes à la frontière. Nous avons également créé des clubs d’époux pour encourager les maris des femmes petites commerçantes à partager les tâches ménagères, par exemple en leur demandant de préparer les enfants pour l’école pendant que leur épouse fait le petit déjeuner. Cela permet aux petites commerçantes d’arriver plus tôt à la frontière et leur évite de payer des frais supplémentaires."
						}
						
					],
					"targetType": "feed",
					"target": "2"
				},
				"2": {
					"text": "Vous soudoyez un agent pour obtenir un laissez-passer plus rapidement.",
					"responses": [
						{
							"type": "text",
							"content": "Bonjour, je suis Maman Bahati, petite commerçante congolaise comme vous. Si vous soudoyez un agent, vous pourrez traverser la frontière rapidement, mais cette somme aurait pu vous servir à payer les frais d’école pour toute une semaine. J’espère vraiment que vous gagnerez suffisamment d’argent aujourd’hui pour pouvoir couvrir ces frais.",
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
					"content": "Vous arrivez de l’autre côté de la frontière et parvenez jusqu’au marché rwandais. Le prix des tomates y est élevé, mais vous ne pouvez pas repartir les mains vides. Que faites-vous ?"
				}
			],
			"choices": {
				"1": {
					"text": "Vous essayez d’autres étals.",
					"responses": [
						{
							"type": "text",
							"content": "C’est risqué, car vous pourriez ne pas trouver de tomates ailleurs, et les vendeurs vous demanderont un prix de plus en plus élevé chaque fois que vous retournerez les voir"
						},
						{
							"speaker": -1,
							"type": "text",
							"content": "Vous acceptez de payer 80 francs les 100 tomates..",
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
						},
						{
							"type": "image",
							"content": "/images/market.jpg",
							"more": "International Alert aide à mettre en œuvre des comités de marché réunissant des commerçantes de RDC et du Rwanda. Ces comités leur permettent d’instaurer des relations solides entre elles et de négocier le prix des marchandises pour que tout le monde y trouve son compte de manière équitable."
						}
					],
					"targetType": "feed",
					"target": "3"
				},
				"2": {
					"text": "Vous appelez un ami pour qu’il vous aide à négocier.",
					"responses": [
						{
							"type": "text",
							"content": "C’est exactement ce que je ferais ! Vous négociez un prix raisonnable : 80 francs les 100 tomates.",
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
						},
						{
							"type": "image",
							"content": "/images/market.jpg",
							"more": "International Alert aide à mettre en œuvre des comités de marché réunissant des commerçantes de RDC et du Rwanda. Ces comités leur permettent d’instaurer des relations solides entre elles et de négocier le prix des marchandises pour que tout le monde y trouve son compte de manière équitable."
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
					"content": "La frontière avec la RDC va bientôt fermer. Après avoir acheté vos tomates, vous vous rendez compte que vous avez égaré votre laissez-passer. Que faites-vous ?"
				}
			],
			"choices": {
				"1": {
					"text": "Vous contactez une commerçante rwandaise pour qu’elle vous vienne en aide.",
					"responses": [
						{
							"type": "text",
							"content": "C’est ce qui m’est arrivé la semaine dernière. Une petite commerçante rwandaise que j’avais rencontrée par l’intermédiaire d’Alert m’a présentée à un haut fonctionnaire qui avait suivi la formation d’Alert sur le dialogue et qui m’a aidée à rentrer en RDC."
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
					"text": "Vous proposez un pot-de-vin au douanier. ",
					"responses": [

						{
							"type": "text",
							"content": "Oh non, vous risquez de vous retrouver en prison !"
						},
						{
							"type": "image",
							"content": "/images/jail.jpg",
							"more": "Les douaniers rwandais n’acceptent pas les pots-de-vin. Les personnes qui ne peuvent pas présenter leur laissez-passer doivent en acheter un nouveau, ce qui revient cher, faute de quoi elles risquent de passer la nuit en prison. ",
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
				// {
				// 	"type": "text",
				// 	"content": "You negotiate a reasonable price: 80 francs for 100 tomatoes",
				// 	"scoreChange": {
				// 		"money": {
				// 			"operator": "add",
				// 			"amount": -80
				// 		},
				// 		"tomatoes": {
				// 			"operator": "add",
				// 			"amount": 100
				// 		}
				// 	}
				// },
				{
					"type": "image",
					"content": "/images/chaos.gif"
				},
				{
					"type": "text",
					"content": "La frontière est un endroit très chaotique. Sur le chemin du retour, vous voyez un agent en train de réclamer de l’argent à une autre petite commerçante.."
				},
				{
					"type": "text",
					"content": "Vous intervenez pour informer la petite commerçante et l’agent des règles commerciales que vous avez apprises lors de la formation dispensée par International Alert, et ainsi les aider à comprendre la différence entre les taxes légales et illégales."
				},
				{
					"type": "text",
					"content": "Alors que vous attendez de retraverser la frontière, un camion fait marche arrière et percute la foule. Vous perdez la moitié de vos tomates."
					,

					"scoreChange": {
						"tomatoes": {
							"operator": "multiply",
							"amount": 0.5
						},
					}
				}
			],
			"choices": {
				"1": {
					"text": "Poursuivez votre chemin.",
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
					"content": "La nuit est tombée, et le marché du côté congolais est maintenant fermé. Vous devrez attendre jusqu’à demain pour vendre vos tomates."
				},
				{
					"type": "text",
					"content": "Que faites-vous ?"
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
					"content": "La nuit est tombée, et le marché du côté congolais est maintenant fermé. Vous devrez attendre jusqu’à demain pour vendre vos tomates."
				},
				{
					"type": "text",
					"content": "Vous rentrez chez vous, mais les enfants n’ont pas mangé. Que faites-vous ?"
				}
			],
			"choices": {
				"1": {
					"text": "Vous commencez à préparer le repas.",
					"responses": [
						{
							"type": "text",
							"content": "Mon mari fait partie du club des époux et partage désormais les tâches ménagères. Alors maintenant, quand je rentre du marché, je peux me reposer et me laisser servir."
						},
						{
							"type": "image",
							"content": "/images/spouse-club.png",
							"more": "Cela concerne beaucoup de femmes de RDC. Il est culturellement inacceptable de confronter son mari ou de lui demander d’assumer des corvées, mais nos clubs d’époux aident les familles à comprendre les avantages qu’il y a à partager les tâches ménagères. Surtout les jours de marché, quand il est crucial d’arriver suffisamment tôt pour pouvoir gagner de l’argent."
						}
					],
					"targetType": "feed",
					"target": "90"
				},
				"2": {
					"text": "Vous confrontez votre mari.",
					"responses": [
						{
							"type": "text",
							"content": "Mon mari fait partie du club des époux et partage désormais les tâches ménagères. Alors maintenant, quand je rentre du marché, je peux me reposer et me laisser servir."
						},
						{
							"type": "image",
							"content": "/images/spouse-club.png",
							"more": "Cela concerne beaucoup de femmes de RDC. Il est culturellement inacceptable de confronter son mari ou de lui demander d’assumer des corvées, mais nos clubs d’époux aident les familles à comprendre les avantages qu’il y a à partager les tâches ménagères. Surtout les jours de marché, quand il est crucial d’arriver suffisamment tôt pour pouvoir gagner de l’argent."
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
					"content": 'Félicitations, vous avez complété le défi des vendeuses de tomates ! Pour obtenir de plus amples renseignements sur les travaux que nous consacrons à cette thématique, consultez <a href="http://www.international-alert.org/crossing-borders" target="_blank">www.international-alert.org/crossing-borders</a>'
				}
			],
			"choices": {
				"1": {
					"text": "Recommencer",
					// "targetType": "feed",
					// "target": "91"
					"targetType": "route",
					"target": "/"
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
					"text": "Print your border pass to collect your free ice cream topping",
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
					"content": "La prison n’est pas le meilleur endroit qui soit… "
				}
			],
			"choices": {
				"1": {
					"text": "Réessayez",
					"responses": [
						{
							"type": "text",
							"content": "Sage décision…  "
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
	res.json(script)
});


module.exports = router;