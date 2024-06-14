# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### FunctionParams <a name="FunctionParams" id="jsii-docgen-mre.FunctionParams"></a>

Function parameters.

#### Initializer <a name="Initializer" id="jsii-docgen-mre.FunctionParams.Initializer"></a>

```typescript
import { FunctionParams } from 'jsii-docgen-mre'

const functionParams: FunctionParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.FunctionParams.property.paramOne">paramOne</a></code> | <code>string \| <a href="#jsii-docgen-mre.IOne">IOne</a>[]</code> | *No description.* |
| <code><a href="#jsii-docgen-mre.FunctionParams.property.paramTwo">paramTwo</a></code> | <code><a href="#jsii-docgen-mre.IOne">IOne</a>[] \| string[]</code> | *No description.* |

---

##### `paramOne`<sup>Required</sup> <a name="paramOne" id="jsii-docgen-mre.FunctionParams.property.paramOne"></a>

```typescript
public readonly paramOne: string | IOne[];
```

- *Type:* string | <a href="#jsii-docgen-mre.IOne">IOne</a>[]

---

##### `paramTwo`<sup>Required</sup> <a name="paramTwo" id="jsii-docgen-mre.FunctionParams.property.paramTwo"></a>

```typescript
public readonly paramTwo: IOne[] | string[];
```

- *Type:* <a href="#jsii-docgen-mre.IOne">IOne</a>[] | string[]

---

## Classes <a name="Classes" id="Classes"></a>

### ConstructFoo <a name="ConstructFoo" id="jsii-docgen-mre.ConstructFoo"></a>

#### Initializers <a name="Initializers" id="jsii-docgen-mre.ConstructFoo.Initializer"></a>

```typescript
import { ConstructFoo } from 'jsii-docgen-mre'

new ConstructFoo(fnParams: FunctionParams)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.ConstructFoo.Initializer.parameter.fnParams">fnParams</a></code> | <code><a href="#jsii-docgen-mre.FunctionParams">FunctionParams</a></code> | *No description.* |

---

##### `fnParams`<sup>Required</sup> <a name="fnParams" id="jsii-docgen-mre.ConstructFoo.Initializer.parameter.fnParams"></a>

- *Type:* <a href="#jsii-docgen-mre.FunctionParams">FunctionParams</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#jsii-docgen-mre.ConstructFoo.add">add</a></code> | *No description.* |

---

##### `add` <a name="add" id="jsii-docgen-mre.ConstructFoo.add"></a>

```typescript
public add(num_one: number, num_two: number): number
```

###### `num_one`<sup>Required</sup> <a name="num_one" id="jsii-docgen-mre.ConstructFoo.add.parameter.num_one"></a>

- *Type:* number

---

###### `num_two`<sup>Required</sup> <a name="num_two" id="jsii-docgen-mre.ConstructFoo.add.parameter.num_two"></a>

- *Type:* number

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.ConstructFoo.property.internalParam">internalParam</a></code> | <code>string \| <a href="#jsii-docgen-mre.IOne">IOne</a>[]</code> | *No description.* |

---

##### `internalParam`<sup>Required</sup> <a name="internalParam" id="jsii-docgen-mre.ConstructFoo.property.internalParam"></a>

```typescript
public readonly internalParam: string | IOne[];
```

- *Type:* string | <a href="#jsii-docgen-mre.IOne">IOne</a>[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IOne <a name="IOne" id="jsii-docgen-mre.IOne"></a>

- *Implemented By:* <a href="#jsii-docgen-mre.IOne">IOne</a>

Interface for providing config for paramOne.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.IOne.property.foo">foo</a></code> | <code>string</code> | Param foo. |

---

##### `foo`<sup>Required</sup> <a name="foo" id="jsii-docgen-mre.IOne.property.foo"></a>

```typescript
public readonly foo: string;
```

- *Type:* string

Param foo.

---

