/**
 * Interface for providing config for paramOne
 */
export interface IOne {
    /**
     * Param foo
     */
    readonly foo: string
}

/**
 * Declared type to wrap two options user can provide for the param
 */
export type ParamType = string | IOne


/**
 * Function parameters
 */
export interface FunctionParams {
    readonly paramOne: ParamType[]
}

export class ConstructFoo {

    readonly internalParam: ParamType[]

    constructor(fnParams: FunctionParams) {
        this.internalParam = fnParams.paramOne
    }

    public add(num_one :number, num_two: number) {
        return num_one + num_two
    }

}

