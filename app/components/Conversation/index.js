/**
*
* Conversation
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import ConversationContext from 'components/ConversationContext';
import ChatFeed from 'components/ChatFeed';
// import ConversationScore from 'components/ConversationScore';
import ConversationScoreHighlighted from 'components/ConversationScoreHighlighted';

import UserChoices from 'containers/UserChoices';
import './styles.css';



function Conversation(props) {

    const messages = props.feed.map(item => {
        return {
            speaker: item.speaker,
            status: item.status, //TODO: where used?
            type: item.type,
            content: item.content,
            more: item.more
        }
    }).toArray();

    const context = props.context;
    const scores = props.scores;

    return (
        <div className='conversation-wrapper'>

            <div className='conversation-score-wrapper'>
                {/* <ConversationContext context={context} /> */}
                <ConversationScoreHighlighted scores={scores} />
            </div>

            <div className='chat-wrapper'>
                <ChatFeed messages={messages} />
                <UserChoices /> 
            </div>

        </div>
    );
}

Conversation.propTypes = {
    feed: React.PropTypes.object,
};

export default Conversation;
