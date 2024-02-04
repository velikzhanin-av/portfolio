import React from 'react';
import IconsSprite from '../../assets/images/icons-sprite.svg'
import iconReact from './../../assets/images/logos_react.svg'

type IconsPropsType = {
    iconId: string,
    height?: string,
    width?: string,
    viewBox?: string
}

export const Icon = (props: IconsPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 120 120'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </svg>
    )
}

