import React, { forwardRef } from 'react'
import './Message.css';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Message = forwardRef(({username,message}, ref) => {
    const isUser = username===message.username
    return (
        
        <div ref={ref} className={`message ${isUser &&       'message__user'}`}>
            <p 
                        className="message__username"
                    >       {message.username}
            </p>
            <Card 
                className={isUser ? "message__userCard" : "message__guestCard"}
            >
                <CardContent>
                    <Typography
                        color='white'
                        variant='h6'
                        component='h6'
                    >
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
