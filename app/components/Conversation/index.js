/**
*
* Conversation
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ConversationContext from 'components/ConversationContext';
import ChatFeed from 'components/ChatFeed';
// import ConversationScore from 'components/ConversationScore';
import ConversationScoreHighlighted from 'components/ConversationScoreHighlighted';

import UserChoices from 'containers/UserChoices';


const ConversationWrapper = styled.div`
    position:relative;
`;

// const ConversationContextWrapper = styled.div`
//     position:fixed;
//     width:25%;
// `;

const ChatWrapper = styled.div`
    position:relative;
    z-index:1;
    float:left;
    width:70%;
`;

const ConversationScoreWrapper = styled.div`
    position:fixed;
    margin-left:70%;
    width:30%;
    height: calc( 100% - 120px);
    background:#5cbfdc;
    display: flex;
    flex-direction: column;
`;

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
        <ConversationWrapper>

            <ChatWrapper>
                <ChatFeed messages={messages} />
                <UserChoices /> 
            </ChatWrapper>

            <ConversationScoreWrapper>
                <ConversationContext context={context} />
                <ConversationScoreHighlighted scores={scores} />
            </ConversationScoreWrapper>

        </ConversationWrapper>
    );
}

Conversation.propTypes = {
    feed: React.PropTypes.object,
};

export default Conversation;
