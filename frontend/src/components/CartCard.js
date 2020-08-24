import React from 'react'
import {Card,CardHeader} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


export default function CartCard({title, actionTitle, actionLink, children}) {
   

    return (
            <Card>
                <CardHeader title={title}>  </CardHeader>
                <CardContent> 
                    <Typography variant="body2" color="textSecondary" component="p">
                        {children}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small"> 
                        <Link href={actionLink}> {actionTitle} </Link>
                    </Button>
                </CardActions>   
                
            </Card>
        
    )
}
