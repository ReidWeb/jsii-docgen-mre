import {ConstructFoo, ParamType} from './ConstructFoo'

const arrayParams : ParamType[]  = [
    {
      foo: 'bar'
    },
    'foobar'
]

const instance : ConstructFoo = new ConstructFoo({paramOne: arrayParams})
instance.add(1, 1)