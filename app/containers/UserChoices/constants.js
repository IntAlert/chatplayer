/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const RESPOND = 'borderbot/Home/RESPOND';
export const INCREMENT = 'borderbot/Home/INCREMENT';

export const SCRIPT = {
    "1": {
        text: "hello",
        options: {
            "1": {
                text: "hi",
                next_script_id: "2"
            },
            "2": {
                text: "ho",
                next_script_id: "2"
            }
        }
    },
    "2": {
        text: "bye",
        options: {
            "1": {
                text: "see ya",
                next_script_id: "1"
            },
            "2": {
                text: "byeee",
                next_script_id: "1"
            }
        }
    }
};