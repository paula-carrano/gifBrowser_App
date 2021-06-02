import React, { FC } from 'react';
import { Card, CardActionArea, CardContent, Typography, GridJustification } from '@material-ui/core'
import { Gif } from '../../type';
import './styles.css'

const CardGif: FC<{ data: Gif }> = ({ data }) => {
    const { title, embed_url } = data

    return (
        <div>
            <Card variant="outlined">
                <CardActionArea>
                    <CardContent>
                        <iframe
                            src={embed_url}
                            frameBorder={0}
                            width={250}
                            className="giphy-embed"
                            title={title}
                            allowFullScreen></iframe>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" component="h6" className="ellipsis">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export { CardGif };
