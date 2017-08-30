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
import ConversationScore from 'components/ConversationScore';

import UserChoices from 'containers/UserChoices';


const ConversationWrapper = styled.div`
    position:relative;
`;

const ConversationContextWrapper = styled.div`
    position:fixed;
    width:25%;
`;

const ChatWrapper = styled.div`
    float:left;
    margin-left:25%;
    width:50%;
`;

const ConversationScoreWrapper = styled.div`
    position:fixed;
    margin-left:75%;
    width:25%;
`;

function Conversation(props) {

    const messages = props.feed.map(item => {
        return {
            speaker: item.speaker,
            status: item.status, //TODO: where used?
            type: item.type,
            content: item.content
        }
    }).toArray();

    const context = props.context;
    const scores = props.scores;

    return (
        <ConversationWrapper>
            
            <ConversationContextWrapper>
                <ConversationContext context={context} />
            </ConversationContextWrapper>

            <ChatWrapper>
                <ChatFeed messages={messages} />
                <UserChoices /> 
            </ChatWrapper>

            <ConversationScoreWrapper>
                <ConversationScore scores={scores} />
            </ConversationScoreWrapper>

        </ConversationWrapper>
    );
}

Conversation.propTypes = {
    feed: React.PropTypes.object,
};

export default Conversation;
