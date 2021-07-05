import React, { FC } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
import { Gif } from '@services/type';
import './styles.css'


const CardGif: FC<{ data: Gif }> = ({ data }) => {
    const { title, embed_url } = data

    return (
        <div>
            <Card variant="outlined">
                <CardActionArea>
                    <CardContent>
                        <Image src={embed_url} />
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" component="h6" className="ellipsis">
                            {title ? title : "GIF"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export { CardGif };
