import React from 'react';
import Image from '../Image'

import { GRID, POEMA } from './style.js';
import getImages from '../../services/ImageService';

const images = getImages();

const Gallery = () => {
    return (
        <GRID>
            <POEMA>
                <h2>Corazón coraza</h2>
                <article>
                    <p>Porque te tengo y no<br />porque te pienso<br />porque la noche est&aacute; de ojos abiertos<br />porque la noche pasa y digo amor<br />porque has venido a recoger tu imagen<br />y eres mejor que todas tus im&aacute;genes<br />porque eres linda desde el pie hasta el alma<br />porque eres buena desde el alma a m&iacute;<br />porque te escondes dulce en el orgullo<br />peque&ntilde;a y dulce<br />coraz&oacute;n coraza</p>
    <p>porque eres m&iacute;a<br />porque no eres m&iacute;a<br />porque te miro y muero<br />y peor que muero<br />si no te miro amor<br />si no te miro</p>
    <p>porque t&uacute; siempre existes dondequiera<br />pero existes mejor donde te quiero<br />porque tu boca es sangre<br />y tienes fr&iacute;o<br />tengo que amarte amor<br />tengo que amarte<br />aunque esta herida duela como dos<br />aunque te busque y no te encuentre<br />y aunque<br />la noche pase y yo te tenga<br />y no.</p>
                </article>
                <p className="autor"><em>Mario Benedetti</em></p>
            </POEMA>
            {
                images.map( (image, i) =>  <Image key={i} img={image.img} description={image.message} place={image.place} /> )
            }
        </GRID>
    )
}

export default Gallery