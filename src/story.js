import { store } from './store/index';

export const story = {
    nodes: [
        {
            id: 0,
            text: '"I want a decision by Friday. By Friday, do you understand me? Or I\'ll have your fucking head."',
            left: {
                toNode: 1,
                text: '"Yes Sir."',
                hint: 'Orders are orders.',
                color: 'green',
                extra() {
                }
            },
            right: {
                toNode: 2,
                text: '"Fuck off."',
                hint: 'What a prick.',
                color: 'red',
                extra() {
                }
            }
        },
        {
            id: 1,
            text: 'This is node 1',
            left: {
                toNode: 1,
                text: 'bla bla',
                hint: 'Orders are orders.',
                extra() {
                }
            },
            right: {
                toNode: 2,
                text: 'bla bla',
                hint: 'What a prick.',
                extra() {
                }
            }
        }
    ]
};
