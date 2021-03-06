import Css from './Skills/css3.png';
import Html5 from './Skills/html5.png';
import Js from './Skills/javascript.png';
import Monogodb from './Skills/monogodb.png';
import Mysql from './Skills/mysql.png';
import Php from './Skills/php.png';
import React from './Skills/react.png';
import Node from './Skills/node.png';
import Typescript from './Skills/typescript.png';
import AmazonEC2 from './Skills/amazonEC2.png';
import Storybook from './Skills/storybook.png'

export default function getSkill() {
    return [
        {name: 'CSS3', image: Css },
        {name: 'HTML5', image: Html5 },
        {name: 'JS', image: Js },
        {name: 'MONOGODB', image: Monogodb },
        {name: 'MYSQL', image: Mysql },
        {name: 'PHP', image: Php },
        {name: 'REACT', image: React },
        {name: 'NODE', image: Node },
        {name: 'Typescript', image: Typescript },
        {name: 'Amazon EC2', image: AmazonEC2 },
        {name: 'Storybook', image: Storybook },
    ]
}