/**
*
* Conversation
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ChatFeed from 'components/ChatFeed';
import ConversationContext from 'components/ConversationContext';

import UserChoices from 'containers/UserChoices';


const ConversationWrapper = styled.div`
    position:relative;
`

const ConversationContextWrapper = styled.div`
    position:fixed;
    width:25%;
    
    
`

const ChatWrapper = styled.div`
    float:left;
    margin-left:25%;
    width:50%;
`

function Conversation(props) {

    const messages = props.feed.map(item => {
        return {
            speaker: item.speaker,
            status: item.status, //TODO: where used?
            type: item.type,
            content: item.content
        }
    }).toArray()

    return (
        <ConversationWrapper>
            
            <ConversationContextWrapper>
                <ConversationContext messages={messages} />
            </ConversationContextWrapper>

            <ChatWrapper>
                <ChatFeed messages={messages} />
                <UserChoices /> 
            </ChatWrapper>

        </ConversationWrapper>
    );
}

Conversation.propTypes = {
    feed: React.PropTypes.object
};

export default Conversation;
