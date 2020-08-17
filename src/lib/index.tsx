import { CoachMarkContainer } from './containers';
import './styles/index.less';


// function CoachMarkWeb(...args: any) {
//     if (!document.getElementById('harsh-cm')) {
//         const div = document.createElement('div');
//         div.id = 'harsh-cm';
//         document.body.appendChild(div)
//     }
//     ReactDOM.render(
//         <CoachMarkContainer {...args[0]} />,
//         document.getElementById('harsh-cm')
//     );
// }

export * from './types';
export { CoachMarkContainer as CoachMark };

