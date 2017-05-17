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
import UserChoices from 'containers/UserChoices';

const ConversationWrapper = styled.div`
  margin-top:200px;
`

function Conversation(props) {

    const messages = props.feed.map(item => {
        // console.log(item);
        return {
            type: item.type,
            status: item.status,
            image: "dog.jpg",
            text: item.content.text
        }
    }).toArray()


    return (
        <ConversationWrapper>
            <ChatFeed messages = {messages} />
            <UserChoices />
        </ConversationWrapper>
    );
}

Conversation.propTypes = {
    feed: React.PropTypes.object
};

export default Conversation;
