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

const chatMessages = [{
        "type" : 0,
        "image": "cat.jpg",
        "text": "Hello! Good Morning!"
    }, {
        "type": 1,
        "image": "dog.jpg",
        "text": "Hello! Good Afternoon!"
    }];

function Conversation(props) {

    const messages = props.feed.map(item => {
        console.log(item);
        return {
        type: item.type,
        image: "dog.jpg",
        text: item.content.text
        }
    }).toArray()


    return (
        <ConversationWrapper>
            <ChatFeed script = {props.script} messages = {messages} />
            <UserChoices script = {props.script} current_stage_id = {props.current_stage_id} />
        </ConversationWrapper>
    );
}

Conversation.propTypes = {

};

export default Conversation;
