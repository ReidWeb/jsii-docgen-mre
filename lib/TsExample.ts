import {ConstructFoo, ParamType} from './ConstructFoo'

const arrayParams : ParamType[]  = [
    {
      foo: 'bar'
    },
    'foobar'
]

// const asDocsDescribe: string | IOne[]  = [
//     {
//         foo: 'bar'
//     },
//     'foobar'
// ]


const instance : ConstructFoo = new ConstructFoo({paramOne: arrayParams, paramTwo: ['foo']})
instance.add(1, 1)